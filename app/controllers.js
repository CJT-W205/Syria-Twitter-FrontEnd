(function() {

    var vizController = function ($scope, SyriaTwitterAPI) {
        $scope.params = {};
        $scope.params.availableGroups = []
        $scope.getData = function () {

            SyriaTwitterAPI.graphGroups({
            }).success(function(response){

                $scope.params.availableGroups = response.groups;
                $scope.params.groups = response.groups;

                SyriaTwitterAPI.graphData({
                    "clusters": $scope.params.groups
                }).success(function(response){

                    $scope.data = response.data;

                });
            });
        };
        $scope.getData();

        $scope.updateData = function () {
            SyriaTwitterAPI.graphData({
                "clusters": $scope.params.groups
            }).success(function(response){

                $scope.data = response.data;

            });
        }

    };

    vizController.$inject = ['$scope', 'SyriaTwitterAPI'];
    angular.module('myApp').controller('vizController', vizController);
}());