// http://toddmotto.com/ultimate-guide-to-learning-angular-js-in-one-day/
var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', ['$scope','Matha', function ($scope,Matha) {
    $scope.user = {};
    $scope.user.details = {
        "username": "Todd motto",
        "id": "8910111"
    };
    console.log(Matha.multiply(2, 2));

    $scope.a = 'abcdefg';

    $scope.numbers = [10, 11, 23, 44, 55, 67, 87, 99, 101];
    $scope.lowerBound = 42;

    $scope.greatThen=function(item) {
        return item > $scope.lowerBound;
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

myApp.service('Matha', function () {
    this.multiply = function (x, y) {
        return x * y;
    };
});

myApp.factory('Server',function(){

    return{
        get:function(url) {
            return $http.get(url);
        },
        post:function(url) {
            return $http.post(url);
        }
    }
});

myApp.filter('reverse',function(){

    return function(input,uppercase) {
        var out = '';
        for(var i = input.length;i>0;i--) {
            out += input.charAt(i);
        }
        if(uppercase) {
            out = out.toUpperCase();
        }
        return out;

    };
});

