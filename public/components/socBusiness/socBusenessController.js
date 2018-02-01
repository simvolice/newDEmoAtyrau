/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocBusenessCtrl', function ($scope, $timeout, $mdDialog) {


    var chart1 = null;
    var chartlist = null;
    var chartRight = null;




    $scope.activeMenu = '2010';
    $scope.activeMenuList = "Объем производства ИП";

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



       chart1 = bb.generate({

            bindto: "#chart1",

            data: {
                columns: [
                    ['data1', 17845,
                        3794,
                        3659,
                        7779,
                        3400,
                        4209,
                        4167,
                        5337,
                        3523,
                        5642,
                        2580,
                        3144,
                        2242,
                        2023,
                        1507,
                        1907,

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




      chartRight = bb.generate({

            bindto: "#chart2",

            data: {
                columns: [
                    ['test33', 112000, 125314, 121386],

                ],
                type: 'bar',
                labels: {
                    format: {

                        test33: d3.format(",.2f")

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
                    ['data1', 57547, 87966,	85532],

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



    }, 350);



    $timeout(function () {
        $("#clk2010bussines").click();
    }, 750);






    $scope.getParam = function (param) {



        $scope.activeMenuList = param;

        if (param === 'Объем производства ИП') {



            chartlist.load({
                columns: [
                    ['data1', 57547, 87966,	85532]
                ]
            });



        } else if (param === 'Объем крестьянских и фермерских хозяйств') {




            chartlist.load({
                columns: [
                    ['data1', 12565, 15123, 15006]
                ]
            });



        }else if (param === 'ЮЛ малого предпринимательства') {




            chartlist.load({
                columns: [
                    ['data1', 2802,	6443, 6805]
                ]
            });



        }else if (param === 'ЮЛ среднего предпринимательства') {




            chartlist.load({
                columns: [
                    ['data1', 2724, 1224, 1866]
                ]
            });



        }






    };



    $scope.selectDate = function (param) {

        $scope.activeMenu = param;

        if (param === '2010') {




            chart1.load({
                columns: [
                    ['data1', 17845,
                        3794,
                        3659,
                        7779,
                        3400,
                        4209,
                        4167,
                        5337,
                        3523,
                        5642,
                        2580,
                        3144,
                        2242,
                        2023,
                        1507,
                        1907,

                    ]
                ]
            });



        } else if (param === "2011") {


            chart1.load({
                columns: [
                    ['data1',

                        18319,
                        4216,
                        4440,
                        9806,
                        4370,
                        4379,
                        3410,
                        4961,
                        3548,
                        2924,
                        3114,
                        3702,
                        2906,
                        1606,
                        1739,
                        2598,



                    ],

                ]
            });




        } else if (param === "2012") {

            chart1.load({
                columns: [
                    ['data1', 20193,
                        4379,
                        4940,
                        11023,
                        4814,
                        4918,
                        3214,
                        5794,
                        3924,
                        2848,
                        3341,
                        3359,
                        2708,
                        2344,
                        2062,
                        2688,

                    ],

                ]
            });





        }else if (param === "2013") {

            chart1.load({
                columns: [
                    ['data1', 21598,
                        3789,
                        5335,
                        14528,
                        5138,
                        5372,
                        3255,
                        6542,
                        3967,
                        3718,
                        3606,
                        3708,
                        3011,
                        2426,
                        2689,
                        2972,


                    ],

                ]
            });





        }else if (param === "2014") {

            chart1.load({
                columns: [
                    ['data1', 37999,
                        6227,
                        6608,
                        36538,
                        5488,
                        7475,
                        6832,
                        8264,
                        5564,
                        11583,
                        5381,
                        5032,
                        3980,
                        2472,
                        3113,
                        3127,


                    ],

                ]
            });





        }else if (param === "2015") {

            chart1.load({
                columns: [
                    ['data1', 36659,
                        8698,
                        7173,
                        33592,
                        6151,
                        8482,
                        6408,
                        8548,
                        6368,
                        10068,
                        6120,
                        4822,
                        4813,
                        2365,
                        3379,
                        3349,


                    ],

                ]
            });





        }else if (param === "2016") {

            chart1.load({
                columns: [
                    ['data1', 51579,
                        9677,
                        8203,
                        42978,
                        8260,
                        10351,
                        8785,
                        9765,
                        6602,
                        12818,
                        5241,
                        5731,
                        5873,
                        2664,
                        3816,
                        3747,


                    ],

                ]
            });





        }



    };

















    $('.drawer').on('drawer.closed', function(){

        chart1.resize();
        chartlist.resize();
        chartRight.resize();



    });


    $('.drawer').on('drawer.opened', function(){



        chart1.resize();
        chartlist.resize();
        chartRight.resize();

    });


});

