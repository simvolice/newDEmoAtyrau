/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocInvestCtrl', function ($scope, $timeout, $mdDialog) {

    var chartDohod = null;
    var chartTab2 = null;
    var chartTab3 = null;
    var chartnew1 = null;
    var chartnew2 = null;
    var chartnew3 = null;
    var chartnew4 = null;
    var chartnew5 = null;
    var chartnew6 = null;
    var chartnew7 = null;
    var chartnew8 = null;
    var chartnew9 = null;
    var chartnew10 = null;






    $scope.activeMenu = '2010';
    $scope.activeMenu2 = '2010';
    $scope.activeMenu3 = '2015';



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
                    ['data1', 398,
                        1105,
                        211,
                        397,
                        145,
                        263,
                        372,
                        307,
                        364,
                        234,
                        185,
                        121,
                        107,
                        247,
                        147,
                        51,

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
                    ['data1', 551, 915, 1033],

                ],
                type: 'bar',
                labels: {
                    format: {

                        data1: d3.format(",.0f")

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





        chartnew1 = bb.generate({

            bindto: "#chartnew1",

            data: {
                columns: [
                    ['Объем инвестиций в основной капитал (млрд. тенге)',

                        1038.4,
                        1129.6,
                        1470.3,
                        2036.9,
                        2456.3



                    ],


                    ['ИФО', 97.3,
                    104.4,
                    126.7,
                    127.7,
                    114.0,




                    ],

                ],

                type: 'bar',

                types: {

                    'ИФО': "line"

                },


                labels: {
                    format: function (x, id) {


                        if (id === 'ИФО') {

                            return d3.format(",.2d")(x) + "%";

                        } else {
                            return d3.format(",.2d")(x);

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
                        2013,
                        2014,
                        2015,
                        2016,
                        2017
                    ]
                },
                y: {
                    show: true
                }
            },

            tooltip: {
                show: true
            },
            legend: {
                show: true
            },

        });









    }, 50);


    $timeout(function () {


        $("#clk2010invest").click();


    }, 750);






    $scope.selectDate = function (param) {

        $scope.activeMenu = param;

        if (param === '2010') {




            chartDohod.load({
                columns: [
                    ['data1', 398,
                        1105,
                        211,
                        397,
                        145,
                        263,
                        372,
                        307,
                        364,
                        234,
                        185,
                        121,
                        107,
                        247,
                        147,
                        51,
                    ]
                ]
            });



        } else if (param === "2011") {


            chartDohod.load({
                columns: [
                    ['data1',

                        415,
                        1077,
                        253,
                        572,
                        242,
                        273,
                        370,
                        373,
                        386,
                        170,
                        208,
                        151,
                        123,
                        222,
                        107,
                        69,


                    ],

                ]
            });




        } else if (param === "2012") {

            chartDohod.load({
                columns: [
                    ['data1', 458,
                        1034,
                        324,
                        617,
                        266,
                        318,
                        396,
                        384,
                        433,
                        165,
                        264,
                        164,
                        144,
                        256,
                        152,
                        98,

                    ],

                ]
            });





        }else if (param === "2013") {

            chartDohod.load({
                columns: [
                    ['data1', 483,
                        1038,
                        405,
                        547,
                        301,
                        415,
                        440,
                        431,
                        496,
                        194,
                        276,
                        180,
                        142,
                        372,
                        249,
                        102,

                    ],

                ]
            });





        }else if (param === "2014") {

            chartDohod.load({
                columns: [
                    ['data1', 512,
                        1130,
                        412,
                        647,
                        346,
                        449,
                        532,
                        453,
                        526,
                        270,
                        353,
                        192,
                        181,
                        263,
                        209,
                        117,

                    ],

                ]
            });





        }else if (param === "2015") {

            chartDohod.load({
                columns: [
                    ['data1', 533,
                        1470,
                        343,
                        782,
                        412,
                        418,
                        459,
                        491,
                        350,
                        366,
                        452,
                        163,
                        199,
                        237,
                        194,
                        155,

                    ],

                ]
            });





        }else if (param === "2016") {

            chartDohod.load({
                columns: [
                    ['data1', 582,
                        2037,
                        318,
                        859,
                        437,
                        381,
                        406,
                        529,
                        374,
                        402,
                        440,
                        178,
                        223,
                        216,
                        216,
                        167,


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
                        ['data1', 100.4,
                        97.4,
                        93.0,
                        101.0,
                        98.3,
                        78.6,
                        111.8,
                        92.4,
                        112.0,
                        91.2,
                        105.7,
                        93.2,
                        67.8,
                        138.1,
                        63.5,
                        99.5,


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
                        ['data1', 97, 94, 94, 97, 104, 127, 128],

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
                        ['data1', 110.3, 160.2, 107.2,],

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


             bb.generate({

                bindto: "#chartTab33",

                data: {
                    columns: [
                        ['Внешние инвестиции', 633, 893, 794],

                        ['Внутренние инвестиции', 449, 753, 1197],

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
                        categories: [2015, 2016, 2017
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
                    show: true
                },

            });




            chartTab3 = bb.generate({

                bindto: "#chartTab313",

                data: {
                    columns: [
                        ['Внешние инвестиции', 58.62],

                        ['Внутренние инвестиции', 41.38],

                    ],
                    type: 'donut',

                },


                tooltip: {
                    show: true
                },
                legend: {
                    show: false
                },

            });




        }else if (id === 4) {


            bb.generate({

                bindto: "#chartTab41",

                data: {
                    columns: [
                        ['Промышленность', 936, 1452, 1682],

                        ['% к предыдущему году', 102.9, 147.2, 110.3],

                    ],
                    type: 'bar',
                    types: {

                        '% к предыдущему году': "line"

                    },
                    labels: {
                        format: {
                            '% к предыдущему году': function (x) {
                                return d3.format(',.2f')(x) + "%"
                            },

                            'Промышленность': function (x) {
                                return d3.format(',.2f')(x);
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
                        categories: [2015, 2016, 2017
                        ]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },

            });




            bb.generate({

                bindto: "#chartTab42",

                data: {
                    columns: [


                        ['Обрабатывающая', 54, 108, 139],

                        ['Горнодобывающая', 867, 1335, 1487],

                        ['Электроснабжение', 12, 5, 49],

                        ['Водоснабжение', 3, 3, 8],

                    ],
                    type: 'bar',

                    labels: {

                            value: function (x) {
                                return d3.format(',.2f')(x);
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
                        categories: [2015, 2016, 2017
                        ]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },

            });




        }else if (id === 5) {


            bb.generate({

                bindto: "#chartTab51",

                data: {
                    columns: [
                        ['Готовые металлические изделия, кроме машин и оборудования', 0, 1, 2],
                        ['Кокс и продукты нефтепереработки', 32, 99, 134],
                        ['Машины и оборудования, не включенных в другие категории', 1, 0, 0],
                        ['Продукты химической промышленности', 20, 5, 1],



                    ],
                    type: 'bar',

                    labels: {

                            value: function (x) {
                                return d3.format(',.2f')(x);
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
                    show: true
                },
                legend: {
                    show: true
                },

            });




            bb.generate({

                bindto: "#chartTab52",

                data: {
                    columns: [


                        ['Добыча сырой нефти и природного газа', 765, 990, 1461],

                        ['Технические услуги в области горнодобывающей промышленности', 102, 346, 26],



                    ],
                    type: 'bar',

                    labels: {

                            value: function (x) {
                                return d3.format(',.2f')(x);
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
                    show: true
                },
                legend: {
                    show: true
                },

            });




        }else if (id === 6) {


           chartnew2 = bb.generate({

               bindto: "#chartnew2",

               data: {
                   columns: [
                       ['data1', 257.0,
                           437.1,
                           527.3,
                           2456.5,
                           440.6,
                           639.9,
                           944.6,
                           234.5,
                           414.3,
                           358.8,
                           199.4,
                           241.5,
                           432.8,
                           493.9,
                           188.9,
                           482.0,


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
                       categories: [

                           "АКМОЛИНСКАЯ",
                           "АКТЮБИНСКАЯ",
                           "АЛМАТИНСКАЯ",
                           "АТЫРАУСКАЯ",
                           "ВОСТОЧНО-КАЗАХСТАНСКАЯ",
                           "Г.АЛМАТЫ",
                           "Г.АСТАНА",
                           "ЖАМБЫЛСКАЯ",
                           "ЗАПАДНО-КАЗАХСТАНСКАЯ",
                           "КАРАГАНДИНСКАЯ",
                           "КОСТАНАЙСКАЯ",
                           "КЫЗЫЛОРДИНСКАЯ",
                           "МАНГИСТАУСКАЯ",
                           "ПАВЛОДАРСКАЯ",
                           "СЕВЕРО-КАЗАХСТАНСКАЯ",
                           "ЮЖНО-КАЗАХСТАНСКАЯ"
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








        }else if (id === 7) {


            chartnew3 = bb.generate({
                data: {
                    columns: [

                        ["Собственные средства", 1303.3],
                        ["Кредиты банков", 172.8],
                        ["Другие заемные средства", 522.1],
                        ["Республиканский бюджет", 11.7],
                        ["Местный бюджет", 27.0],


                    ],
                    type: "donut"

                },
                donut: {
                    title: "2036,85 \n" +
                    " млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew3"
            });







        }else if (id === 8) {


            chartnew4 = bb.generate({

                bindto: "#chartnew4",

                data: {
                    columns: [
                        ['Внутренние инвестиции (млрд. тенге)', 556.0,
                            619.5,
                            1382.6,

                        ],

                        ['Внешние инвестиции (млрд. тенге)', 573.6,
                            850.8,
                            654.2,

                        ],

                    ],
                    type: 'bar',
                    labels: {
                        format: function (val) {
                            return d3.format(",.2f")(val);
                        }


                    },
                    groups: [

                        ['Внутренние инвестиции (млрд. тенге)',
                            'Внешние инвестиции (млрд. тенге)']

                    ]
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

                            2014,
                            2015,
                            2016,

                        ]
                    },
                    y: {

                        show: false

                    }
                },

                tooltip: {
                    show: true
                },
                legend: {
                    show: true
                },

            });


            chartnew5 = bb.generate({
                data: {
                    columns: [

                        ["Работы по строительству и капитальному ремонту зданий и сооружений", 859.6],
                        ["Машины, оборудование,транспортные средства, инструмент ", 555.4],
                        ["Прочие  затраты в объеме инвестиций в основной капитал", 621.9],


                    ],
                    type: "donut"

                },
                donut: {
                    title: "2 036,9\n" +
                    "  млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew5"
            });





        }else if (id === 9) {


            chartnew6 = bb.generate({
                data: {
                    columns: [

                        ["Промышленность", 1773.2],
                        ["Транспорт и складирование ", 174.9],
                        ["Операции с недвижимым имуществом", 33.2],
                        ["Прочая деятельность", 55.6],


                    ],
                    type: "donut"

                },
                donut: {
                    title: "2 036,85\n" +
                    "  млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew6"
            });


            chartnew7 = bb.generate({

                bindto: "#chartnew7",

                data: {
                    columns: [
                        ['data1', 375.8,
                            388.6,
                            408.7,
                            834.7,
                            1039.2,
                            1716.1,
                            2236.3,
                            3246.7,
                            5203.2,
                            5796.5,
                            7368.8,
                            10640.3,
                            16313.8

                        ],



                    ],
                    type: 'bar',
                    labels: {
                        format: function (val) {
                            return d3.format(",.2f")(val);
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
                        categories: [

                            "Предоставление прочих видов услуг",
                            "Государственное управление и оборона",
                            "Финансовая и страховая деятельность",
                            "Искусство, развлечения и отдых",
                            "Здравоохранение и социальные услуги",
                            "Сельское, лесное и рыбное хозяйство",
                            "Информация и связь",
                            "Оптовая и розничная торговля",
                            "Деятельность в области административного и вспомогательного обслуживания",
                            "Образование",
                            "Услуги по проживанию и питанию",
                            "Профессиональная, научная и техническая деятельность",
                            "Строительство"


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





        }else if (id === 10) {


            chartnew8 = bb.generate({
                data: {
                    columns: [

                        ["Горнодобывающая", 1624.7],
                        ["Обрабатывающая", 127.0],
                        ["Электроснабжением", 11.5],
                        ["Водоснабжение", 10.0],


                    ],
                    type: "donut"

                },
                donut: {
                    title: "1 773,0\n" +
                    "  млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew8"
            });

            chartnew9 = bb.generate({
                data: {
                    columns: [

                        ["Производство кокса и продуктов нефтепереработки", 112.5],
                        ["Производство продуктов химической промышленности", 10.9],
                        ["Производство прочей продукции", 3.6],



                    ],
                    type: "donut"

                },
                donut: {
                    title: "127,0\n" +
                    "  млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew9"
            });

            chartnew10 = bb.generate({
                data: {
                    columns: [

                        ["Добыча сырой нефти и природного газа", 1324.71],
                        ["Технические услуги и прочие отрасли горнодобывающей промышленности", 299.98],




                    ],
                    type: "donut"

                },
                donut: {
                    title: "1 624,7\n" +
                    "  млрд. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2d")(x);


                        }

                    }


                },

                bindto: "#chartnew10"
            });




        }








    };




    $scope.selectDate2 = function (date) {

        $scope.activeMenu2 = date;

        if (date === '2010') {


            chartTab2.load({
                columns: [
                    ['data1', 100.4,
                        97.4,
                        93.0,
                        101.0,
                        98.3,
                        78.6,
                        111.8,
                        92.4,
                        112.0,
                        91.2,
                        105.7,
                        93.2,
                        67.8,
                        138.1,
                        63.5,
                        99.5,
                    ]
                ]
            });




        } else if (date === '2011') {

            chartTab2.load({
                columns: [
                    ['data1', 100.6,
                    94.1,
                    112.4,
                    136.1,
                    156.2,
                    97.5,
                    93.0,
                    114.9,
                    102.1,
                    68.7,
                    105.1,
                    116.1,
                    107.6,
                    85.5,
                    69.1,
                    129.3,


                    ]
                ]
            });


        }else if (date === '2012') {

            chartTab2.load({
                columns: [
                    ['data1',

                        106.3,
                    93.5,
                    121.6,
                    101.5,
                    104.7,
                    110.2,
                    101.5,
                    97.8,
                    108.6,
                    92.1,
                    120.7,
                    102.7,
                    109.9,
                    110.3,
                    134.8,
                    136.3,



                    ]
                ]
            });


        }else if (date === '2013') {

            chartTab2.load({
                columns: [
                    ['data1', 102.5,
                    97.3,
                    118.7,
                    85.3,
                    108.3,
                    124.7,
                    105.8,
                    107.9,
                    111.9,
                    114.5,
                    100.1,
                    105.5,
                    94.9,
                    140.2,
                    155.9,
                    100.3,




                    ]
                ]
            });


        }else if (date === '2014') {

            chartTab2.load({
                columns: [
                    ['data1', 94.8,
                    104.4,
                    96.6,
                    113.0,
                    112.6,
                    102.8,
                    114.7,
                    109.1,
                    102.2,
                    137.3,
                    121.2,
                    101.6,
                    122.4,
                    67.9,
                    80.6,
                    110.5,





                    ]
                ]
            });


        }else if (date === '2015') {

            chartTab2.load({
                columns: [
                    ['data1', 102.4,
                    126.7,
                    81.1,
                    116.6,
                    115.9,
                    90.4,
                    82.3,
                    105.4,
                    65.1,
                    132.1,
                    123.8,
                    82.0,
                    105.3,
                    88.2,
                    90.8,
                    129.2,





                    ]
                ]
            });


        }else if (date === '2016') {

            chartTab2.load({
                columns: [
                    ['data1', 104.4,
                    127.7,
                    89.9,
                    104.4,
                    95.0,
                    85.8,
                    81.3,
                    101.7,
                    108.2,
                    106.9,
                    93.7,
                    92.5,
                    98.7,
                    84.7,
                    105.5,
                    105.1,





                    ]
                ]
            });


        }









    };



    $scope.selectDate3 = function (date) {

        $scope.activeMenu3 = date;



        if (date === '2015') {

            chartTab3.load({
                columns: [
                    ['Внешние инвестиции', 58.62],

                    ['Внутренние инвестиции', 41.38],

                ]
            });


        }else if (date === '2016') {

            chartTab3.load({
                columns: [
                    ['Внешние инвестиции', 51.3],

                    ['Внутренние инвестиции', 48.7],

                ]
            });


        }
        else if (date === '2017') {

            chartTab3.load({
                columns: [
                    ['Внешние инвестиции', 39.88],

                    ['Внутренние инвестиции', 60.12],

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

