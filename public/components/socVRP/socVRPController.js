/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocVRPCtrl', function ($scope, $timeout, $mdDialog) {

    var chartDohod = null;
    var chartTab2 = null;
    var chartTab3 = null;
    $scope.menuItems = [2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016];




    $scope.activeMenu = '2010';
    $scope.activeMenu2 = '2010';
    $scope.activeMenu3 = '2010';



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
                    ['data1', 3923,
                        2844,
                        1873,
                        1774,
                        1244,
                        1205,
                        1485,
                        998,
                        1174,
                        1049,
                        1032,
                        857,
                        586,
                        859,
                        446,
                        467,
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
                    ['data1', 1974.0, 2382.4, 2721.0

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







    }, 50);





    $scope.selectDate = function (param) {

        $scope.activeMenu = param;

        if (param === '2010') {




            chartDohod.load({
                columns: [
                    ['data1', 3923,
                        2844,
                        1873,
                        1774,
                        1244,
                        1205,
                        1485,
                        998,
                        1174,
                        1049,
                        1032,
                        857,
                        586,
                        859,
                        446,
                        467,
                    ]
                ]
            });



        } else if (param === "2011") {


            chartDohod.load({
                columns: [
                    ['data1',

                        4860,
                        3792,
                        2388,
                        2146,
                        1621,
                        1513,
                        1868,
                        1237,
                        1562,
                        1358,
                        1520,
                        1134,
                        805,
                        1139,
                        634,
                        667


                    ],

                ]
            });




        } else if (param === "2012") {

            chartDohod.load({
                columns: [
                    ['data1', 5716,
                        3613,
                        2447,
                        2646,
                        1811,
                        1869,
                        1765,
                        1448,
                        1757,
                        1763,
                        1521,
                        1151,
                        800,
                        1270,
                        760,
                        680
                    ],

                ]
            });





        }else if (param === "2013") {

            chartDohod.load({
                columns: [
                    ['data1', 7128,
                        3977,
                        2622,
                        3483,
                        2063,
                        2141,
                        2075,
                        1742,
                        1844,
                        1781,
                        1758,
                        1348,
                        956,
                        1454,
                        877,
                        750
                    ],

                ]
            });





        }else if (param === "2014") {

            chartDohod.load({
                columns: [
                    ['data1', 8144,
                        4341,
                        2900,
                        4020,
                        2283,
                        2399,
                        2418,
                        1910,
                        1926,
                        1988,
                        1747,
                        1395,
                        1051,
                        1380,
                        980,
                        796,
                    ],

                ]
            });





        }else if (param === "2015") {

            chartDohod.load({
                columns: [
                    ['data1', 9100,
                        4217,
                        3107,
                        4810,
                        2311,
                        2508,
                        2124,
                        1976,
                        1769,
                        1710,
                        1736,
                        1378,
                        1121,
                        1165,
                        1015,
                        837,
                    ],

                ]
            });





        }else if (param === "2016") {

            chartDohod.load({
                columns: [
                    ['data1', 10601,
                        5201,
                        3712,
                        4865,
                        2794,
                        2789,
                        2463,
                        2190,
                        2071,
                        2033,
                        1975,
                        1522,
                        1344,
                        1308,
                        1183,
                        918,

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
                        ['data1', 110.4,
                        112.7,
                        106.4,
                        107.3,
                        107.2,
                        104.5,
                        107.8,
                        107.6,
                        109.2,
                        102.6,
                        106.4,
                        101.7,
                        96.3,
                        103.8,
                        107.6,
                        100.8,

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
                        ['data1', 112.7, 103.2, 97.7, 104.0, 102.5, 102.8, 103.7],

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
                        ['data1', 101.0, 103.2, 133.5],

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

                bindto: "#chartTab3",

                data: {
                    columns: [
                        ['data1', 2797,
                            5401,
                            1388,
                            2636,
                            890,
                            475,
                            2890,
                            538,
                            1523,
                            1730,
                            1385,
                            971,
                            798,
                            1237,
                            429,
                            790,

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

                bindto: "#chartTab31",

                data: {
                    columns: [
                        ['data1', 3377, 3985, 4456],

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




        }



    };




    $scope.selectDate2 = function (date) {

        $scope.activeMenu2 = date;

        if (date === '2010') {


            chartTab2.load({
                columns: [
                    ['data1', 110.4,
                        112.7,
                        106.4,
                        107.3,
                        107.2,
                        104.5,
                        107.8,
                        107.6,
                        109.2,
                        102.6,
                        106.4,
                        101.7,
                        96.3,
                        103.8,
                        107.6,
                        100.8,
                    ]
                ]
            });




        } else if (date === '2011') {

            chartTab2.load({
                columns: [
                    ['data1', 109.4,
                    103.2,
                    106.0,
                    108.9,
                    107.6,
                    105.7,
                    99.9,
                    109.0,
                    106.5,
                    104.3,
                    110.8,
                    115.6,
                    116.2,
                    105.9,
                    113.2,
                    116.4,

                    ]
                ]
            });


        }else if (date === '2012') {

            chartTab2.load({
                columns: [
                    ['data1', 109.6,
                    97.7,
                    101.2,
                    114.7,
                    112.6,
                    104.0,
                    100.9,
                    107.4,
                    107.6,
                    104.4,
                    108.1,
                    93.5,
                    94.3,
                    103.2,
                    109.8,
                    94.6,


                    ]
                ]
            });


        }else if (date === '2013') {

            chartTab2.load({
                columns: [
                    ['data1', 114.8,
                    104.0,
                    107.5,
                    110.6,
                    107.3,
                    103.0,
                    105.5,
                    110.7,
                    104.7,
                    103.3,
                    100.1,
                    110.2,
                    105.0,
                    104.4,
                    103.3,
                    107.7,



                    ]
                ]
            });


        }else if (date === '2014') {

            chartTab2.load({
                columns: [
                    ['data1', 107.0,
                    102.5,
                    103.2,
                    109.4,
                    102.8,
                    102.3,
                    104.0,
                    105.2,
                    104.5,
                    105.1,
                    100.9,
                    102.2,
                    104.7,
                    98.7,
                    100.4,
                    105.8,




                    ]
                ]
            });


        }else if (date === '2015') {

            chartTab2.load({
                columns: [
                    ['data1', 104.2,
                    102.8,
                    102.7,
                    106.4,
                    100.0,
                    101.4,
                    100.1,
                    104.2,
                    96.9,
                    99.4,
                    100.3,
                    96.4,
                    101.9,
                    95.9,
                    100.2,
                    101.0,




                    ]
                ]
            });


        }else if (date === '2016') {

            chartTab2.load({
                columns: [
                    ['data1', 102.6,
                    103.7,
                    102.4,
                    102.4,
                    102.2,
                    101.9,
                    99.9,
                    101.8,
                    101.0,
                    102.6,
                    99.4,
                    98.0,
                    102.9,
                    95.2,
                    102.6,
                    100.8,




                    ]
                ]
            });


        }









    };



    $scope.selectDate3 = function (date) {

        $scope.activeMenu3 = date;

        if (date === '2010') {


            chartTab3.load({
                columns: [
                    ['data1', 2797,
                        5401,
                        1388,
                        2636,
                        890,
                        475,
                        2890,
                        538,
                        1523,
                        1730,
                        1385,
                        971,
                        798,
                        1237,
                        429,
                        790,
                    ]
                ]
            });




        } else if (date === '2011') {

            chartTab3.load({
                columns: [
                    ['data1', 3395,
                        7054,
                        1762,
                        2980,
                        1161,
                        583,
                        3492,
                        654,
                        1998,
                        2225,
                        2037,
                        1288,
                        1099,
                        1612,
                        603,
                        1137


                    ]
                ]
            });


        }else if (date === '2012') {

            chartTab3.load({
                columns: [
                    ['data1', 3908,
                        6581,
                        1799,
                        3480,
                        1299,
                        705,
                        3170,
                        751,
                        2221,
                        2866,
                        2033,
                        1308,
                        1093,
                        1764,
                        715,
                        1169



                    ]
                ]
            });


        }else if (date === '2013') {

            chartTab3.load({
                columns: [
                    ['data1', 4779,
                        7083,
                        1919,
                        4374,
                        1480,
                        791,
                        3593,
                        886,
                        2298,
                        2868,
                        2341,
                        1532,
                        1302,
                        1983,
                        814,
                        1298



                    ]
                ]
            });


        }else if (date === '2014') {

            chartTab3.load({
                columns: [
                    ['data1', 5021,
                        7553,
                        2111,
                        4822,
                        1637,
                        869,
                        4050,
                        1002,
                        2361,
                        3170,
                        2316,
                        1583,
                        1428,
                        1849,
                        897,
                        1387





                    ]
                ]
            });


        }else if (date === '2015') {

            chartTab3.load({
                columns: [
                    ['data1', 5440,
                        7171,
                        2249,
                        5575,
                        1656,
                        891,
                        3443,
                        1021,
                        2135,
                        2700,
                        2293,
                        1562,
                        1514,
                        1534,
                        918,
                        1467




                    ]
                ]
            });


        }else if (date === '2016') {

            chartTab3.load({
                columns: [
                    ['data1', 6139,
                        8653,
                        2683,
                        5273,
                        2006,
                        975,
                        3881,
                        1114,
                        2465,
                        3180,
                        2607,
                        1727,
                        1818,
                        1701,
                        1063,
                        1621,




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
                templateUrl: 'components/socVRP/1_tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });

        } else {


            $mdDialog.show({
                controller: DialogController,
                locals:{title: title, id: id},
                templateUrl: 'components/socVRP/2_tpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose:true,
                fullscreen: true // Only for -xs, -sm breakpoints.
            });


        }





    };




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


        $scope.menuItems = [
            2014,
            2015,
            2016];




        $scope.activeMenu = '2014';


        $scope.title = title;

        var chartDonut = null;



        $timeout(function () {



            if (id === 1) {

                chartDonut = bb.generate({
                    data: {
                        columns: [
                            ["Горнодобывающая промышленность", 20931],
                            ["Обрабатывающая промышленность", 1894],
                            ["Электроснабжение, подача газа", 194],
                            ["Водоснабжение", 78]
                        ],
                        type: "donut"
                    },
                    donut: {

                        label: {
                            ratio: 1,
                            format: function (val, val2, id) {
                                if (id === "Горнодобывающая промышленность") {


                                    return d3.format(",.0f")(val);

                                } else if (id === "Обрабатывающая промышленность") {


                                    return d3.format(",.0f")(val);


                                } else {

                                    return val;

                                }

                            }
                        }
                    },
                    legend: {
                        show: true
                    },
                    size: {
                        height: 400,
                        width: 600
                    },

                    tooltip: {
                        format: {

                            value: function (value, ratio, id) {
                                var format = d3.format(',.0f');

                                return format(value);
                            }
                        }

                    },
                    bindto: "#chart12"
                });




            } else if (id === 2) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 2382, 3244, 4851],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 3) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 146, 197, 234],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 4) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 2343, 3594, 6363],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 5) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 399, 457, 522],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 6) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 2382, 3244, 4851],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 7) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 2751, 3041, 3369],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 8) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 247, 304, 368],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 9) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 1653, 1556, 1646],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 10) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 198, 232, 272],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 11) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 513, 567, 578],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 12) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 295, 342, 526],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 13) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 1343, 1651, 1677],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 14) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 237, 247, 282],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 15) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 83, 90, 118],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }else if (id === 16) {


                bb.generate({

                    bindto: "#chart12",

                    data: {
                        columns: [
                            ['data1', 6512, 3448, 3877],

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
                            categories: [2014,2015,2016
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
                    size: {
                        height: 450,
                        width: 600
                    },

                });



            }













        }, 50);



        $scope.selectDate = function (date) {
            $scope.activeMenu = date;

            if (date === '2014') {


                chartDonut.load({
                    columns: [
                        ["Горнодобывающая промышленность", 20931],
                        ["Обрабатывающая промышленность", 1894],
                        ["Электроснабжение, подача газа", 194],
                        ["Водоснабжение", 78]
                    ]
                });


            } else if (date === '2015') {


                chartDonut.load({
                    columns: [
                        ["Горнодобывающая промышленность", 19723],
                        ["Обрабатывающая промышленность", 1847],
                        ["Электроснабжение, подача газа", 186],
                        ["Водоснабжение", 103]
                    ]
                });


            }else if (date === '2016') {


                chartDonut.load({
                    columns: [
                        ["Горнодобывающая промышленность", 22669],
                        ["Обрабатывающая промышленность", 2565],
                        ["Электроснабжение, подача газа", 224],
                        ["Водоснабжение", 108]
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

