// http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/
var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd motto",
        "id": "8910111"
    };
}]);

myApp.directive('customButton', function () {
    return {
        restrict: 'A',
        replace: true,
        transclude: true,
        template: '<a href="" class="myawesomebutton" ng-transclude>' +
            '<i class="icon-ok-sign"></i>' +
            '</a>',
        link: function (scope, element, attrs) {
            // DOM manipulation/events here!
        }
    };
});