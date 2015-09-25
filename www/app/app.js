angular.module('feature.overview', []);
angular.module('feature.qrcode', []);
angular.module('feature.history', []);
angular.module('feature.settings', []);
angular.module('feature.navigation', []);
angular.module('feature.parent', []);
angular.module('feature.history', []);
angular.module('feature.reward', []);
angular.module('feature.login', []);



angular.module('beFineApp',
    [
        'ngResource',
        'ui.router',
        'feature.overview',
        'feature.qrcode',
        'feature.settings',
        'feature.navigation',
        'feature.parent',
        'feature.reward',
        'feature.history',
        'feature.login'
    ]);

angular.module('beFineApp', [
    'ngAnimate', 'ngResource', 'ui.router', 'ngMaterial', 'feature.overview', 'feature.qrcode', 'feature.settings', 'feature.navigation', 'feature.parent', 'feature.reward', 'feature.login', 'feature.history'
    
]).config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
//        this state will be visible to everyone
        .state('root', {
            url: '',
            views: {
                '': {
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })

        .state('/', {
            url: '/',
            views: {
                '': {
                    templateUrl: 'app/views/login.html',
                    controller: 'LoginCtrl'
                }
            }
        })

        .state('overview', {
            url: '/overview',
            views: {
                '': {
                    templateUrl: 'app/views/overview.html',
                    controller: 'OverviewCtrl'
                }
            }
        })

        .state('qrcode', {
            url: '/qrcode',
            views: {
                '': {
                    templateUrl: 'app/views/qrcode.html',
                    controller: 'QrCodeCtrl'
                }
            }
        })
        .state('reward', {
            url: '/reward/:id',
            views: {
                '': {
                    templateUrl: 'app/views/reward.html',
                    controller: 'RewardCtrl'
                }
            }
        })

        .state('history', {
            url: '/history',
            views: {
                '': {
                    templateUrl: 'app/views/history.html',
                    controller: 'HistorysCtrl'
                }
            }
        })

        .state('settings', {
            url: '/settings',
            views: {
                '': {
                    templateUrl: 'app/views/settings.html',
                    controller: 'SettingsCtrl'
                }
            }
        })

//    .state('login', {
//        url: '/login',
//        authenticate: false,
//        views: {
//            publicNav: {
//                templateUrl: 'views/publicNav.html'
//            },
//            default: {
//                templateUrl: 'views/login.html',
//                controller: 'AuthCtrl'
//           }
//        }
//    })

        .state('404', {
            url: '/404',
            authenticate: false,
            views: {
                '': {
                    templateUrl: 'app/views/404.html'
                }
            }
        })

    $urlRouterProvider.otherwise("/404");

}).config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('amber')
        .accentPalette('brown');
});

angular.module('beFineApp').run(function ($rootScope, $location, $state) {
    /**
     * App Configuration
     * !do not modify!
     */
    $rootScope.appVersion = "0.1.0";
    $rootScope.apiPath = '/api/';
    $rootScope.formatDate = 'dd.MM.yyyy';
    $rootScope.formatDateTime = 'dd.MM.yyyy HH:mm:ss';

})
