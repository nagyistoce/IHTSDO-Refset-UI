'use strict';

angular.module('refset')
    .factory('MostRecentService', function ($http, ENV) {
        var serviceEndPoint = ENV.apiEndpoint + '/' + 'v1/refsets/latestPublished';
        return {

            findFirstTen: function () {
            	
                return $http.get(serviceEndPoint).then(function (response) {
                	console.log(response.data.content.refsets);
                    return response.data.content.refsets;
                });
            }
        };
    });
