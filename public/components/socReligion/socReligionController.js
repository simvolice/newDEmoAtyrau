/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socReligionCtrl', function ($scope, $timeout) {

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
                        "Католический",
                        2,
                        2,
                        2
                    ],
                    [
                        "Православный",
                        3,
                        3,
                        3
                    ],
                    [
                        "Протестантский",
                        7,
                        7,
                        7
                    ],
                    [
                        "Ислам",
                        28,
                        28,
                        29
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "Католический": d3.format(",d"),
                        "Православный": d3.format(",d"),
                        "Протестантский": d3.format(",d"),
                        "Ислам": d3.format(",d"),

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
            "bindto": "#chart1"
        });


      var ch2 = bb.generate({
            "data": {
                "columns": [
                    [
                        "Католический",
                        2,
                        2,
                        2
                    ],
                    [
                        "Православный",
                        3,
                        3,
                        3
                    ],
                    [
                        "Протестантский",
                        5,
                        5,
                        5
                    ],
                    [
                        "Ислам",
                        28,
                        28,
                        29
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "Католический": d3.format(",d"),
                        "Православный": d3.format(",d"),
                        "Протестантский": d3.format(",d"),
                        "Ислам": d3.format(",d"),

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
            "bindto": "#chart2"
        });

      var ch3 =  bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        40,
                        40,
                        41

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
                    categories: ["2015", "2016", "2017"]

                },

                y: {
                    show: false,

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart3"
        });

      var ch4 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        37,
                        37,
                        38

                    ],

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
                    categories: ["2015", "2016", "2017"]

                },

                y: {
                    show: false,

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart4"
        });


      var ch5 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        187149,
                        196719,
                        110362

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
                    categories: ["2014", "2015", "2016"]

                },

                y: {
                    show: false,

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
                        "Индивидуальные встречи",
                        122,
                        188,
                        265
                    ],
                    [
                        "Встречи с молодежью",
                        313,
                        680,
                        397
                    ],
                    [
                        "Кол-во профилактических работ по адресу",
                        479,
                        147,
                        58
                    ],
                    [
                        "Встречи с населением аульных округов",
                        690,
                        1002,
                        943
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "Индивидуальные встречи": d3.format(",d"),
                        "Встречи с молодежью": d3.format(",d"),
                        "Кол-во профилактических работ по адресу": d3.format(",d"),
                        "Встречи с населением аульных округов": d3.format(",d"),

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
                    categories: ["2014", "2015", "2016"]
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
                        "Экспертиза по сайтам",
                        6,
                        4,
                        24
                    ],
                    [
                        "Работа со СМИ",
                        1356,
                        4898,
                        3271
                    ],
                    [
                        "Распространение информационно-методических",
                        66042,
                        129634,
                        62154
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "Экспертиза по сайтам": d3.format(",d"),
                        "Работа со СМИ": d3.format(",d"),
                        "Распространение информационно-методических": d3.format(",d"),


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
                    categories: ["2014", "2015", "2016"]
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
                        'Передача "Иман Нуры"',
                        149,
                        133,
                        71
                    ],
                    [
                        "Интервью",
                        0,
                        78,
                        125
                    ],
                    [
                        "Статья",
                        713,
                        685,
                        283
                    ],
                    [
                        "Интернет материалы",
                        494,
                        3403,
                        2341
                    ]
                ],
                type: "bar",
                labels: {
                    format: {

                        "Передача Иман": d3.format(",d"),
                        "Интервью": d3.format(",d"),
                        "Статья": d3.format(",d"),
                        "Интернет материалы": d3.format(",d")


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
                    categories: ["2014", "2015", "2016"]
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


