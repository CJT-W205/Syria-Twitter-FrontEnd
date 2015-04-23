(function() {
    var SyriaTwitterAPI = function($http) {

        var servers = {'local': 'http://127.0.0.1:5000', 'production': 'http://169.53.140.164:8000'};
        var server_url = servers.production;

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