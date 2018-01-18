/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('FinanceDeficitCtrl', function ($scope, $timeout) {

    var chartDohod = null;
    $scope.menuItems = ['Бюджет қаражаттарының қолданылатын қалдықтары', 'Қарыздарды өтеу', 'Қарыздардың тізімі', 'Бюджеттердің тапшылығын қаржыландыру (прфицитті пайдалану)','Жалпы'];




    $scope.activeMenu = $scope.menuItems[4];




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
                    ['data1', 41317626, 21573372, 22340396, 82773844],

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

        if (param === "Жалпы") {




            chartDohod.load({
                columns: [
                    ['data1', 41317626, 21573372, 22340396, 82773844],

                ]
            });



        } else if (param === "Бюджеттердің тапшылығын қаржыландыру (прфицитті пайдалану)") {


            chartDohod.load({
                columns: [
                    ['data1', 19768919
                        , 9831890
                        ,	10006242
                        , 39315130
                    ],

                ]
            });




        } else if (param === "Қарыздардың тізімі") {

            chartDohod.load({
                columns: [
                    ['data1', 22855448
                        , 1936985
                        ,	3240280
                        , 2911690
                    ],

                ]
            });





        }else if (param === "Қарыздарды өтеу") {

            chartDohod.load({
                columns: [
                    ['data1', 889894
                        , 954796
                        ,	1163956
                        , 2071792
                    ],

                ]
            });





        }else if (param === "Бюджет қаражаттарының қолданылатын қалдықтары") {

            chartDohod.load({
                columns: [
                    ['data1', 17803365

                        , 8849701

                        ,	7929918

                        , 38475232

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

