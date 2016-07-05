(function (angular) {
    'use strict';

    var moduleName = 'component.timer';
    var templateUrl = 'js/components/timer/html/timer.html';

    var bindings = {};

    TimerCtrl.$inject = ['$interval', '$filter'];

    function TimerCtrl($interval, $filter) {
        var $ctrl = this;
        var day = 11;
        var month = 11;
        var year = 2016;

        var dest = new Date(year, month, day);
        var today = new Date();

        $ctrl.diff = dest.getTime() - today.getTime();

        $ctrl.days = $filter('date')(this.diff, 'w');
        $ctrl.hours =  $filter('date')(this.diff, 'HH');
        $ctrl.minutes =  $filter('date')(this.diff, 'mm');
        $ctrl.seconds =  $filter('date')(this.diff, 'ss');


        $interval(function () {
            $ctrl.diff = dest.getTime() - today.getTime();

            $ctrl.days = $filter('date')(this.diff, 'w');
            $ctrl.hours =  $filter('date')(this.diff, 'HH');
            $ctrl.minutes =  $filter('date')(this.diff, 'mm');
            $ctrl.seconds =  $filter('date')(this.diff, 'ss');
        }, 100);

        console.log(this.days);
    }

    angular.module(moduleName, [
        templateUrl
    ])
    .component('timer', {
        templateUrl: templateUrl,
        controller: 'timerCtrl',
        bindings: bindings
    })
    .controller('timerCtrl', TimerCtrl);

})(angular);
