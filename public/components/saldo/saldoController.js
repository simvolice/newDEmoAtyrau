/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SaldoCtrl', function ($scope, $timeout) {

    var chartDohod = null;
    $scope.menuItems = ['Мемлекеттің қаржылық активтерін сатудан түскен түсімдер', 'Қаржылық активтерді сатып алу', 'Қаржылық активтермен болатын операциялар бойынша сальдо', 'Жалпы'];




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
                    ['data1', 13077962, 8728297, 2746582, 1263412],

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
                    ['data1', 13077962, 8728297, 2746582, 1263412],

                ]
            });



        } else if (param === "Қаржылық активтермен болатын операциялар бойынша сальдо") {


            chartDohod.load({
                columns: [
                    ['data1', 6520013, 4336596,	1358291, 625730],

                ]
            });




        } else if (param === "Қаржылық активтерді сатып алу") {

            chartDohod.load({
                columns: [
                    ['data1', 6538981, 4391701,	1373291, 631706],

                ]
            });





        }else if (param === "Мемлекеттің қаржылық активтерін сатудан түскен түсімдер") {

            chartDohod.load({
                columns: [
                    ['data1', 18968, 55105,	55105, 5976],

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

