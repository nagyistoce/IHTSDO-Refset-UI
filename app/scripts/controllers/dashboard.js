'use strict';

/**
 * @ngdoc function
 * @name refset.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the devApp
 */
angular.module('refset')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
