angular.module('feature.qrcode')
    .controller('QrCodeCtrl', function($scope, $rootScope, $location, $state){


      $scope.scan = function() {
        cordova.plugins.barcodeScanner.scan(
           function (result) {
               alert("We got a barcode\n" +
                     "Result: " + result.text + "\n" +
                     "Format: " + result.format + "\n" +
                     "Cancelled: " + result.cancelled);
           },
           function (error) {
               alert("Scanning failed: " + error);
           }
        );  
      }

    });
