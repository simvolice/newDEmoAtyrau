/**
 * Created by Admin on 29.09.2016.
 */



    angular.module('app').controller('socAgricultureCtrl', function ($scope, $timeout) {

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
                        37765,
                        44847,
                        46080
                    ],
                    [
                        "data2",
                        25000,
                        26000,
                        25500
                    ]

                ],
                names:{
                    data1: "Объем валовой продукции сельского хозяйства",
                    data2: "ИФО продукции сельского хозяйства"
                },
                type: "bar",
                "types": {

                    "data2": "line"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: function (val, s, id) {

                            if (val === 25000){

                                return d3.format(",d")(val=102) + "%";

                            }
                            if (val === 26000){

                                return d3.format(",d")(val=104) + "%";

                            }
                            if (val === 25500){

                                return d3.format(",d")(val=101) + "%";

                            }


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
                    show: false

                }

            },tooltip: {
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
                        23332,
                        26261,
                        25057
                    ],
                    [
                        "data2",
                        15000,
                        16000,
                        15000
                    ]

                ],
                names:{
                    data1: "Объем производственной продукции животноводства",
                    data2: "ИФО продукции животноводства, %"
                },
                type: "bar",
                "types": {

                    "data2": "line"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: function (val, s, id) {

                            if (val === 15000){

                                return d3.format(",d")(val=100) + "%";

                            }
                            if (val === 16000){

                                return d3.format(",d")(val=103) + "%";

                            }
                            if (val === 15500){

                                return d3.format(",d")(val=100) + "%";

                            }


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

            "data": {
                "columns": [
                    [
                        "data1",
                        14149,
                        18342,
                        20662
                    ],
                    [
                        "data2",
                        9000,
                        12000,
                        10000
                    ]

                ],
                names:{
                    data1: "Объем производственной продукции растениеводства",
                    data2: "ИФО продукции растениеводства, %"
                },
                type: "bar",
                "types": {

                    "data2": "line"
                },
                labels: {
                    format: {

                        data1: d3.format(",d"),
                        data2: function (val, s, id) {

                            if (val === 9000){

                                return d3.format(",d")(val=100) + "%";

                            }
                            if (val === 12000){

                                return d3.format(",d")(val=106) + "%";

                            }
                            if (val === 10000){

                                return d3.format(",d")(val=101) + "%";

                            }


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
                    show: false

                }

            },tooltip: {
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
                        259,
                        258,
                        302
                    ],
                    [
                        "data2",
                        347,
                        363,
                        368
                    ],
                    [
                        "data3",
                        281,
                        401,
                        466
                    ]
                ],
                names: {
                    data1: "мясо, тыс.тонн",
                    data2: "молоко, тыс.тонн",
                    data3: "яйца, тыс.штук"
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
            "bindto": "#chart4"
        });


        var ch5 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        121629,
                        132035,
                        143596
                    ]

                ],

                types:{
                    data1:"bar"
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
            data: {
                columns: [
                    ["data1", 27212],
                    ["data2", 4052],
                    ["data3", 20985],
                    ["data4", 69380]
                ],
                type: "donut"
                ,
                labels: {
                    format: {

                        value: function (val) {
                            return d3.format(",.2f")(val)
                        }

                    }
                },
                names:{
                    "data1":"бахчевые",
                    "data2":"картофель",
                    "data3":"кормовые",
                    "data4":"овощи"
                }
            },
            donut: {
               
            },
            bindto: "#chart6"
        });


        var ch7 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        69380,
                        71703,
                        76662
                    ]

                ],

                types:{
                    data1:"bar"
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
            "bindto": "#chart7"
        });


        var ch8 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        20985,
                        25274,
                        27333
                    ]

                ],

                types:{
                    data1:"bar"
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
            "bindto": "#chart8"
        });


        var ch9 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        27212,
                        28987,
                        29481
                    ]

                ],

                types:{
                    data1:"bar"
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
            "bindto": "#chart9"
        });


        var ch10 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        4052,
                        6071,
                        10120
                    ]

                ],

                types:{
                    data1:"bar"
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
            "bindto": "#chart10"
        });


        var ch11 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        3,
                        28,
                        106,
                        2,
                        219,
                        220,
                        5,
                        297,
                        110,
                        66,
                        77,
                        207,
                        126,
                        60,
                        99,
                        199


                    ]

                ],
                orders: "desc",
                types:{
                    data1:"bar"
                },
                order: "decs",
                labels: {
                    format: {

                        data1: function (val) {
                            return d3.format(",d")(val)
                        }



                    }

                }
            },
            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories: [
                        "Алматы ",
                        "Атырауская",
                        "Карагандинская",
                        "Астана",
                        "ВКО",
                        "ЮКО",
                        "Магистауская",
                        "Алматинская",
                        "Актюбинская",
                        "ЗКО",
                        "Павлодарская",
                        "Костанайская",
                        "Акмолинская",
                        "Кызылординская",
                        "Жамбылская",
                        "СКО"
                    ]

                },

                y: {
                    show: false

                }

            },tooltip: {
                order: "desc",
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart11"
        });

        var ch12 = bb.generate({

            data: {
                columns: [

                    ["data1", 16, 18, 17]

                ],

                type: "bar",
                labels: true
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

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart12"
        });


        var ch13 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        99,
                        100,
                        95,
                        87,
                        98,
                        105,
                        101,
                        101,
                        98,
                        98,
                        81,
                        80,
                        63,
                        108,
                        102,
                        77

                    ]

                ],

                types:{
                    data1:"line"
                },
                labels: {
                    format: {
                        data1: function (x) {

                                return d3.format(',d')(x) + "%"

                            }
                        }
                    }
                },
            "axis": {
                "rotated": false,
                x: {

                    show: true,
                    type: 'category',
                    categories: [
                        "Алматы",
                        "Атырауская",
                        "Карагандинская",
                        "Астана",
                        "ВКО",
                        "ЮКО",
                        "Магистауская",
                        "Алматинская",
                        "Актюбинская",
                        "ЗКО",
                        "Павлодарская",
                        "Костанайская",
                        "Акмолинская",
                        "Кызылординская",
                        "Жамбылская",
                        "СКО"
                    ]

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
            "bindto": "#chart13"
        });

        var ch14 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        105,
                        104,
                        101,
                        99,
                        105,
                        110,
                        100

                    ]

                ],

                types:{
                    data1:"spline"
                },
                labels: true
            },
            "axis": {
                "rotated": false,
                x: {

                    show: true,
                    type: 'category',
                    categories: ["2016", "2015", "2014", "2013", "2012", "2011", "2010"]

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
            "bindto": "#chart14"
        });


        var ch15 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        101,
                        103,
                        101
                    ]

                ],

                types:{
                    data1:"line"
                },

                    labels: {
                        format: {
                            data1: function (x) {
                                return d3.format(',d')(x) + "%";
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
                    show: false

                }

            },tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            "bindto": "#chart15"
        });




        $scope.activeMenu = "2015";

        $scope.selectDate = function (param) {

            $scope.activeMenu = param;

            if (param === "2015") {

                ch6.load({
                    columns: [
                        ['data1',
                            27212
                        ],
                        ['data2',
                            4052
                        ],
                        ['data3',
                            20985
                        ],
                        ['data4',
                            69380

                        ]




                    ]
                });





            }else if (param === "2016") {

                ch6.load({
                    columns: [
                        ['data1',
                            28987
                        ],
                        ['data2',
                            6071


                        ],
                        ['data3',
                            25274


                        ],
                        ['data4',
                            71703


                        ]




                    ]
                });




            }else if (param === "2017") {

                ch6.load({
                    columns: [
                        ['data1',
                            29481

                        ],
                        ['data2',
                            10120

                        ],
                        ['data3',
                            27333

                        ],
                        ['data4',
                            76662

                        ]




                    ]
                });




            }



        };


        $scope.activeMenu2 = "2010";

        $scope.selectDate2 = function (param) {

            $scope.activeMenu2 = param;

            if (param === '2010') {




                ch11.load({
                    columns: [
                        ['data1',
                            3,
                            28,
                            106,
                            2,
                            219,
                            220,
                            5,
                            297,
                            110,
                            66,
                            77,
                            207,
                            126,
                            60,
                            99,
                            199

                        ]
                    ]

                });



            } else if (param === "2011") {


                ch11.load({
                    columns: [
                        ['data1',
                            3,
                            39,
                            145,
                            3,
                            277,
                            270,
                            7,
                            373,
                            136,
                            101,
                            115,
                            385,
                            268,
                            66,
                            125,
                            406



                        ],

                    ]
                });




            } else if (param === "2012") {

                ch11.load({
                    columns: [
                        ['data1',
                            2,
                            47,
                            145,
                            3,
                            314,
                            321,
                            8,
                            425,
                            142,
                            89,
                            89,
                            175,
                            161,
                            68,
                            132,
                            272

                        ],

                    ]
                });





            }else if (param === "2013") {

                ch11.load({
                    columns: [
                        ['data1',
                            5,
                            51,
                            172,
                            3,
                            363,
                            375,
                            8,
                            483,
                            151,
                            99,
                            144,
                            261,
                            259,
                            72,
                            172,
                            331

                        ],

                    ]
                });





            }else if (param === "2014") {

                ch11.load({
                    columns: [
                        ['data1',
                            5,
                            56,
                            179,
                            3,
                            367,
                            420,
                            9,
                            535,
                            157,
                            104,
                            135,
                            267,
                            268,
                            70,
                            219,
                            350
                        ],

                    ]
                });





            }else if (param === "2015") {

                ch11.load({
                    columns: [
                        ['data1',
                            3,
                            59,
                            197,
                            2,
                            367,
                            427,
                            12,
                            551,
                            165,
                            107,
                            152,
                            295,
                            291,
                            79,
                            219,
                            381

                        ],

                    ]
                });





            }else if (param === "2016") {

                ch11.load({
                    columns: [
                        ['data1',
                            4,
                            62,
                            229,
                            1,
                            415,
                            480,
                            12,
                            597,
                            184,
                            131,
                            172,
                            319,
                            348,
                            81,
                            237,
                            411,

                        ],

                    ]
                });





            }



        };


        $scope.activeMenu3 = "2010";
        $scope.selectDate3 = function (param) {

            $scope.activeMenu3 = param;

            if (param === '2010') {




                ch13.load({
                    columns: [
                        ['data1',
                            99,
                            100,
                            95,
                            87,
                            98,
                            105,
                            101,
                            101,
                            98,
                            98,
                            81,
                            80,
                            63,
                            108,
                            102,
                            77


                        ]
                    ]

                });



            } else if (param === "2011") {


                ch13.load({
                    columns: [
                        ['data1',
                            94,
                            110,
                            110,
                            128,
                            100,
                            108,
                            123,
                            103,
                            111,
                            119,
                            109,
                            161,
                            164,
                            99,
                            105,
                            153




                        ],

                    ]
                });




            } else if (param === "2012") {

                ch13.load({
                    columns: [
                        ['data1',
                            69,
                            105,
                            96,
                            84,
                            106,
                            107,
                            98,
                            105,
                            95,
                            86,
                            90,
                            46,
                            62,
                            104,
                            99,
                            73

                        ],

                    ]
                });





            }else if (param === "2013") {

                ch13.load({
                    columns: [
                        ['data1',
                            89,
                            99,
                            109,
                            106,
                            106,
                            104,
                            96,
                            103,
                            98,
                            104,
                            131,
                            133,
                            128,
                            100,
                            107,
                            112

                        ],

                    ]
                });





            }else if (param === "2014") {

                ch13.load({
                    columns: [
                        ['data1',
                            94,
                            101,
                            100,
                            86,
                            102,
                            102,
                            96,
                            101,
                            102,
                            103,
                            93,
                            99,
                            103,
                            85,
                            107,
                            103
                        ],

                    ]
                });





            }else if (param === "2015") {

                ch13.load({
                    columns: [
                        ['data1',
                            67,
                            104,
                            106,
                            92,
                            99,
                            103,
                            106,
                            104,
                            103,
                            97,
                            109,
                            107,
                            102,
                            101,
                            103,
                            106

                        ],

                    ]
                });





            }else if (param === "2016") {

                ch13.load({
                    columns: [
                        ['data1',
                            114,
                            105,
                            109,
                            38,
                            105,
                            105,
                            104,
                            104,
                            109,
                            118,
                            105,
                            100,
                            109,
                            107,
                            108,
                            102

                        ],

                    ]
                });





            }



        };


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
        ch11.resize();
        ch12.resize();
        ch13.resize();
        ch14.resize();
        ch15.resize();



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
        ch11.resize();
        ch12.resize();
        ch13.resize();
        ch14.resize();
        ch15.resize();


    });



    });
});


