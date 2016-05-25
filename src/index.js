angular
  .module('app', ['ngHandsontable', 'ngComponentRouter', 'ngMaterial'])
  .config($httpProvider => {
    $httpProvider.defaults.withCredentials = true;
  })
  .value('$routerRootComponent', 'app');
