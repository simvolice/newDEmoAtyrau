/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socZHkhCtrl', function ($scope, $timeout) {

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
                        0.8,
                        0.77,
                        0.78
                    ],
                    [
                        "data2",
                        1528,
                        1565,
                        1475
                    ],
                    [
                        "data3",
                        1721,
                        1539,
                        1904
                    ]
                ],
                names:{
                    "data1": "Объем производства тепловой энергии, тыс. гигакал/час",
                    "data2": "Объем потребления газа, тыс. м3",
                    "data3": "Производство электроэнергии, мегаватт"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(".2f"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                        categories: ["2014","2015", "2016"]

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
            "bindto": "#chart1"
        });


      var ch2 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        36,
                        36,
                        36
                    ],
                    [
                        "data2",
                        22,
                        74,
                        83
                    ],
                    [
                        "data3",
                        59,
                        88,
                        77
                    ],
                    [
                        "data4",
                        483,
                        464,
                        448
                    ]
                ],
                names:{

                    "data1":"ветхие",
                    "data2":"отремонтированные",
                    "data3":"аварийные",
                    "data4":"требующие кап.ремонта"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d"),
                        "data4": d3.format(",d")


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
                    categories: ["2014","2015", "2016"]

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
            "bindto": "#chart2"
        });


      var ch3 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        128,
                        132,
                        132
                    ],
                    [
                        "data2",
                        166,
                        166,
                        166
                    ]
                ],
                names:{

                    "data1": "Газифицированные НП",
                    "data2": "Общее количество НП"

                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),


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
                show: true
            },
            "bindto": "#chart3"
        });


      var ch4 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        3,
                        3,
                        2
                    ],
                    [
                        "data2",
                        9,
                        11,
                        13
                    ],
                    [
                        "data3",
                        62,
                        63,
                        62
                    ]
                ],
                names:{
                        "data1": "ТОО",
                        "data2": "ИП",
                        "data3": "КСК"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                        categories: ["2014","2015", "2016"]

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
                        2,
                        2,
                        2
                    ],
                    [
                        "data2",
                        0,
                        1,
                        0
                    ],
                    [
                        "data3",
                        66,
                        4,
                        11
                    ]
                ],
                names:{
                    "data1": "Газоснабжение",
                    "data2": "Электроснабжение",
                    "data3": "Водоснабжение"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                    categories: ["2014","2015", "2016"]

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
            "bindto": "#chart5"
        });



      var ch6 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        152,
                        164,
                        158
                    ],
                    [
                        "data2",
                        381,
                        390,
                        396
                    ],
                    [
                        "data3",
                        1504,
                        1514,
                        1597
                    ]
                ],
                names:{
                    "data1": "Объекты здравоохранения",
                    "data2": "Объекты образования",
                    "data3": "Жилые дома"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                rotated: true,

                x: {
                    type: 'category',
                    categories: ["2015","2016", "2017"]

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
            "bindto": "#chart6"
        });



      var ch7 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        517,
                        520,
                        521
                    ],
                    [
                        "data2",
                        2009,
                        2015,
                        2015
                    ],
                    [
                        "data3",
                        3816,
                        3816,
                        3816
                    ]
                ],
                names:{
                    "data1": "Тепловые сети",
                    "data2": "Электрические сети,0,4 кВт",
                    "data3": "Водопроводные и канализационные сети"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                    categories: ["2014","2015", "2016"]

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
            "bindto": "#chart7"
        });


      var ch8 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        0.04,
                        0.04,
                        0.05
                    ],
                    [
                        "data2",
                        0.25,
                        0.46,
                        0.47
                    ],
                    [
                        "data2",
                        0.25,
                        0.46,
                        0.47
                    ]
                ],
                names:{
                    "data1": "Уголь",
                    "data2": "Жидкое топливо"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(".2f"),
                        "data2": d3.format(".2f")


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
                    categories: ["2014","2015", "2016"]

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

        var ch9 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        8,
                        8,
                        8
                    ],
                    [
                        "data2",
                       76,
                       76,
                       77
                    ],
                    [
                        "data3",
                        100,
                        100,
                        100
                    ]
                ],
                names:{
                    "data1": "центральному водоотведению",
                    "data2": "центральному водоснабжению",
                    "data3": "центральному газоснабжению"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                    categories: ["2015","2016", "2017"]

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
            "bindto": "#chart9"
        });

        var ch10 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        72,
                        72,
                        72
                    ],
                    [
                        "data2",
                        100,
                        100,
                        100
                    ],
                    [
                        "data3",
                        100,
                        100,
                        100
                    ]
                ],
                names:{
                    "data1": "центральному водоотведению",
                    "data2": "центральному водоснабжению",
                    "data3": "центральному газоснабжению"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d"),
                        "data3": d3.format(",d")


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
                    categories: ["2015","2016", "2017"]

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
            "bindto": "#chart10"
        });

    $('.drawer').on('drawer.closed', function(){


        ch1.resize();
        ch2.resize();
        ch3.resize();
        ch4.resize();
        ch5.resize();
        ch6.resize();
        ch7.resize();
        ch8.resize();
        ch9.resize();
        ch10.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        ch1.resize();
        ch2.resize();
        ch3.resize();
        ch4.resize();
        ch5.resize();
        ch6.resize();
        ch7.resize();
        ch8.resize();
        ch9.resize();
        ch10.resize();


    });



    });
});


