angular.module('feature.history')
    .controller('HistorysCtrl', function($scope, $rootScope, $location, $state, $http){
        $rootScope.$broadcast('changeMenuVisibility', false);
        $http.get('https://pfhackathon.secanis.ch/api/history').
            then(function (resp) {
                $scope.history = resp.data;
            }, function (response) {
                $rootScope.$broadcast('error');
            });
    });
