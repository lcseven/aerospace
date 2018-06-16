angular.module('app')
    .controller('indexCtrl',
        function ($scope, $location, $state, $localStorage) {
            $scope.temp = {};
            $scope.temp.pvRadio = '1';
            $scope.closeTips = function () {
                $scope.temp.pvRadio = '1';
            };
           $scope.goView = function (name) {
               switch (name){
                   case  '804':
                       $state.go('app.overview',{id:804});
                       break;
                   case  '805':
                       $state.go('app.overview',{id:805});
                       break;
                   default:
                       break;
               }
           }
        });