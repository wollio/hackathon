angular.module('feature.history')
    .controller('HistorysCtrl', function($scope, $rootScope, $location, $state, $http){
        $http.get('http://hackathon-secanis.rhcloud.com/index.php/api/history').
            then(function (resp) {
                $scope.history = resp.data;
            }, function (response) {
                $rootScope.$broadcast('error');
            });
    });