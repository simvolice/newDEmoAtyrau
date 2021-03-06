/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('CleanBudgetCtrl', function ($scope, $timeout) {

    var chartDohod = null;
    $scope.menuItems = ['ЧИСТОЕ БЮДЖЕТНОЕ КРЕДИТОВАНИЕ', 'ПОГАШЕНИЕ БЮДЖЕТНЫХ КРЕДИТОВ', 'БЮДЖЕТНЫЕ КРЕДИТЫ'];




    $scope.activeMenu = $scope.menuItems[0];




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



       chartDohod = bb.generate({

            bindto: "#chartdohod",

            data: {
                columns: [
                    ['data1', 1676386, 761234, 1141795, -271231],

                ],
                type: 'bar',
                labels: {
                    format: {

                        data1: d3.format(",d")

                    }


                }
            },
            bar: {
                width: {
                    ratio: 0.5 // this makes bar width 50% of length between ticks
                }
                // or
                //width: 100 // this makes bar width 100px
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
                    type: 'category',
                    categories: ["2014", "2015", "2016", "2017"]
                },
                y: {

                  show: false

                }
            },

            tooltip: {
                show: false
            },
            legend: {
                show: false
            },

        });



    }, 50);





    $scope.getParam = function (param) {

        $scope.activeMenu = param;

        if (param === "ЧИСТОЕ БЮДЖЕТНОЕ КРЕДИТОВАНИЕ") {




            chartDohod.load({
                columns: [
                    ['data1', 1676386, 761234, 1141795, -271231]

                ]
            });



        } else if (param === "БЮДЖЕТНЫЕ КРЕДИТЫ") {


            chartDohod.load({
                columns: [
                    ['data1', 1885051, 994862, 1651896, 1632005],

                ]
            });




        } else if (param === "ПОГАШЕНИЕ БЮДЖЕТНЫХ КРЕДИТОВ") {

            chartDohod.load({
                columns: [
                    ['data1', 208665, 233628	,510101	,1903236],

                ]
            });





        }


    };





    $('.drawer').on('drawer.closed', function(){


        chartDohod.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartDohod.resize();

    });


});

