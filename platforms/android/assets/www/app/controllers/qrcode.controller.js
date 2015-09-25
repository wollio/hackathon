angular.module('feature.qrcode')
    .controller('QrCodeCtrl', function($scope, $rootScope, $location, $state, $http, $mdDialog){
        $rootScope.$broadcast('changeMenuVisibility', false);

      $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(
           function (result) {
               if (result.cancelled != 1) {
                   $http.post(result.text, {}).
                       then(function(response) {
                           alert = $mdDialog.alert({
                               title: 'Toll',
                               content: 'QR-Scan erfolgreich.',
                               ok: 'Schlissen'
                           });
                           $mdDialog
                               .show( alert )
                               .finally(function() {
                                   alert = undefined;
                               });
                       }, function(response) {
                           $rootScope.$broadcast('error');
                       });
               }
           },
           function (error) {
               $rootScope.$broadcast('error');
           }
        );  
      }

    });
