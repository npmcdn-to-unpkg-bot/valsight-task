class TableController {
  constructor(dataService) {
    this.dataService = dataService;
  }

  $routerOnActivate(next) {
    const id = next.params.id;
    const self = this;
    self.dataService
      .getDataTable(id)
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
      self.dataService
        .putDataTables(51, this.data, this.columnMetadata)
        .then(response => {
          console.log(response);
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
