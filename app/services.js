(function() {
    var SyriaTwitterAPI = function($http) {

        var server_url = 'http://127.0.0.1:5000';

        var factory = {};
        factory.graphGroups = function() {
            return $http.get(server_url+'/graph');
        };
        factory.graphData = function(params) {
            return $http.put(server_url+'/graph', params);
        };
        return factory;
    };

    SyriaTwitterAPI.$inject = ['$http'];
    angular.module('myApp').factory('SyriaTwitterAPI', SyriaTwitterAPI);

}());