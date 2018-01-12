/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('BudgetCtrl', function ($scope, $timeout) {


    $scope.menuItems = ['2014', '2015', '2016', '2017', "2018", "2019"];




    $scope.activeMenu = $scope.menuItems[4];



    $scope.label1 = "205 349 433";
    $scope.label2 = "205 349 433";

    var chartFirst;



    $timeout(function () {


        var locale = {
            "decimal": ",",
            "thousands": "\u00A0",
            "grouping": [3],
            "currency": ["", " тнг."],
            "dateTime": "%A, %e %B %Y г. %X",
            "date": "%d.%m.%Y",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
            "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
            "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
        };


        d3.formatDefaultLocale(locale);

      chartFirst = bb.generate({

           bindto: "#chartbudget",

            data: {
                columns: [
                    ['Расходы', 205349433],
                    ['Доходы', 205349433]
                ],

                type: 'bar'

            },


          legend: {
              show: false
          },


            bar: {
                width: {
                    ratio: 0.5
                }

            },


            grid: {
                x: {
                    show: false
                },
                y: {
                    show: false
                }
            },

            axis: {
                x: {
                    show: false
                },
                y: {
                    show: false
                }
            },


           tooltip: {
               format: {
                        title: function (d) { return 'Итого'; },
                        value: d3.format(",d")
               }
           }


        });







    }, 50);




    $scope.selectDate = function (date) {



        $scope.activeMenu = date;




        if (date === '2014') {

            $scope.label1 = "194 718 996";
            $scope.label2 = "194 718 996";


            chartFirst.load({
                    columns: [
                        ['Расходы', 194718996],
                        ['Доходы', 194718996]
                    ]
            });




        } else if (date === '2015'){

            $scope.label1 = "186 988 010";
            $scope.label2 = "186 988 010";


            chartFirst.load({
                columns: [
                    ['Расходы', 186988010],
                    ['Доходы', 186988010]
                ]
            });




        } else if (date === '2016'){

            $scope.label1 = "234 138 861";
            $scope.label2 = "234 138 861";


            chartFirst.load({
                columns: [
                    ['Расходы', 234138861],
                    ['Доходы', 234138861]
                ]
            });




        }else if (date === '2017'){

            $scope.label1 = "315 480 315";
            $scope.label2 = "315 480 315";


            chartFirst.load({
                columns: [
                    ['Расходы', 315480315],
                    ['Доходы', 315480315]
                ]
            });




        }else if (date === '2018'){

            $scope.label1 = "205 349 433";
            $scope.label2 = "205 349 433";


            chartFirst.load({
                columns: [
                    ['Расходы', 205349433],
                    ['Доходы', 205349433]
                ]
            });




        }else if (date === '2019'){

            $scope.label1 = "215 730 358";
            $scope.label2 = "215 730 358";


            chartFirst.load({
                columns: [
                    ['Расходы', 215730358],
                    ['Доходы', 215730358]
                ],

            });




        }








    };







});

