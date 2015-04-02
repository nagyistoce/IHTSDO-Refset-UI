'use strict';

/**
 * @ngdoc function
 * @name refset.controller:MostViewedCtrl
 * @description
 * # MostViewedCtrl
 * to fetch Most Viewed Refset
 */
angular.module('refset')
  .controller('MostRecentCtrl', function ($scope, $location, $state, MostRecentService) {
      $scope.$state = $state;
      MostRecentService.findFirstTen().then(function (data) {
          $scope.mostrecent = data;
      });
  
      $scope.logout = function () {
          $state.go('/');
      };
  });
