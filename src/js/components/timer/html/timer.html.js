angular.module("js/components/timer/html/timer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/components/timer/html/timer.html",
    "<div class=\"timer__background\"><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.days\"></div><div class=\"title\">DAYS</div></div><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.hours\"></div><div class=\"title\">HOURS</div></div><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.minutes\"></div><div class=\"title\">MINUTES</div></div><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.seconds\"></div><div class=\"title\">SECONDS</div></div></div><div ng-bind=\"$ctrl.diff\"></div>");
}]);
