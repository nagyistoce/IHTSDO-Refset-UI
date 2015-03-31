'use strict';

/**
 * @ngdoc overview
 * @name refset
 * @description
 * # refset
 *
 * Main module of the application.
 */
 
var refsetApp = angular
  .module('refset', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngCacheBuster',
    'infinite-scroll',
    'LocalStorageModule',
    'ui.router'
  ])
  refsetApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'DirectoryCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
	  
      .otherwise({
        redirectTo: '/'
      });
  });
