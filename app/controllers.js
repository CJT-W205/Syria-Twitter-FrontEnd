(function() {

    var vizController = function ($scope, SyriaTwitterAPI) {
        $scope.getData = function () {
            SyriaTwitterAPI.graphData({
                "clusters": [1,2,3,4,5]
            }).success(function(response){
                $scope.data = response.data;
                $scope.groups = response.groups;
            });
        };
        $scope.getData();

    };

    vizController.$inject = ['$scope', 'SyriaTwitterAPI'];
    angular.module('myApp').controller('vizController', vizController);
}());