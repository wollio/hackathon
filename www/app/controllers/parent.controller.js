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
