angular
  .module('app')
  .service('dataService', DataService)
  .component('app', {
    templateUrl: 'app/main.html',
    $routeConfig: [
      {path: '/tables', name: 'List', component: 'listComponent', useAsDefault: true},
      {path: '/tables/:id', name: 'Table', component: 'tableComponent', useAsDefault: false}
    ]
  });
