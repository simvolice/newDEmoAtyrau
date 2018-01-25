/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocPromCtrl', function ($scope, $timeout, $mdDialog) {

    var chartDohod = null;
    var chartTab2 = null;
    var chartTab3 = null;
    var chartlist = null;
    var chartTab4 = null;
    $scope.menuItems = [2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016];




    $scope.activeMenu = '2010';
    $scope.activeMenu2 = '2010';
    $scope.activeMenu3 = 'октябрь';
    $scope.activeMenu4 = 'январь';
    $scope.activeMenuList = 'Горнодобывающая промышленность, млн. тенге';



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

            bindto: "#chart1",

            data: {
                columns: [
                    ['data1', 430,
                        3120,
                        1032,
                        111,
                        641,
                        316,
                        1647,
                        367,
                        962,
                        990,
                        844,
                        451,
                        180,
                        810,
                        120,
                        85

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
                rotated: true,
                x: {
                    type: 'category',
                    categories: ["Алматы",
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
                        "КЗО",
                        "Жамбылская",
                        "СКО"
                    ]
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




       bb.generate({

            bindto: "#chart2",

            data: {
                columns: [
                    ['data1', 1607,	2116, 2731],

                ],
                type: 'bar',
                labels: {
                    format: {

                        data1: d3.format(",.2f")

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

        });



        chartlist = bb.generate({

            bindto: "#chartlist",

            data: {
                columns: [
                    ['data1', 20931, 19723, 22669],

                ],
                type: 'bar',
                labels: {
                    format: {

                        data1: d3.format(",.2f")

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
                show: false
            },

        });



    }, 50);






    $scope.getParam = function (param) {



        $scope.activeMenuList = param;

        if (param === 'Горнодобывающая промышленность, млн. тенге') {



            chartlist.load({
                columns: [
                    ['data1', 20931, 19723, 22669]
                ]
            });



        } else if (param === 'Обрабатывающая промышленность, млн. тенге') {




            chartlist.load({
                columns: [
                    ['data1', 1894, 1847, 2565]
                ]
            });



        }else if (param === 'Электроснабжение, млн. тенге') {




            chartlist.load({
                columns: [
                    ['data1', 194, 186, 224]
                ]
            });



        }else if (param === 'Водоснабжение, млн. тенге') {




            chartlist.load({
                columns: [
                    ['data1', 78, 103, 108]
                ]
            });



        }






    };



    $scope.selectDate = function (param) {

        $scope.activeMenu = param;

        if (param === '2010') {




            chartDohod.load({
                columns: [
                    ['data1', 430,
                        3120,
                        1032,
                        111,
                        641,
                        316,
                        1647,
                        367,
                        962,
                        990,
                        844,
                        451,
                        180,
                        810,
                        120,
                        85
                    ]
                ]
            });



        } else if (param === "2011") {


            chartDohod.load({
                columns: [
                    ['data1',

                        533,
                        4320,
                        1325,
                        177,
                        823,
                        377,
                        2065,
                        444,
                        1254,
                        1481,
                        965,
                        564,
                        236,
                        1063,
                        186,
                        116,



                    ],

                ]
            });




        } else if (param === "2012") {

            chartDohod.load({
                columns: [
                    ['data1', 585,
                        4195,
                        1336,
                        215,
                        966,
                        497,
                        2171,
                        516,
                        1316,
                        1638,
                        1202,
                        502,
                        271,
                        1109,
                        207,
                        126,

                    ],

                ]
            });





        }else if (param === "2013") {

            chartDohod.load({
                columns: [
                    ['data1', 589,
                        4614,
                        1325,
                        276,
                        999,
                        553,
                        2187,
                        589,
                        1286,
                        1660,
                        1335,
                        530,
                        292,
                        1164,
                        234,
                        150,

                    ],

                ]
            });





        }else if (param === "2014") {

            chartDohod.load({
                columns: [
                    ['data1', 739,
                        4915,
                        1444,
                        345,
                        1116,
                        604,
                        2330,
                        553,
                        1243,
                        1840,
                        1111,
                        544,
                        312,
                        995,
                        279,
                        161,

                    ],

                ]
            });





        }else if (param === "2015") {

            chartDohod.load({
                columns: [
                    ['data1', 663,
                        3443,
                        1417,
                        389,
                        1022,
                        670,
                        1569,
                        562,
                        1014,
                        1302,
                        1044,
                        449,
                        335,
                        601,
                        284,
                        167,

                    ],

                ]
            });





        }else if (param === "2016") {

            chartDohod.load({
                columns: [
                    ['data1', 772,
                        4495,
                        1948,
                        454,
                        1507,
                        789,
                        1888,
                        682,
                        1291,
                        1567,
                        1370,
                        599,
                        456,
                        669,
                        341,
                        198,


                    ],

                ]
            });





        }



    };


    $scope.tabClk = function (id) {

        if(id === 2) {


         chartTab2 = bb.generate({

                bindto: "#charttab2",

                data: {
                    columns: [
                        ['data1', 122.5,
                        113.2,
                        104.3,
                        124.7,
                        107.3,
                        113.5,
                        105.9,
                        110.4,
                        108.9,
                        97.4,
                        115.2,
                        112.6,
                        130.1,
                        101.1,
                        110.8,
                        100.2,


                        ],

                    ],
                    names: {
                        data1: "Значение",

                    },

                    labels: {
                        format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                        show: true
                    }
                },

                axis: {

                    x: {
                        type: 'category',
                        categories: ["Алматы",
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
                            "КЗО",
                            "Жамбылская",
                            "СКО"
                        ]
                    },
                    y: {
                        tick: {
                            format: function (x) {
                                return x + "%";
                            }
                        },
                        show: true

                    }
                },

                tooltip: {
                    show: true,

                },
                legend: {
                    show: false
                },

            });


            bb.generate({

                bindto: "#charttab21",

                data: {
                    columns: [
                        ['data1', 113.2, 100.7, 95.9, 108.8, 99.7, 101.0, 102.2,],

                    ],
                    names: {
                        data1: "Значение",

                    },

                    labels: {
                        format: {

                            data1: function (val) {
                                return d3.format(",.1f")(val) + "%";
                            }

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
                        categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true,

                },
                legend: {
                    show: false
                },

            });


            bb.generate({

                bindto: "#charttab22",

                data: {
                    columns: [
                        ['data1', 105.5, 101.3, 119.3],

                    ],
                    names: {
                        data1: "Значение",

                    },

                    labels: {
                        format: {

                            data1: function (val) {
                                return d3.format(",.1f")(val) + "%";
                            }

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
                        categories: [2015, 2016, 2017]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true,

                },
                legend: {
                    show: false
                },

            });


        } else if (id === 3) {


            chartTab3 = bb.generate({

                bindto: "#chartTab333",

                data: {
                    columns: [
                        ['data1', 650,
                            4532,
                            1820,
                            1233,
                            684,
                            1839,
                            1220,
                            1553,
                            1435,
                            613,
                            440,
                            624,
                            295,
                            180,
                            426,
                            609],

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: ["Алматы",
                            "Атырауская",
                            "Карагандинская",
                            "ВКО",
                            "ЮКО",
                            "Мангистауская",
                            "Актюбинская",
                            "ЗКО",
                            "Павлодарская",
                            "Костанайская",
                            "Акмолинская",
                            "Кызылординская",
                            "Жамбылская",
                            "СКО",
                            "Астана",
                            "Алматинская"]
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




            bb.generate({

                bindto: "#chartTab3133",

                data: {
                    columns: [
                        ['data1', 320,

                            616,

                            965,

                            1317,

                            1716,

                            2116,

                            2517,

                            2756,

                            3122,

                            3558



                        ],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            data1: d3.format(",.2f")

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
                        categories: [

                            "январь",
                            "февраль",
                            "март",
                            "апрель",
                            "май",
                            "июнь",
                            "июль",
                            "август",
                            "сентабрь",
                            "октябрь"

                        ]
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







        } else if(id === 4) {


            chartTab4 = bb.generate({

                bindto: "#charttab4",

                data: {
                    columns: [
                        ['data1', 104,
                        110,
                        106,
                        0,
                        106,
                        105,
                        99,
                        0,
                        104,
                        103,
                        106,
                        106,
                        105,
                        94,
                        101,
                        105,



                        ],

                    ],
                    names: {
                        data1: "Значение",

                    },

                    labels: {
                        format: {

                            data1: function (val) {
                                return d3.format(",.1f")(val) + "%";
                            }

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
                        show: true
                    }
                },

                axis: {

                    x: {
                        type: 'category',
                        categories: ["Алматы",
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
                            "КЗО",
                            "Жамбылская",
                            "СКО"
                        ]
                    },
                    y: {
                        tick: {
                            format: function (x) {
                                return x + "%";
                            }
                        },
                        show: true

                    }
                },

                tooltip: {
                    show: true,

                },
                legend: {
                    show: false
                },

            });


            bb.generate({

                bindto: "#charttab42",

                data: {
                    columns: [
                        ['data1', 103.1, 103.2, 101.8, 101.5, 101.0, 101.3, 101.5, 98.2, 99.0, 101.8],

                    ],
                    names: {
                        data1: "Значение",

                    },

                    labels: {
                        format: {

                            data1: function (val) {
                                return d3.format(",.1f")(val) + "%";
                            }

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
                        categories: ["январь",
                            "февраль",
                            "март",
                            "апрель",
                            "май",
                            "июнь",
                            "июль",
                            "август",
                            "сентабрь",
                            "октябрь"]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true,

                },
                legend: {
                    show: false
                },

            });




        }



    };




    $scope.selectDate2 = function (date) {

        $scope.activeMenu2 = date;

        if (date === '2010') {


            chartTab2.load({
                columns: [
                    ['data1', 122.5,
                        113.2,
                        104.3,
                        124.7,
                        107.3,
                        113.5,
                        105.9,
                        110.4,
                        108.9,
                        97.4,
                        115.2,
                        112.6,
                        130.1,
                        101.1,
                        110.8,
                        100.2,

                    ]
                ]
            });




        } else if (date === '2011') {

            chartTab2.load({
                columns: [
                    ['data1', 113.6,
                    100.7,
                    102.8,
                    123.1,
                    110.4,
                    101.9,
                    95.8,
                    110.1,
                    108.6,
                    105.2,
                    103.4,
                    100.9,
                    114.8,
                    100.2,
                    127.7,
                    107.1,

                    ]
                ]
            });


        }else if (date === '2012') {

            chartTab2.load({
                columns: [
                    ['data1', 103.3,
                    95.9,
                    97.6,
                    105.2,
                    117.9,
                    106.5,
                    100.0,
                    102.4,
                    107.0,
                    105.3,
                    103.0,
                    101.7,
                    101.8,
                    101.0,
                    101.6,
                    102.5,



                    ]
                ]
            });


        }else if (date === '2013') {

            chartTab2.load({
                columns: [
                    ['data1', 105.5,
                    108.8,
                    102.1,
                    106.7,
                    105.8,
                    102.3,
                    102.1,
                    102.7,
                    102.5,
                    99.8,
                    99.2,
                    100.6,
                    100.4,
                    100.4,
                    107.4,
                    105.1,



                    ]
                ]
            });


        }else if (date === '2014') {

            chartTab2.load({
                columns: [
                    ['data1', 102.2,
                    99.7,
                    103.7,
                    98.0,
                    100.4,
                    104.6,
                    103.5,
                    102.0,
                    96.7,
                    103.9,
                    96.1,
                    100.2,
                    105.6,
                    97.1,
                    105.7,
                    103.2,





                    ]
                ]
            });


        }else if (date === '2015') {

            chartTab2.load({
                columns: [
                    ['data1', 95.1,
                    101.0,
                    106.8,
                    105.1,
                    92.6,
                    103.1,
                    96.0,
                    104.8,
                    95.6,
                    94.7,
                    96.1,
                    81.8,
                    106.4,
                    91.3,
                    91.3,
                    101.1,





                    ]
                ]
            });


        }else if (date === '2016') {

            chartTab2.load({
                columns: [
                    ['data1', 100.1,
                    102.2,
                    105.1,
                    100.9,
                    105.0,
                    104.4,
                    96.9,
                    97.4,
                    100.2,
                    98.9,
                    101.4,
                    98.8,
                    104.3,
                    90.7,
                    102.4,
                    100.5,





                    ]
                ]
            });


        }









    };



    $scope.selectDate3 = function (date) {

        $scope.activeMenu3 = date;

        if (date === 'январь') {


            chartTab3.load({
                columns: [
                    ['data1', 59,
                        503,
                        160,
                        95,
                        56,
                        168,
                        118,
                        159,
                        143,
                        50,
                        37,
                        58,
                        28,
                        16,
                        0,
                        0
                    ]
                ]
            });




        } else if (date === 'февраль') {

            chartTab3.load({
                columns: [
                    ['data1', 127,
                        969,
                        340,
                        230,
                        119,
                        331,
                        226,
                        332,
                        279,
                        104,
                        77,
                        114,
                        50,
                        33,
                        89,
                        95,



                    ]
                ]
            });


        }else if (date === 'март') {

            chartTab3.load({
                columns: [
                    ['data1', 198,
                        1408,
                        522,
                        350,
                        183,
                        527,
                        387,
                        489,
                        431,
                        164,
                        120,
                        173,
                        75,
                        52,
                        137,
                        151,



                    ]
                ]
            });


        }else if (date === 'апрель') {

            chartTab3.load({
                columns: [
                    ['data1', 277,
                        1862,
                        701,
                        481,
                        243,
                        696,
                        470,
                        644,
                        576,
                        227,
                        164,
                        236,
                        100,
                        70,
                        181,
                        207,




                    ]
                ]
            });


        }else if (date === 'май') {

            chartTab3.load({
                columns: [
                    ['data1', 339,
                        2287,
                        876,
                        601,
                        307,
                        872,
                        587,
                        786,
                        724,
                        289,
                        210,
                        298,
                        134,
                        87,
                        216,
                        267,





                    ]
                ]
            });


        }else if (date === 'июнь') {

            chartTab3.load({
                columns: [
                    ['data1', 396,
                        2731,
                        1054,
                        720,
                        371,
                        1048,
                        703,
                        924,
                        856,
                        358,
                        251,
                        356,
                        163,
                        103,
                        256,
                        329,




                    ]
                ]
            });


        }else if (date === 'июль') {

            chartTab3.load({
                columns: [
                    ['data1', 454,
                        3137,
                        1227,
                        846,
                        439,
                        1226,
                        820,
                        1075,
                        988,
                        418,
                        295,
                        416,
                        194,
                        122,
                        290,
                        396,

                    ]
                ]
            });


        }else if (date === 'август') {

            chartTab3.load({
                columns: [
                    ['data1', 521,
                        3543,
                        1421,
                        955,
                        510,
                        1427,
                        951,
                        1247,
                        1130,
                        485,
                        341,
                        481,
                        227,
                        140,
                        337,
                        469,


                    ]
                ]
            });


        }else if (date === 'сентабрь') {

            chartTab3.load({
                columns: [
                    ['data1', 584,
                        4042,
                        1624,
                        1094,
                        599,
                        1626,
                        1077,
                        1388,
                        1280,
                        547,
                        392,
                        548,
                        259,
                        161,
                        376,
                        540,

                    ]
                ]
            });


        }else if (date === 'октябрь') {

            chartTab3.load({
                columns: [
                    ['data1', 650,
                        4532,
                        1820,
                        1233,
                        684,
                        1839,
                        1220,
                        1553,
                        1435,
                        613,
                        440,
                        624,
                        295,
                        180,
                        426,
                        609


                    ]
                ]
            });


        }












    };


    $scope.selectDate4 = function (date) {

        $scope.activeMenu4 = date;

        if (date === 'январь') {


            chartTab4.load({
                columns: [
                    ['data1', 104,
                        110,
                        106,
                        0,
                        106,
                        105,
                        99,
                        0,
                        104,
                        103,
                        106,
                        106,
                        105,
                        94,
                        101,
                        105,
                    ]
                ]
            });




        } else if (date === 'февраль') {

            chartTab4.load({
                columns: [
                    ['data1', 104,
                    109,
                    105,
                    105,
                    106,
                    105,
                    98,
                    105,
                    105,
                    101,
                    106,
                    104,
                    105,
                    95,
                    99,
                    105



                    ]
                ]
            });


        }else if (date === 'март') {

            chartTab4.load({
                columns: [
                    ['data1', 105,
                    113,
                    105,
                    106,
                    105,
                    105,
                    99,
                    106,
                    112,
                    102,
                    106,
                    105,
                    106,
                    95,
                    99,
                    105,



                    ]
                ]
            });


        }else if (date === 'апрель') {

            chartTab4.load({
                columns: [
                    ['data1', 105,
                    117,
                    106,
                    107,
                    105,
                    99,
                    100,
                    106,
                    105,
                    110,
                    106,
                    105,
                    105,
                    97,
                    99,
                    106,





                    ]
                ]
            });


        }else if (date === 'май') {

            chartTab4.load({
                columns: [
                    ['data1', 105,
                    119,
                    15,
                    108,
                    103,
                    99,
                    99,
                    105,
                    105,
                    115,
                    106,
                    104,
                    105,
                    97,
                    100,
                    106,






                    ]
                ]
            });


        }else if (date === 'июнь') {

            chartTab4.load({
                columns: [
                    ['data1', 105,
                    119,
                    105,
                    108,
                    103,
                    100,
                    99,
                    104,
                    105,
                    114,
                    106,
                    104,
                    104,
                    96,
                    100,
                    105,





                    ]
                ]
            });


        }else if (date === 'июль') {

            chartTab4.load({
                columns: [
                    ['data1', 105,
                    120,
                    105,
                    108,
                    102,
                    100,
                    99,
                    104,
                    105,
                    112,
                    106,
                    104,
                    100,
                    96,
                    100,
                    105,


                    ]
                ]
            });


        }else if (date === 'август') {

            chartTab4.load({
                columns: [
                    ['data1', 104,
                    124,
                    105,
                    109,
                    100,
                    100,
                    99,
                    105,
                    100,
                    116,
                    106,
                    104,
                    100,
                    96,
                    101,
                    105,



                    ]
                ]
            });


        }else if (date === 'сентабрь') {

            chartTab4.load({
                columns: [
                    ['data1', 104,
                    124,
                    104,
                    108,
                    100,
                    100,
                    100,
                    104,
                    105,
                    109,
                    106,
                    104,
                    100,
                    96,
                    101,
                    105,


                    ]
                ]
            });


        }else if (date === 'октябрь') {

            chartTab4.load({
                columns: [
                    ['data1', 104,
                    122,
                    104,
                    108,
                    100,
                    101,
                    100,
                    104,
                    104,
                    107,
                    105,
                    104,
                    100,
                    96,
                    101,
                    105,



                    ]
                ]
            });


        }












    };






$scope.showDialog = function (id, title, ev) {




        if (id === 1) {

            $mdDialog.show({
                controller: DialogController,
                locals:{title: title, id: id},
                templateUrl: 'components/socProm/1_tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });


        } else if (id === 2){


            $mdDialog.show({
                controller: DialogController2,
                locals:{title: title, id: id},
                templateUrl: 'components/socProm/2_tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });



        } else {


            $mdDialog.show({
                controller: DialogController3,
                locals:{title: title, id: id},
                templateUrl: 'components/socProm/3_tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });



        }





    };


    function DialogController3($scope, title, $timeout, id) {





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



        $scope.title = title;
        var chartDialogWater = null;


        $timeout(function () {




           chartDialogWater = bb.generate({

                bindto: "#chartdialogwater",

                data: {
                    columns: [
                        ['Водоснабжение; канализационная система, контроль над…', 78, 103, 108],
                        ['Электроснабжение, подача газа, пара и воздушное кондиционирование', 194, 186, 224],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            'Водоснабжение; канализационная система, контроль над…': d3.format(",.2f"),
                            'Электроснабжение, подача газа, пара и воздушное кондиционирование': d3.format(",.2f")

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

            });



        }, 250);


        $timeout(function () {




            chartDialogWater.resize();



        }, 550);












        $scope.closeDialog = function () {

            $mdDialog.hide();


        };

    }

    function DialogController2($scope, title, $timeout, id) {





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







        $scope.activeMenu = '2010';


        $scope.title = title;

        var chartDialogTab1 = null;
        var chartDialogTab2 = null;
        var chartDialogList = null;




        $timeout(function () {


            chartDialogTab1 = bb.generate({

                bindto: "#chartdialog1",

                data: {
                    columns: [
                        ['data1', 360,
                            254,
                            843,
                            85,
                            463,
                            212,
                            61,
                            300,
                            169,
                            83,
                            568,
                            131,
                            127,
                            36,
                            91,
                            61,

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: ["Алматы",
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
                },

                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },

            });




            bb.generate({

                bindto: "#chartdialog2",

                data: {
                    columns: [
                        ['data1', 146.1, 216.8, 243.8],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            data1: d3.format(",.2f")

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

            });

            chartDialogList = bb.generate({

                bindto: "#chartlistdialog",

                data: {
                    columns: [
                        ['data1', 1245, 1937, 2097],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            data1: d3.format(",.2f")

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

            });



        }, 250);



        $timeout(function () {


            $("#clk2010").click();





        }, 750);




        $scope.selectDate = function (date) {
            $scope.activeMenu = date;

            if (date === '2010') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 360,
                            254,
                            843,
                            85,
                            463,
                            212,
                            61,
                            300,
                            169,
                            83,
                            568,
                            131,
                            127,
                            36,
                            91,
                            61,

                        ],

                    ]
                });


            } else if (date === '2011') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 419,
                            295,
                            1055,
                            145,
                            633,
                            257,
                            82,
                            368,
                            206,
                            107,
                            624,
                            164,
                            170,
                            43,
                            145,
                            88,



                        ],

                    ]
                });


            }else if (date === '2012') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 456,
                            299,
                            1051,
                            174,
                            813,
                            313,
                            71,
                            430,
                            218,
                            111,
                            822,
                            198,
                            188,
                            50,
                            156,
                            98,



                        ],

                    ]
                });


            }else if (date === '2013') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 484,
                            322,
                            954,
                            229,
                            828,
                            355,
                            89,
                            481,
                            228,
                            141,
                            959,
                            214,
                            210,
                            67,
                            175,
                            116




                        ],

                    ]
                });


            }else if (date === '2014') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 581,
                            362,
                            957,
                            290,
                            930,
                            397,
                            106,
                            471,
                            259,
                            142,
                            708,
                            263,
                            223,
                            80,
                            204,
                            119




                        ],

                    ]
                });


            }else if (date === '2015') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 504,
                            336,
                            1062,
                            324,
                            827,
                            413,
                            116,
                            463,
                            264,
                            107,
                            678,
                            244,
                            231,
                            91,
                            197,
                            121





                        ],

                    ]
                });


            }else if (date === '2016') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 609,
                            489,
                            1531,
                            377,
                            1279,
                            488,
                            149,
                            570,
                            368,
                            127,
                            914,
                            315,
                            329,
                            120,
                            240,
                            144,

                        ],

                    ]
                });


            }











        };


        $scope.selectDate2 = function (date) {
            $scope.activeMenu2 = date;

            if (date === '2010') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 132.2,
                            109.5,
                            110.1,
                            113.0,
                            117.8,
                            123.3,
                            129.0,
                            116.5,
                            100.7,
                            105.0,
                            103.8,
                            111.1,
                            113.0,
                            117.1,
                            99.2,
                            113.1

                        ],

                    ]
                });


            } else if (date === '2011') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 112.7,
                            107.3,
                            112.3,
                            98.7,
                            116.1,
                            109.1,
                            129.7,
                            127.4,
                            106.3,
                            106.3,
                            102.5,
                            100.5,
                            112.1,
                            101.7,
                            107.1,
                            100.5,


                        ],

                    ]
                });


            }else if (date === '2012') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 101.7,
                            105.0,
                            102.5,
                            96.4,
                            127.5,
                            103.2,
                            105.0,
                            98.2,
                            103.0,
                            93.3,
                            111.9,
                            105.8,
                            84.9,
                            105.2,
                            102.4,
                            103.5,


                        ],

                    ]
                });


            }else if (date === '2013') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 100.2,
                            108.9,
                            102.3,
                            104.2,
                            106.7,
                            108.2,
                            108.6,
                            108.4,
                            120.3,
                            99.7,
                            108.1,
                            117.2,
                            110.1,
                            99.8,
                            104.5,
                            100.2,


                        ],

                    ]
                });


            }else if (date === '2014') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 109.0,
                            99.8,
                            103.5,
                            104.2,
                            101.4,
                            100.3,
                            96.1,
                            102.3,
                            100.8,
                            96.2,
                            108.8,
                            110.0,
                            118.5,
                            96.6,
                            100.6,
                            102.8,


                        ],

                    ]
                });


            }else if (date === '2015') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 107.9,
                            99.1,
                            103.8,
                            98.3,
                            91.0,
                            96.1,
                            105.0,
                            88.3,
                            72.1,
                            110.6,
                            90.1,
                            102.3,
                            87.6,
                            96.9,
                            100.6,
                            101.6,


                        ],

                    ]
                });


            }else if (date === '2016') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 102.9,
                            116.2,
                            96.0,
                            104.6,
                            102.1,
                            100.2,
                            100.5,
                            103.5,
                            104.3,
                            107.3,
                            105.2,
                            119.5,
                            106.6,
                            100.2,
                            98.2,
                            105.7,


                        ],

                    ]
                });


            }











        };



        $scope.tabClk = function (id) {

            $scope.activeMenu2 = "2010";


            if (id === 2){

                chartDialogTab2 = bb.generate({

                    bindto: "#chartdialogtab2",

                    data: {
                        columns: [
                            ['data1', 132.2,
                                109.5,
                                110.1,
                                113.0,
                                117.8,
                                123.3,
                                129.0,
                                116.5,
                                100.7,
                                105.0,
                                103.8,
                                111.1,
                                113.0,
                                117.1,
                                99.2,
                                113.1,


                            ],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            show: true
                        }
                    },

                    axis: {

                        x: {
                            type: 'category',
                            categories: [

                                "Акмолинская",
                                "Актюбинская",
                                "Алматинская",
                                "Атырауская",
                                "ВКО",
                                "г.Алматы",
                                "г.Астана",
                                "Жамбылская",
                                "ЗКО",
                                "Карагандинская",
                                "Костанайская",
                                "Кызылординская",
                                "Мангистауская",
                                "Павлодарская",
                                "СКО",
                                "ЮКО"
                            ]
                        },
                        y: {
                            tick: {
                                format: function (x) {
                                    return x + "%";
                                }
                            },
                            show: true

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });


                bb.generate({

                    bindto: "#chartdialogtab21",

                    data: {
                        columns: [
                            ['data1', 113.0, 98.7, 96.4, 104.2, 104.2, 98.3, 104.6],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016]
                        },
                        y: {

                            show: false

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });


                bb.generate({

                    bindto: "#chartdialogtab22",

                    data: {
                        columns: [
                            ['data1', 102.8, 95.3, 113.2],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            categories: [2015, 2016, 2017]
                        },
                        y: {

                            show: false

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });




            }





        };




        $scope.activeMenuList = "Производство продуктов нефтепереработки, млн. тенге";

        $scope.getParam = function (param) {

            $scope.activeMenuList = param;




            if (param === "Производство продуктов нефтепереработки, млн. тенге") {

                chartDialogList.load({
                    columns: [
                        ['data1', 1245, 1937, 2097],

                    ]
                });



            } else if (param === "Легкая промышленность, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 5, 6, 9],

                    ]
                });



            }else if (param === "Машиностроение, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 103, 101, 162],

                    ]
                });



            }else if (param === "Металлургия, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 1.5, 1.5, 3.8],

                    ]
                });



            }else if (param === "Химическая промышленность, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 17, 24, 38],

                    ]
                });



            }else if (param === "Производство резиновых и пластмассовых изделий, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 21, 14, 23],

                    ]
                });



            }else if (param === "Производство продуктов питания, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 27, 24, 33],

                    ]
                });



            }else if (param === "Производство прочей минеральной продукции, млн. тенге"){

                chartDialogList.load({
                    columns: [
                        ['data1', 28, 27, 33],

                    ]
                });



            }







        };


















        $scope.closeDialog = function () {

            $mdDialog.hide();


        };

    }



    function DialogController($scope, title, $timeout, id) {





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







        $scope.activeMenu = '2010';


        $scope.title = title;

        var chartDialogTab1 = null;
        var chartDialogTab2 = null;
        var chartDialogList = null;




        $timeout(function () {


            chartDialogTab1 = bb.generate({

                bindto: "#chartdialog1",

                data: {
                    columns: [
                        ['data1', 0,
                            2833,
                            88,
                            0,
                            116,
                            73,
                            1539,
                            7,
                            740,
                            882,
                            75,
                            280,
                            22,
                            757,
                            9,
                            0

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: ["Алматы",
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
                },

                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },

            });




            bb.generate({

                bindto: "#chartdialog2",

                data: {
                    columns: [
                        ['data1', 1435.2, 1871.1, 2457.1],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            data1: d3.format(",.2f")

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

            });

            chartDialogList = bb.generate({

                bindto: "#chartlistdialog",

                data: {
                    columns: [
                        ['data1', 58322, 59850, 71729],

                    ],
                    type: 'bar',
                    labels: {
                        format: {

                            data1: d3.format(",.2f")

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

            });



        }, 250);



        $timeout(function () {


            $("#clk2010").click();





        }, 750);




        $scope.selectDate = function (date) {
            $scope.activeMenu = date;

            if (date === '2010') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            2833,
                            88,
                            0,
                            116,
                            73,
                            1539,
                            7,
                            740,
                            882,
                            75,
                            280,
                            22,
                            757,
                            9,
                            0

                        ],

                    ]
                });


            } else if (date === '2011') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            3988,
                            134,
                            0,
                            115,
                            81,
                            1927,
                            8,
                            982,
                            1345,
                            90,
                            368,
                            30,
                            1000,
                            13,
                            1


                        ],

                    ]
                });


            }else if (date === '2012') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            3853,
                            135,
                            0,
                            79,
                            140,
                            2037,
                            8,
                            1024,
                            1499,
                            100,
                            270,
                            46,
                            1032,
                            17,
                            2


                        ],

                    ]
                });


            }else if (date === '2013') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            4245,
                            194,
                            0,
                            96,
                            146,
                            2023,
                            9,
                            985,
                            1482,
                            105,
                            280,
                            44,
                            1067,
                            19,
                            2



                        ],

                    ]
                });


            }else if (date === '2014') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            4503,
                            281,
                            0,
                            105,
                            149,
                            2151,
                            12,
                            897,
                            1657,
                            113,
                            240,
                            48,
                            881,
                            22,
                            2



                        ],

                    ]
                });


            }else if (date === '2015') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            3052,
                            160,
                            0,
                            103,
                            194,
                            1358,
                            15,
                            659,
                            1147,
                            119,
                            161,
                            53,
                            475,
                            23,
                            2




                        ],

                    ]
                });


            }else if (date === '2016') {


                chartDialogTab1.load({
                    columns: [
                        ['data1', 0,
                            3949,
                            209,
                            0,
                            121,
                            217,
                            1614,
                            14,
                            822,
                            1389,
                            203,
                            236,
                            69,
                            515,
                            36,
                            3



                        ],

                    ]
                });


            }











        };


        $scope.selectDate2 = function (date) {
            $scope.activeMenu2 = date;

            if (date === '2010') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 166.1,
                            107.5,
                            111.3,
                            113.1,
                            89.9,
                            0.0,
                            0.0,
                            131.8,
                            96.4,
                            103.8,
                            115.8,
                            101.4,
                            105.7,
                            111.3,
                            120.9,
                            114.7,


                        ],

                    ]
                });


            } else if (date === '2011') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 133.6,
                            109.7,
                            102.8,
                            100.9,
                            102.7,
                            0.0,
                            0.0,
                            139.8,
                            105.2,
                            96.2,
                            100.1,
                            100.1,
                            94.9,
                            108.5,
                            211.9,
                            103.1,


                        ],

                    ]
                });


            }else if (date === '2012') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 109.7,
                            108.3,
                            101.8,
                            95.8,
                            99.2,
                            0.0,
                            0.0,
                            106.8,
                            105.5,
                            110.7,
                            99.1,
                            100.6,
                            100.2,
                            101.6,
                            199.3,
                            109.6,


                        ],

                    ]
                });


            }else if (date === '2013') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 111.6,
                            100.8,
                            101.7,
                            109.3,
                            113.2,
                            0.0,
                            0.0,
                            116.5,
                            98.2,
                            122.2,
                            96.2,
                            99.2,
                            101.7,
                            101.5,
                            107.1,
                            108.6,


                        ],

                    ]
                });


            }else if (date === '2014') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 93.3,
                            95.6,
                            110.5,
                            99.4,
                            92.3,
                            81.9,
                            0.0,
                            112.0,
                            104.4,
                            112.7,
                            93.1,
                            96.0,
                            102.7,
                            94.4,
                            123.2,
                            107.3,


                        ],

                    ]
                });


            }else if (date === '2015') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 102.3,
                            94.0,
                            131.3,
                            100.9,
                            100.8,
                            0.0,
                            0.0,
                            93.2,
                            96.8,
                            98.3,
                            70.0,
                            90.0,
                            96.1,
                            115.2,
                            87.6,
                            113.2,


                        ],

                    ]
                });


            }else if (date === '2016') {


                chartDialogTab2.load({
                    columns: [
                        ['data1', 109.1,
                            92.8,
                            98.8,
                            102.0,
                            112.4,
                            0.0,
                            0.0,
                            103.9,
                            98.5,
                            104.5,
                            90.8,
                            86.4,
                            97.3,
                            115.7,
                            66.2,
                            100.9,


                        ],

                    ]
                });


            }











        };



        $scope.tabClk = function (id) {

            $scope.activeMenu2 = "2010";


            if (id === 2){

                chartDialogTab2 = bb.generate({

                    bindto: "#chartdialogtab2",

                    data: {
                        columns: [
                            ['data1', 166.1,
                                107.5,
                                111.3,
                                113.1,
                                89.9,
                                0.0,
                                0.0,
                                131.8,
                                96.4,
                                103.8,
                                115.8,
                                101.4,
                                105.7,
                                111.3,
                                120.9,
                                114.7,


                            ],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            show: true
                        }
                    },

                    axis: {

                        x: {
                            type: 'category',
                            categories: [

                                "Акмолинская",
                                "Актюбинская",
                                "Алматинская",
                                "Атырауская",
                                "ВКО",
                                "г.Алматы",
                                "г.Астана",
                                "Жамбылская",
                                "ЗКО",
                                "Карагандинская",
                                "Костанайская",
                                "Кызылординская",
                                "Мангистауская",
                                "Павлодарская",
                                "СКО",
                                "ЮКО"
                            ]
                        },
                        y: {
                            tick: {
                                format: function (x) {
                                    return x + "%";
                                }
                            },
                            show: true

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });


                bb.generate({

                    bindto: "#chartdialogtab21",

                    data: {
                        columns: [
                            ['data1', 113.1, 100.9, 95.8, 109.3, 99.4, 100.9, 102.0,],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016]
                        },
                        y: {

                            show: false

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });


                bb.generate({

                    bindto: "#chartdialogtab22",

                    data: {
                        columns: [
                            ['data1', 105.6, 102.1, 120.2],

                        ],
                        names: {
                            data1: "Значение",

                        },

                        labels: {
                            format: {

                                data1: function (val) {
                                    return d3.format(",.1f")(val) + "%";
                                }

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
                            categories: [2015, 2016, 2017]
                        },
                        y: {

                            show: false

                        }
                    },

                    tooltip: {
                        show: true,

                    },
                    legend: {
                        show: false
                    },

                });




            }





        };




        $scope.activeMenuList = "Добыча нефти, млн. тенге";

        $scope.getParam = function (param) {

            $scope.activeMenuList = param;




            if (param === "Добыча нефти, млн. тенге") {

                chartDialogList.load({
                    columns: [
                        ['data1', 58322, 59850, 71729],

                    ]
                });



            } else {

                chartDialogList.load({
                    columns: [
                        ['data1', 27879, 28230, 35050],

                    ]
                });



            }






        };


















        $scope.closeDialog = function () {

            $mdDialog.hide();


        };

    }







    $('.drawer').on('drawer.closed', function(){


        chartDohod.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartDohod.resize();

    });


});

