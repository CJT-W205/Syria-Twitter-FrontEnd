(function() {

    var vizController = function ($scope, SyriaTwitterAPI) {

        $scope.selectedNode = null;
        $scope.params = {};
        $scope.userDetails = {}

        $scope.params.minFollowerOptions = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
            900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000];
        $scope.params.minFollowers = 500;

        $scope.params.hashtagOptions = [
            'hashtag1',
            'hashtag2',
            'hashtag3',
            'hashtag4',
            'hashtag5',
            'hashtag6',
            'hashtag7',
            'hashtag8',
            'hashtag9',
            'hashtag10'
        ];
        $scope.params.hashtagSelected = [
            'hashtag1',
            'hashtag2',
            'hashtag3'
        ];

        $scope.params.groupOptions = [
            'pro',
            'anti',
            'neutral',
            'eng'
        ];
        $scope.params.groupSelected = [
            'pro',
            'anti',
            'neutral',
            'eng'
        ];

        $scope.getData = function () {



            SyriaTwitterAPI.graphData({
                "min_followers": $scope.params.minFollowers,
                "hashtags": $scope.params.hashtagSelected,
                "isis_group": $scope.params.groupSelected
            }).success(function(response){
                console.log(response);
                $scope.graph = response;
            });
        };
        $scope.getData();

        $scope.$watch('selectedNode', function(newVal,oldVal) {
            SyriaTwitterAPI.userDetails(newVal)
                .success(function(response){
                    $scope.userDetails = response[0];
                    console.log($scope.userDetails.name);
            });
        });



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