angular
  .module('app', ['ngHandsontable', 'ngComponentRouter', 'ngMaterial'])
  .config($httpProvider => {
    $httpProvider.defaults.withCredentials = true;
  })
  // .config($locationProvider => {
  //   $locationProvider.html5Mode(true);
  // })
  .value('$routerRootComponent', 'app');
