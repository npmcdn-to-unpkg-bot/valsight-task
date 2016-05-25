class ListController {
  constructor(dataService, $window) {
    this.dataService = dataService;
    this.tables = [];
    dataService
      .getDataTableList()
      .then(response => {
        this.tables = response.data;
      }, () => {
        $window.location.href = `${API_URL}login`;
      });
  }
}

angular
  .module('app')
  .component('listComponent', {
    templateUrl: 'app/list.html',
    controller: ListController
  });
