var myApp = angular.module("myModule",[]);

var myController = function($scope){
    $scope.message="hello";

}

myApp.controller("myController",myController);