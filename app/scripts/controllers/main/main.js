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
    $scope.myData = [
    {
        "firstName": "Cox",
        "lastName": "Carney",
        "company": "Enormo",
        "employed": true
    },
    {
        "firstName": "Lorraine",
        "lastName": "Wise",
        "company": "Comveyer",
        "employed": false
    },
    {
        "firstName": "Nancy",
        "lastName": "Waters",
        "company": "Fuelton",
        "employed": false
    }
];
  });
