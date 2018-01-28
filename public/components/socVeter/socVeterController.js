/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socVeterCtrl', function ($scope, $timeout) {

    var ch = null;



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



       ch =  bb.generate({

            bindto: "#chart",

            data: {
                columns: [
                    ['data1', 1503, 1122, 1302]

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
                    categories: ["2015", "2016", "2017"]
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
            }

        });

    }, 50);











    $('.drawer').on('drawer.closed', function(){


        ch.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        ch.resize();

    });


});

