'use strict';

angular.module('keenerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/workspaces', {
        templateUrl: 'views/workspaces.html',
        controller: 'WorkspacesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
