(function (angular) {
    'use strict';

    var moduleName = 'page.home';
    var templateUrl = 'js/pages/home/html/home.html';

    var bindings = {};

    HomePageCtrl.$inject = ['$interval', '$filter'];

    function HomePageCtrl($interval, $filter) {
        var i = 1;

        var $ctrl = this;
        var day = 11;
        var month = 10;
        var year = 2016;

        var dest = new Date(year, month, day);

        console.log(new Date());

        $ctrl.addShakeClass = true;

        $ctrl.endDate = $filter('date')(dest, 'medium');

        $ctrl.counter = function () {

            var diff = (dest.getTime()) - new Date().getTime();

            $ctrl.days = Math.floor(diff / (1000 * 60 * 60 * 24));
            $ctrl.hours =  Math.floor((diff / (1000 * 60 * 60)) % 24);
            $ctrl.minutes =  Math.floor((diff / 1000 / 60) % 60);
            $ctrl.seconds =  Math.floor((diff / 1000) % 60);

            $ctrl.addShakeClass = !$ctrl.addShakeClass;
        };

        $ctrl.counter();

        $interval($ctrl.counter, 100);

    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component('homePage', {
        templateUrl: templateUrl,
        controller: 'homePageCtrl',
        bindings: bindings
    })
    .controller('homePageCtrl', HomePageCtrl);

})(angular);
