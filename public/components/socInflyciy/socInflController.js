/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocInflCtrl', function ($scope, $timeout, $mdDialog) {

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
    var chartnew11 = null;
    var chartnew12 = null;
    var chartnew13 = null;
    var chartnew14 = null;
    var chartnew15 = null;







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





        chartnew1 = bb.generate({

            bindto: "#chartnew1",

            data: {
                columns: [
                    ['Значение', 7.7,
                    7.5,
                    7.2,
                    7.2,
                    7.2,
                    7.2,
                    7.2,
                    7.1,
                    7.1,
                    7.1,
                    6.9,
                    6.9,
                    6.7,
                    6.7,
                    6.6,
                    6.4,
                    ],

                ],

                type: 'bar',


                labels: {
                    format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";




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

                        "ПАВЛОДАРСКАЯ",
                        "Г.АСТАНА",
                        "ВОСТОЧНО-КАЗАХСТАНСКАЯ",
                        "ЖАМБЫЛСКАЯ",
                        "ЮЖНО-КАЗАХСТАНСКАЯ",
                        "МАНГИСТАУСКАЯ",
                        "АТЫРАУСКАЯ",
                        "Г.АЛМАТЫ",
                        "АКМОЛИНСКАЯ",
                        "СЕВЕРО-КАЗАХСТАНСКАЯ",
                        "КАРАГАНДИНСКАЯ",
                        "КОСТАНАЙСКАЯ",
                        "АЛМАТИНСКАЯ",
                        "ЗАПАДНО-КАЗАХСТАНСКАЯ",
                        "КЫЗЫЛОРДИНСКАЯ",
                        "АКТЮБИНСКАЯ"



                    ]
                },
                y: {
                    show: true
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


        $("#clk2010vrp").click();


    }, 750);








    $scope.tabClk = function (id) {

        if(id === 2) {

            chartnew2 = bb.generate({

                bindto: "#chartnew2",

                data: {
                    columns: [
                        ['Атырауская область', 4.9,
                        7.0,
                        13.1,
                        9.4,
                        7.2,

                        ],

                        ['Республика Казахстан', 4.8,
                        7.4,
                        13.6,
                        8.5,
                        7.1,

                        ],

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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




        } else if (id === 3) {


            chartnew3 = bb.generate({

                bindto: "#chartnew3",

                data: {
                    columns: [
                        ['Инфляция', 6.5,
                        4.9,
                        7.0,
                        13.1,
                        9.4,


                        ],

                        ['Индекс реальных денежных доходов', 102.7,
                        96.4,
                        106.4,
                        92.3,
                        101.4,

                        ],

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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

                            2012,

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





        } else if (id === 4) {



            chartnew4 = bb.generate({

                bindto: "#chartnew4",

                data: {
                    columns: [
                        ['Атырауская область', 102.8,
                        108.8,
                        109.4,
                        109.7,
                        106.7,



                        ],

                        ['Республика Казахстан', 103.3,
                        108.0,
                        110.9,
                        109.7,
                        106.5,


                        ],

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                            2017,



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




            chartnew5 = bb.generate({

                bindto: "#chartnew5",

                data: {
                    columns: [
                        ['Значение', -22.0,
                        2.5,
                        3.0,
                        3.0,
                        5.1,
                        7.8,
                        9.7,
                        9.8,
                        11.7,
                        16.1,


                        ]



                    ],

                    type: 'bar',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: [

                            "Яйца",
                            "Масла и жиры",
                            "Фрукты и овощи",
                            "Сахар и кондитерские изделия",
                            "Хлебобулочные изделия и крупы",
                            "Безалкогольные напитки",
                            "Мясо (включая мясопродукты)",
                            "Молочные продукты",
                            "Алкогольные напитки и табачные изделия",
                            "Рыба и морепродукты",



        ]
                    },
                    y: {
                        show: true
                    }
                },

                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },

            });





        }else if (id === 5) {



            chartnew6 = bb.generate({

                bindto: "#chartnew6",

                data: {
                    columns: [
                        ['Атырауская область', 102.9,
                        108.8,
                        122.8,
                        109.7,
                        108.6,




                        ],

                        ['Республика Казахстан', 103.3,
                        107.8,
                        122.6,
                        109.5,
                        108.9,


                        ],

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                            2017,



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




            chartnew7 = bb.generate({

                bindto: "#chartnew7",

                data: {
                    columns: [
                        ['Значение', 5.9,
                        6.6,
                        8.3,
                        8.4,
                        15.7,
                        16.6,



                        ]



                    ],

                    type: 'bar',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: [

                            "Одежда и обувь",
                            "Предметы домашнего обихода",
                            "Жилищные услуги, вода, электроэнергия, газ и другие виды топлива",
                            "Здравоохранение",
                            "Бензин",
                            "Покупка автотранспортных средств",




                        ]
                    },
                    y: {
                        show: true
                    }
                },

                tooltip: {
                    show: false
                },
                legend: {
                    show: false
                },

            });



        }else if (id === 6) {



            chartnew8 = bb.generate({

                bindto: "#chartnew8",

                data: {
                    columns: [
                        ['Атырауская область', 109.5,
                        103.2,
                        107.8,
                        108.8,
                        106.5,





                        ],

                        ['Республика Казахстан', 108.0,
                        105.4,
                        108.1,
                        106.1,
                        105.9,



                        ],

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                            2017,



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




            chartnew9 = bb.generate({

                bindto: "#chartnew9",

                data: {
                    columns: [
                        ['Значение', 0.0,
                        1.2,
                        3.9,
                        5.6,
                        7.0,
                        7.8,
                        8.3,
                        10.5,


                        ]



                    ],

                    type: 'bar',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2d")(x) + "%";

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: [

                            "Ритуальные услуги",
                            "Связь",
                            "Услуги транспорта",
                            "Разные товары и услуги",
                            "Правовые услуги",
                            "Образование",
                            "Отдых и культура",
                            "Рестораны и гостиницы",



                        ]
                    },
                    y: {
                        show: true
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



            chartnew10 = bb.generate({

                bindto: "#chartnew10",

                data: {
                    columns: [
                        ['Цена на нефть марки Brent по годам ($ за баррель)', 110.8,
                            62.3,
                            38.0,
                            53.3,
                            64.4,




                        ]

                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x) + "$";

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
                            2017,



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




            chartnew11 = bb.generate({

                bindto: "#chartnew11",

                data: {
                    columns: [
                        ['Цена на нефть марки Brent за 2017 год ($ за баррель)',

                            54.6,
                            54.9,
                            51.6,
                            52.3,
                            50.3,
                            46.4,
                            48.5,
                            51.7,
                            56.2,
                            57.5,
                            62.7,
                            64.4,



                        ]



                    ],

                    type: 'bar',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x) + "$";

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
                    rotated: true,
                    x: {
                        type: 'category',
                        categories: [

                            "Январь",
                            "Февраль",
                            "Март",
                            "Апрель",
                            "Май",
                            "Июнь",
                            "Июль",
                            "Август",
                            "Сентябрь",
                            "Октябрь",
                            "Ноябрь",
                            "Декабрь",



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







        }else if (id === 8) {



            chartnew12 = bb.generate({

                bindto: "#chartnew12",

                data: {
                    columns: [
                        ['Доллар США', 152.1,
                            179.2,
                            221.7,
                            342.2,
                            326.0,


                        ],
                        ['Евро', 202.9,
                            238.1,
                            245.8,
                            378.6,
                            368.3,

                        ],




                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x);

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
                            2017,



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




            chartnew13 = bb.generate({

                bindto: "#chartnew13",

                data: {
                    columns: [
                        ['Доллар США',

                            331.1,
                            320.2,
                            316.1,
                            312.2,
                            313.5,
                            318.4,
                            325.3,
                            332.7,
                            339.2,
                            337.1,
                            332.5,
                            333.7,



                        ],


                        ['Евро',

                            352.0,
                            340.8,
                            337.2,
                            334.1,
                            346.5,
                            357.2,
                            374.1,
                            392.4,
                            404.5,
                            396.5,
                            389.9,
                            394.7,




                        ]




                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x);

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

                            "Январь",
                            "Февраль",
                            "Март",
                            "Апрель",
                            "Май",
                            "Июнь",
                            "Июль",
                            "Август",
                            "Сентябрь",
                            "Октябрь",
                            "Ноябрь",
                            "Декабрь",



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




        }else if (id === 9) {



            chartnew14 = bb.generate({

                bindto: "#chartnew14",

                data: {
                    columns: [
                        ['Российский рубль', 4.78,
                            4.76,
                            3.61,
                            5.11,
                            5.59,


                        ]




                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x);

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
                            2017,



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




            chartnew15 = bb.generate({

                bindto: "#chartnew15",

                data: {
                    columns: [
                        ['Российский рубль',

                            5.53,
                            5.47,
                            5.45,
                            5.49,
                            5.54,
                            5.50,
                            5.46,
                            5.58,
                            5.88,
                            5.84,
                            5.64,
                            5.69,




                        ]


                    ],

                    type: 'line',


                    labels: {
                        format: function (x, id) {



                            return d3.format(",.2f")(x);

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

                            "Январь",
                            "Февраль",
                            "Март",
                            "Апрель",
                            "Май",
                            "Июнь",
                            "Июль",
                            "Август",
                            "Сентябрь",
                            "Октябрь",
                            "Ноябрь",
                            "Декабрь",



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




        }






    };








    $('.drawer').on('drawer.closed', function(){


        chartDohod.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartDohod.resize();

    });


});

