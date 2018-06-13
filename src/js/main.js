/* Controllers */

angular.module('app')
    .controller('AppCtrl',
        function ($scope, $location, $state, $localStorage) {

           $scope.app = {};
           $scope.app.index = true;

           $scope.$on('index',function (event,data) {
                   console.log(data)
               $scope.app.index = data;
           })

        });