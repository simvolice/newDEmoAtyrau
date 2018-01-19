/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('CleanBudgetCtrl', function ($scope, $timeout) {

    var chartDohod = null;
    $scope.menuItems = ['ТАЗА БЮДЖЕТТІК КРЕДИТ БЕРУ', 'БЮДЖЕТТІК КРЕДИТТЕР', 'БЮДЖЕТТІК КРЕДИТТЕРДІ ӨТЕУ', "Жалпы"];




    $scope.activeMenu = $scope.menuItems[3];




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
                    ['data1', 3544546, 1989724,	3303792, 3679844],

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

        if (param === "ТАЗА БЮДЖЕТТІК КРЕДИТ БЕРУ") {




            chartDohod.load({
                columns: [
                    ['data1', 1563608, 761234,	1141795, 226283],

                ]
            });



        } else if (param === "БЮДЖЕТТІК КРЕДИТТЕР") {


            chartDohod.load({
                columns: [
                    ['data1', 1772273, 994862,	1651896, 1613639],

                ]
            });




        } else if (param === "БЮДЖЕТТІК КРЕДИТТЕРДІ ӨТЕУ") {

            chartDohod.load({
                columns: [
                    ['data1', 208665, 233628, 510101, 1839922],

                ]
            });





        }else if (param === "Жалпы") {

            chartDohod.load({
                columns: [
                    ['data1', 3544546, 1989724,	3303792, 3679844],

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

