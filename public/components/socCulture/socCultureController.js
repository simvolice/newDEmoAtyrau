/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socCultureCtrl', function ($scope, $timeout) {

    var chartDohod = null;




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



      var ch1 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data",
                        197,
                        214,
                        215,
                        217,
                        269,
                        262,
                        255
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "data": d3.format(",d"),


                    }


                }
            },
            "bar": {
                "width": {
                    "ratio": 0.5
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
                        categories: ["2010","2011","2012","2013","2014","2015", "2016"]

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
            "bindto": "#chart1"
        });



      var ch2 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data",
                        5269,
                        5472,
                        5507,
                        5860,
                        6285,
                        6511,
                        6463
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "data": d3.format(",d"),


                    }


                }
            },
            "bar": {
                "width": {
                    "ratio": 0.5
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
                        categories: ["2010","2011","2012","2013","2014","2015", "2016"]

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
            "bindto": "#chart2"
        });




      var ch3 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data",
                        1532248,
                        1613265,
                        1740622,
                        1837451,
                        1916309,
                        2014429,
                        1947395
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "data": d3.format(",d"),


                    }


                }
            },
            "bar": {
                "width": {
                    "ratio": 0.5
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
                        categories: ["2010","2011","2012","2013","2014","2015", "2016"]

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
            "bindto": "#chart3"
        });









    $('.drawer').on('drawer.closed', function(){


        ch1.resize();
        ch2.resize();
        ch3.resize();



    });


    $('.drawer').on('drawer.opened', function(){



        ch1.resize();
        ch2.resize();
        ch3.resize();


    });



    });
});


