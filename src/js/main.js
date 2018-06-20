/* Controllers */

angular.module('app')
    .controller('AppCtrl',
        function ($scope, $location, $state, $localStorage) {

           $scope.app = {};
           $scope.app.index = true;

           $scope.$on('overview',function (event,data) {
               $scope.app.index = data;
           })

        });