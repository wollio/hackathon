angular.module('feature.navigation')
    .controller('ParentCtrl', function($scope, $rootScope, $location, $mdSidenav, $mdDialog){

        $scope.$on('error', function(event, args) {
            alert = $mdDialog.alert({
                title: 'Achtung!',
                content: 'Houston, wir haben ein Problem',
                ok: 'Schlissen'
            });
            $mdDialog
                .show( alert )
                .finally(function() {
                    alert = undefined;
                });
        });





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