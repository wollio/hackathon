angular.module('feature.navigation')
    .controller('NavigationCtrl', function($scope, $rootScope, $location, $state){
        $scope.pages = [
            {
                url: '/',
                title: 'Quests',
                icon: 'trophy',
            },
            {
                url: '/',
                title: 'QR-Scanner',
                icon: 'qrcode',
            },
            {
                url: '/admin/timeline',
                title: 'History',
                icon: 'list',
            },
        ];


        $scope.actions = [
            {
                url: '/',
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