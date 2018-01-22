/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('IspolRashodPlanCtrl', function ($scope, $timeout) {

    var chartDohod = null;
    $scope.menuItems = ['Всего доходов'];




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
                    ['data1', 154256725
                        , 143888253
                        ,	229949719
                        , 195229368
                        , 203290355
                        , 208441744
                    ],

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
                    categories: ["2014", "2015", "2016", "2017", "2018", "2019"]
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

        if (param === "Всего доходов") {




            chartDohod.load({
                columns: [
                    ['data1', 154256725
                        , 143888253
                        ,	229949719
                        , 195229368
                        , 203290355
                        , 208441744
                    ],

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

