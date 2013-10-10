/**
 * http://www.cnblogs.com/whitewolf/archive/2013/04/16/3024843.html
 * angular js contrller之间的通信
 * @type {module}
 */

var app = angular.module('app', []);
app.controller("parentCtr", ['$scope', function ($scope) {

    //注册事件监听
    $scope.$on("Ctr1NameChange", function (event, msg) {

        console.log("parent", msg);

        //广播事件
        $scope.$broadcast("Ctr1NameChangeFromParrent", msg);

    });

}]);


app.controller("childCtr1", ['$scope', function ($scope) {

    $scope.change = function (name) {

        console.log("childCtr1",name);
        //将事件提交给父contrller
        $scope.$emit("Ctr1NameChange", name);
    }

}]);

app.controller("childCtr2", ['$scope', function ($scope) {

    //监听事件
    $scope.$on('Ctr1NameChangeFromParrent', function (event, msg) {
        console.log("childCtr2", msg);
        $scope.ctrlName = msg;

    });
}]);