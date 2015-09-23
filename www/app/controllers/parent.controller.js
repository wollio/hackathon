angular.module('feature.navigation')
    .controller('ParentCtrl', function($scope, $rootScope, $location, $mdSidenav){
        // Funktion welche die geklickte Seite öffnet
        $scope.openPage = function (page) {
            $location.path(page);
        };

        $scope.openPage = function(page) {
            $location.path(page);
            $mdSidenav('nav').close();
        };

        $scope.reload = function() {
            document.reload();
        };

        $scope.toggleMenu = function() {
            $mdSidenav('nav').toggle();
        };


    });