angular.module('feature.login')
    .controller('LoginCtrl', function($scope, $rootScope, $location, $state, $mdDialog){


      $scope.login = function() {

        $location.path($scope.pages[0]);


      }

    });
