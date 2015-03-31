'use strict';

/**
 * @ngdoc function
 * @name refset.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the refset
 */
angular.module('refset')
  .controller('BrowseCtrl', 
  function ($scope, RefsetList) {
	   $scope.refsets = RefsetService.findAll();
   RefsetList.get({}, function (refsetList) {
    $scope.description = refsetList.description;
	
   })
  });
