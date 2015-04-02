'use strict';

angular.module('refset')
    .factory('MostViewedService', function ($http, ENV) {
        var serviceEndPoint = ENV.apiEndpoint + '/' + 'v1/refsets/mostviewed';
        return {

            findFirstTen: function () {
            	
                return $http.get(serviceEndPoint).then(function (response) {
                    
                	return response.data.content.refsets;
                });
            },
            find5: function (from, to) {
            	
            	return $http.get(serviceEndPoint, {
            		params: {from: from, to: to}}
            	).then(function (response) {
                	console.log(response.data.content.refsets);

                    return response.data.content.refsets;
                });
            }
        };
    });
