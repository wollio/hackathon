angular.module('feature.login')
    .controller('LoginCtrl', function ($scope, $rootScope, $location, $state, $mdDialog) {

        $rootScope.$broadcast('changeMenuVisibility', true);
        $scope.login = function () {
            $location.path('overview');
        }

    });
