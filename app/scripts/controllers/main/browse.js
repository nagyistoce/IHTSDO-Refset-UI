'use strict';

/**
 * @ngdoc function
 * @name refset.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the refset
 */
angular.module('refset')
  .controller('BrowseCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
