'use strict';

/**
 * @ngdoc function
 * @name refset.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the refset
 */
angular.module('refset')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
