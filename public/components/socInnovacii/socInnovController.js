/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocInnovCtrl', function ($scope, $timeout, $mdDialog) {


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
                    ['Объем произведенной инновационной продукции за 2016 год (млн. тенге)', 506.4,
                        3407.1,
                        6295.2,
                        7419.4,
                        9520.0,
                        11312.8,
                        12630.0,
                        16660.2,
                        17186.3,
                        21036.2,
                        31327.2,
                        34104.1,
                        45095.9,
                        54299.4,
                        54416.1,
                        120559.3,

                    ],

                ],

                type: 'bar',


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
                    show: false
                }
            },

            axis: {

                rotated: true,

                x: {
                    type: 'category',
                    categories: [

                        "МАНГИСТАУСКАЯ",
                        "ЗАПАДНО-КАЗАХСТАНСКАЯ",
                        "КЫЗЫЛОРДИНСКАЯ",
                        "АТЫРАУСКАЯ",
                        "ПАВЛОДАРСКАЯ",
                        "СЕВЕРО-КАЗАХСТАНСКАЯ",
                        "АЛМАТИНСКАЯ",
                        "АКТЮБИНСКАЯ",
                        "Г.АЛМАТЫ",
                        "АКМОЛИНСКАЯ",
                        "КАРАГАНДИНСКАЯ",
                        "ЖАМБЫЛСКАЯ",
                        "КОСТАНАЙСКАЯ",
                        "ВОСТОЧНО-КАЗАХСТАНСКАЯ",
                        "ЮЖНО-КАЗАХСТАНСКАЯ",
                        "Г.АСТАНА"



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




        chartnew2 = bb.generate({

            bindto: "#chartnew2",

            data: {
                columns: [
                    ['Объем произведенной инновационной продукции (млн. тенге)', 38078,
                        18655,
                        7506,
                        7419,


                    ],

                    ['Объем реализованной инновационной продукции (млн. тенге)', 37914,
                        17956,
                        7684,
                        7378,


                    ],

                ],

                type: 'bar',


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
                        2016



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




        // d3.select('.bb-target-Объем-произведенной-инновационной-продукции--млн--тенге-').attr("transform", "translate(50, 0)");
        d3.select('.bb-target-Объем-реализованной-инновационной-продукции--млн--тенге-').attr("transform", "translate(5, 0)");
        d3.select('.bb-texts-Объем-реализованной-инновационной-продукции--млн--тенге-').attr("transform", "translate(20, 0)");




    }, 250);


    $timeout(function () {


        $("#clk2010vrp").click();


    }, 750);








    $scope.tabClk = function (id) {

        if(id === 2) {

            chartnew3 = bb.generate({

                bindto: "#chartnew4",

                data: {
                    columns: [
                        ['Количество предприятий', 798,
                            977,
                            1276,
                            1193,


                        ],

                        ['Кол-во предприятий, имеющие инновации', 41,
                            79,
                            102,
                            101


                        ],

                        ['Уровень инновационной активности', 5.1,
                        8.1,
                        8.0,
                        8.5,



                        ],

                    ],

                    type: 'bar',

                    types: {
                        'Уровень инновационной активности': "line"


                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Уровень инновационной активности') {

                                return d3.format(",.2f")(x) + "%";

                            } else {

                                return d3.format(",.2f")(x);

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




            chartnew4 = bb.generate({

                bindto: "#chartnew5",

                data: {
                    columns: [
                        ['Уровень инновационной активности за 2016 год',
                            3.6,
                        4.1,
                        6.5,
                        6.6,
                        7.0,
                        7.6,
                        7.8,
                        8.5,
                        9.3,
                        10.6,
                        10.8,
                        11.2,
                        11.2,
                        11.3,
                        13.6,
                        14.9,

                        ],



                    ],

                    type: 'bar',


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
                        show: false
                    }
                },

                axis: {

                    rotated: true,

                    x: {
                        type: 'category',
                        categories: [

                            "ЗАПАДНО-КАЗАХСТАНСКАЯ",
                            "МАНГИСТАУСКАЯ",
                            "ПАВЛОДАРСКАЯ",
                            "ЮЖНО-КАЗАХСТАНСКАЯ",
                            "АКМОЛИНСКАЯ",
                            "Г.АЛМАТЫ",
                            "АЛМАТИНСКАЯ",
                            "АТЫРАУСКАЯ",
                            "АКТЮБИНСКАЯ",
                            "КАРАГАНДИНСКАЯ",
                            "ЖАМБЫЛСКАЯ",
                            "КЫЗЫЛОРДИНСКАЯ",
                            "КОСТАНАЙСКАЯ",
                            "СЕВЕРО-КАЗАХСТАНСКАЯ",
                            "Г.АСТАНА",
                            "ВОСТОЧНО-КАЗАХСТАНСКАЯ",




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


            chartnew6 = bb.generate({

                bindto: "#chartnew6",

                data: {
                    columns: [
                        ['Общие затраты (млн. тенге)',   25895,7,
                            23686,2,
                            334944,8,
                            491333,4,



                        ],



                    ],

                    type: 'bar',


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
                data: {
                    columns: [

                        ["Собственные средства предприятий", 145351],
                        ["Займы и кредиты", 345193],
                        ["Местный бюджет", 705],
                        ["Республиканский бюджет", 85],


                    ],
                    type: "donut"

                },
                donut: {
                    title: "2036,85 \n" +
                    " млн. тенге\n"
                },
                tooltip: {
                    format: {
                        value: function (x, id) {


                            return d3.format(",.2f")(x);


                        }

                    }


                },

                bindto: "#chartnew7"
            });



        }









    };








    $('.drawer').on('drawer.closed', function(){


        chartnew1.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartnew1.resize();

    });


});

