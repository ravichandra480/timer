angular.module('app.config', [
    'ui.router',
    'page.home'
])
.config(['$locationProvider', '$stateProvider',
    function ($locationProvider, $stateProvider) {
        $locationProvider.hashPrefix('!');
        $locationProvider.html5Mode({ enabled: true, requireBase: false });

        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-page></home-page>'
            });
    }
]);
