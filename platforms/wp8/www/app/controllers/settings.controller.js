angular.module('feature.settings')
    .controller('SettingsCtrl', function($scope, $rootScope, $location, $state){
        $rootScope.$broadcast('changeMenuVisibility', false);
    });