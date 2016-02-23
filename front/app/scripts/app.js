angular.module('minesdouaiself', [
  "ngRoute",
  "ngResource"
]).
  config(function($routeProvider) {
    $routeProvider.
    when('/', {
      controller: "MainCtrl",
      controllerAs: "main",
      templateUrl: 'app/views/main.html'
    });
});
