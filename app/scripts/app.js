'use strict';

/**
 * @ngdoc overview
 * @name joaoMartinsgithubioDevApp
 * @description
 * # joaoMartinsgithubioDevApp
 *
 * Main module of the application.
 */
angular
  .module('joaoMartinsgithubioDevApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.gravatar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
