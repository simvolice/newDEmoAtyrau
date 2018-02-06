/**
 * Created by Admin on 29.09.2016.
 */


angular.module('app').controller('protoCtrl', function ($scope, $state, $ocLazyLoad, $timeout) {



  $scope.nameModule = 'components/charts/barChartComponent.js';

$scope.data = [
    ['Расходы', 205349433],
    ['Доходы', 205349433]
];


$scope.idElem = "chartbudget";



    $ocLazyLoad.load($scope.nameModule);





    $scope.$on('ocLazyLoad.fileLoaded', function(e, module) {


        for (var i = 0; i < 3; i++) {

            testTest($scope.data, $scope.idElem, "Тестовый компонент очень большрй текст пипец", [2016, 2017, 2018]);

        }



    });








    $scope.title = "";



});

