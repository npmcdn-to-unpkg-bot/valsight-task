class TableController {
  constructor(dataService, $timeout) {
    this.$timeout = $timeout;
    this.dataService = dataService;
    this.updatingTable = false;
    this.updated = false;
  }

  $routerOnActivate(next) {
    this.id = next.params.id;
    const self = this;
    self.dataService
      .getDataTable(self.id)
      .then(response => {
        self.settings = {
          colHeaders: response.data.columnMetadata.map(column => column.name),
          contextMenu: ['row_above', 'row_below', 'remove_row'],
          afterChange: self.afterChange.bind(self)
        };
        self.columnMetadata = response.data.columnMetadata;
        self.colHeaders = response.data.columnMetadata.map(column => column.name);
        self.data = response.data.rowData;
      });
  }

  afterChange(row) {
    const self = this;
    if (row) {
      self.updatingTable = true;
      self.dataService
        .putDataTables(self.id, this.data, this.columnMetadata)
        .then(() => {
          self.updatingTable = false;
          self.updated = true;
          self.$timeout(() => {
            self.updated = false;
          }, 1500);
        });
    }
  }
}

angular
  .module('app')
  .component('tableComponent', {
    templateUrl: 'app/table.html',
    controller: TableController
  });
