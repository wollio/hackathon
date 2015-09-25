angular.module('feature.reward')
    .controller('RewardCtrl', function($scope, $rootScope, $location, $state, $http){

        $http.get('http://hackathon-secanis.rhcloud.com/index.php/api/reward/' + id).
            then(function (resp) {
                $scope.rewards = resp.data;

            }, function (response) {
                $rootScope.$broadcast('error');
            });
    });