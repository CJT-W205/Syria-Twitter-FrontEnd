(function() {

    var vizController = function ($scope, SyriaTwitterAPI) {

        $scope.giraph = {
        "nodes": [
        {
          "id": "n0",
          "label": "A node",
          "x": 0,
          "y": 0,
          "size": 3
        },
        {
          "id": "n1",
          "label": "Another node",
          "x": 3,
          "y": 1,
          "size": 2
        },
        {
          "id": "n2",
          "label": "And a last one",
          "x": 1,
          "y": 3,
          "size": 1
        }
        ],
        "edges": [
        {
          "id": "e0",
          "source": "n0",
          "target": "n1"
        },
        {
          "id": "e1",
          "source": "n1",
          "target": "n2"
        },
        {
          "id": "e2",
          "source": "n2",
          "target": "n0"
        }
        ]
        };



    //    $scope.params = {};
    //    $scope.params.availableGroups = []
        $scope.getData = function () {

            //SyriaTwitterAPI.graphGroups({
            //}).success(function(response){
            //
            //    $scope.params.availableGroups = response.groups;
            //    $scope.params.groups = response.groups;

            SyriaTwitterAPI.graphData({
                "clusters": "to come later"
            }).success(function(response){
                console.log(response);
                $scope.graph = response;

            });
            //});
        };
        $scope.getData();
    //
    //    $scope.updateData = function () {
    //        SyriaTwitterAPI.graphData({
    //            "clusters": $scope.params.groups
    //        }).success(function(response){
    //
    //            $scope.data = response.data;
    //
    //        });
    //    }
    //

    };

    vizController.$inject = ['$scope', 'SyriaTwitterAPI'];
    angular.module('myApp').controller('vizController', vizController);
}());