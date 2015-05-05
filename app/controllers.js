(function() {

    var vizController = function ($scope, SyriaTwitterAPI) {

        $scope.selectedNode = null;
        $scope.params = {};
        $scope.userDetails = {}

        $scope.params.clusterviewOptions = [1,2,3,4,5,6,7,8,9,10,11];
        $scope.selectedNodeGroup = 1;

        $scope.params.minFollowerOptions = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850,
            900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350, 1400, 1450, 1500, 1550, 1600, 1650, 1700, 1750, 1800, 1850, 1900, 1950, 2000];
        $scope.params.minFollowers = 500;


        $scope.params.hashtagOptions = ['\u062f\u0648\u0644\u0629_\u0627\u0644\u062e\u0644\u0627\u0641\u0629',
            '\u0627\u0644\u062f\u0648\u0644\u0629_\u0627\u0644\u0625\u0633\u0644\u0627\u0645\u064a\u0629',
            '\u0648\u0644\u0627\u064a\u0629_\u0627\u0644\u0627\u0646\u0628\u0627\u0631',
            '\u0627\u0644\u062f\u0648\u0644\u0629_\u0627\u0644\u0627\u0633\u0644\u0627\u0645\u064a\u0629_\u0641\u064a_\u0627\u0644\u0639\u0631\u0627\u0642_\u0648_\u0627\u0644\u0634\u0627\u0645',
            '\u062f\u0648\u0627\u0639\u0634',
            '\u062f\u0627\u0639\u0634',
            '\u062f\u0627\u0639\u0634\u200e',
            '\u062f\u0627\u0639\u0634\u064a',
            'isis', 'isil', 'islamicstate', 'islamic state', 'daesh', 'da3esh', 'daaesh'];
        $scope.params.hashtagSelected = [];

        $scope.params.isisOptions = [
            'pro',
            'anti',
            'neutral',
            'eng'
        ];
        $scope.params.isisSelected = [
            'pro',
            'anti',
            'neutral',
            'eng'
        ];

        $scope.params.groupOptions = [1,2,3,4,5,6,7,8,9,10,11];
        $scope.params.groupSelected = [1,2,3,4,5,6,7,8,9,10,11];

        $scope.getData = function () {



            SyriaTwitterAPI.graphData({
                "isis_group": $scope.params.isisSelected,
                "min_followers": $scope.params.minFollowers,
                "group": $scope.params.groupSelected,
            }).success(function(response){
                $scope.graph = response;
            });
        };
        $scope.getData();

        $scope.$watch('selectedNode', function(newVal,oldVal) {
            if (newVal !== null) {
                SyriaTwitterAPI.userDetails(newVal)
                .success(function(response){
                    $scope.userDetails = response[0];
            });
            }

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