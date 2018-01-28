/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socTradeCtrl', function ($scope, $timeout) {

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
                        "data1",
                        13509,
                        9904,
                        13408

                    ]

                ],
                "types": {
                    "data1": "bar"
                },
                labels: {
                    format: {

                        data1: d3.format(",d")

                    }
                }

            },
            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2017", "2016", "2015"]

                },

                y: {
                    show: false

                }

            },tooltip: {
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
                        "data1",
                        1279,
                        1641,
                        1453

                    ],
                    [
                        "data2",
                        12230,
                        8263,
                        11955

                    ]

                ],
                names: {
                    data1: "Импорт",
                    data2: "Экспорт"
                },
                "types": {
                    "data1": "bar",
                    "data2": "bar"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: d3.format(",d")

                    }
                }

            },
            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2017", "2016", "2015"]

                },

                y: {
                    show: false

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: true
            },
            "bindto": "#chart2"
        });



        var ch3 = bb.generate({
            data: {
                columns: [
                    ["data1",
                        0.561,
                        0.738,
                        1.363
                    ]
                ],
                labels: {
                    format: {

                        "data1": d3.format(".1%")


                    }
                }
            },
            "axis": {

                x: {

                    show: true,
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
            },
            "bindto": "#chart3"
        });


        var ch4 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        0.531,
                        0.691,
                        1.480
                    ],
                    [
                        "data2",
                        1.058,
                        1.129,
                        0.779
                    ]
                ],
                names: {
                    data1: "ИФО экспорта",
                    data2: "ИФО импорта"
                },
                labels: {
                    format: {

                        "data1": d3.format(".1%"),
                        "data2": d3.format(".1%")


                    }
                }
            },
            "axis": {

                x: {

                    show: true,
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
                show: true
            },
            "bindto": "#chart4"
        });


        var ch5 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        135,
                        163,
                        188

                    ]

                ],
                "types": {
                    "data1": "bar"
                },
                labels: {
                    format: {

                        data1: d3.format(",d")

                    }
                }

            },
            "axis": {
                "rotated": false,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2015", "2016", "2017"]

                },

                y: {
                    show: false

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart5"
        });


        var ch6 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        20,
                        20,
                        17
                    ],
                    [
                        "data2",
                        165,
                        115,
                        183
                    ]

                ],
                names: {
                    data1: "Экспорт со странами ЕЭС ",
                    data2: "Импорт со странами ЕЭС"
                },
                "types": {
                    "data1": "bar",
                    "data2": "bar"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: d3.format(",d")

                    }
                }

            },
            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2017", "2016", "2015"]

                },

                y: {
                    show: false

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: true
            },
            "bindto": "#chart6"
        });


        var ch7 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        185,
                        135,
                        200
                    ],
                    [
                        "data2",
                        "67",
                        "73",
                        "148"
                    ]

                ],
                names:{
                        data1: "Товарооборот со странами ЕЭС",
                        data2: "% к предыдущему году"
                },
                type: "bar",
                "types": {
                    "data1": "bar",
                    "data2": "line"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: function (val) {
                            return d3.format(",d")(val) + "%";
                        }

                    }
                }

            },
            "axis": {
                "rotated": false,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2015", "2016", "2017"]

                },

                y: {
                    show: true

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart7"
        });

        var ch8 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        64,
                        70,
                        159
                    ],
                    [
                        "data2",
                        117,
                        103,
                        84
                    ]
                ],
                names: {
                    data1: "ИФО импорта со странами ЕЭС",
                    data2: "ИФО экспорта со странами ЕЭС"
                },
                labels: {
                    format: {

                        data1: function (val) {
                            return d3.format(",d")(val) + "%";
                        },
                        data2: function (val) {
                            return d3.format(",d")(val) + "%";
                        }
                    }
                }
            },
            "axis": {

                x: {

                    show: true,
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
                show: true
            },
            "bindto": "#chart8"
        });






    $('.drawer').on('drawer.closed', function(){


        ch1.resize();
        ch2.resize();
        ch3.resize();
        ch4.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        ch1.resize();
        ch2.resize();
        ch3.resize();
        ch4.resize();

    });



    });
});


