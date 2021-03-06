angular.module('feature.navigation')
    .controller('NavigationCtrl', function($scope, $rootScope, $location, $state){
        $scope.pages = [
            {
                url: '/overview',
                title: 'Quests',
                icon: 'trophy',
            },
            {
                url: '/qrcode',
                title: 'QR-Scanner',
                icon: 'qrcode',
            },
            {
                url: '/history',
                title: 'Verlauf',
                icon: 'list',
            },
            {
                url: '/settings',
                title: 'Einstellungen',
                icon: 'cog',
            },
        ];


        $scope.actions = [
            {
                url: '/overview',
                title: 'Aktualisieren',
                icon: 'refresh',
            },
            {
                url: '/',
                title: 'Logout',
                icon: 'sign-out',
            },
        ];
 });
