angular.module('feature.navigation')
    .controller('ParentCtrl', function($scope, $rootScope, $location, $mdSidenav){
        // Funktion welche die geklickte Seite �ffnet

        $scope.openPage = function(page) {
            $scope.title = page.title;
            $location.path(page.url);
            $mdSidenav('nav').close();
        };

        $scope.reload = function() {
            document.reload();
        };

        $scope.toggleMenu = function() {
            $mdSidenav('nav').toggle();
        };


    });
