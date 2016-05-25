class TableController {
  constructor(dataService) {
    dataService
      .getDataTables(51)
      .then(response => {
        this.colHeaders = response.data.columnMetadata.map(column => column.name);
        this.data = response.data.rowData;
      });
    // $http({
    //   method: 'POST',
    //   url,
    //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //   transformRequest: obj => {
    //     const str = [];
    //     for (const p in obj) {
    //       str.push(`${encodeURIComponent(p)}=${encodeURIComponent(obj[p])}`);
    //       return str.join('&');
    //     }
    //   },
    //   data: {username: 'admin', password: 'admin'}
    // }).success(response => {
    //   console.log(response);
    // });
    // const container = document.getElementById('table');
    // const settings = {
    //   data,
    //   colHeaders
    // };
    // this.hot = new Handsontable(container, settings); // eslint-disable-line no-undef
  }

  afterChange(row, index) {
    if (row) {
      console.log(row, index);
    }
  }
}

angular
  .module('app')
  .component('tableComponent', {
    templateUrl: 'app/table.html',
    controller: TableController
  });
