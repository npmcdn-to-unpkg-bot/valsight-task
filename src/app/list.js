class ListController {
  constructor(dataService) {
    this.dataService = dataService;
    this.tables = [];
    dataService
      .getDataTableList()
      .then(response => {
        this.tables = response.data;
      });
  }

  loadTable(id) {
    
  }
}

angular
  .module('app')
  .component('listComponent', {
    templateUrl: 'app/list.html',
    controller: ListController
  });
