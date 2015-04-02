'use strict';

/**
 * @ngdoc function
 * @name refset.controller:MostViewedCtrl
 * @description
 * # MostViewedCtrl
 * to fetch Most Viewed Refset
 */
angular.module('refset')
  .controller('MostViewedCtrl', function ($scope, $location, $state, MostViewedService) {
      $scope.$state = $state;
      MostViewedService.find5(0, 5).then(function (data) {
          $scope.mostviewed = data;
      });
  
      $scope.logout = function () {
          $state.go('/');
      };
  });
