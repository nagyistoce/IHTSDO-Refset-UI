'use strict';

/**
 * @ngdoc function
 * @name refset.controller:BrowseCtrl
 * @description
 * # BrowseCtrl
 * Controller of the refset
 */
angular.module('refset')
  .controller('BrowseCtrl', 'RefsetList', function ($scope, RefsetList) {
   RefsetList.get({}, function (refsetlist) {
    $scope.description = refsetList.description;
	
   })
  });
