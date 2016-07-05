(function (angular) {
    'use strict';

    var moduleName = 'page.home';
    var templateUrl = 'js/pages/home/html/home.html';

    var bindings = {};

    HomePageCtrl.$inject = [];

    function HomePageCtrl() {
    }

    angular.module(moduleName, [
        templateUrl,
        'component.timer'
    ])
    .component('homePage', {
        templateUrl: templateUrl,
        controller: 'homePageCtrl',
        bindings: bindings
    })
    .controller('homePageCtrl', HomePageCtrl);

})(angular);
