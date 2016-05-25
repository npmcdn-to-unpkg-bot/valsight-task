angular
  .module('app', ['ngHandsontable'])
  .config($httpProvider => {
    $httpProvider.defaults.withCredentials = true;
  });
