angular.module("js/pages/home/html/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("js/pages/home/html/home.html",
    "<div class=\"timer__background\"><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.days\"></div><div class=\"title\">DAYS</div></div><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.hours\"></div><div class=\"title\">HOURS</div></div><div class=\"blocks\"><div class=\"number\" ng-bind=\"$ctrl.minutes\"></div><div class=\"title\">MINUTES</div></div><div class=\"blocks\"><div class=\"number shake\" ng-bind=\"$ctrl.seconds\"></div><div class=\"title\">SECONDS</div></div></div><br><div class=\"end-date\">{{$ctrl.endDate}}</div><div class=\"pyro\"><div class=\"before\"></div><div class=\"after\"></div></div>");
}]);
