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
                        314333.413,
                        563687.6,
                        168868.712,
                        608504.542,
                        240656.712,
                        234143.596,
                        197111.805,
                        256838.161,
                        156877.014,
                        107394.648,
                        179788.408,
                        82193.033,
                        121468.52,
                        72134.887,
                        112378.263,
                        64487.384

                    ]

                ],

                types:{
                    data1:"bar"
                },
                order: "desc",
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',d')(x)

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
            data: {
                columns: [
                    [
                        "data1",
                        253871,
                        243224,
                        385982,
                        575172,
                        563688

                    ],
                    [
                        "data2",
                        320000,
                        370000,
                        590000,
                        500000,
                        390000
                        /*84.6,
                        89.6,
                        153.9,
                        142.2,
                        93.2*/
                    ]

                ],
                names:{
                    "data1":"Объем строительных работ (млн. тенге)\n",
                    "data2":"ИФО (%)\n"
                },
                type: "bar",
                types: {
                    data2: "line"
                },
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',d')(x)

                        },
                        data2: function (x) {

                            if(x===320000){

                                return d3.format('.1f')(x=84.6)+"%"

                            }
                            if(x===370000){

                                return d3.format('.1f')(x=89.6)+"%"

                            }
                            if(x===590000){

                                return d3.format('.1f')(x=153.9)+"%"

                            }
                            if(x===500000){

                                return d3.format('.1f')(x=142.2)+"%"

                            }
                            if(x===390000){

                                return d3.format('.1f')(x=93.2)+"%"

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
                    categories:
                        [
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017"
                        ]

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
            bindto: "#chart2"
        });


        var ch3 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        328873
                    ],
                    [
                        "data2",
                        326188623

                    ],
                    [
                        "data3",
                        237170049
                    ]

                ],
                names: {
                    "data1": "Государственная",
                    "data2": "Иностранная",
                    "data3": "Частная"
                },
                type: "donut"
            },
            donut: {
                title: "563 688 \n" +
                " млн. тенге\n",
                label: {

                    data1: function (val) {
                        console.log(val)
                    }
                }
            },

            "axis": {
                "rotated": false,
                x: {

                    show: true
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
            bindto: "#chart3"
        });


        var ch4 = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        7,
                        15663,
                        2663,
                        11014,
                        44324,
                        4457,
                        196901,
                        103131,
                        20368,
                        163263,
                        225,
                        2274,
                        214,
                        7282,
                        933,
                        2407,
                        49

                    ],
                    [
                        "data2",
                        0,
                        23224,
                        4381,
                        25259,
                        92938,
                        8957,
                        142012,
                        110292,
                        32594,
                        113553,
                        0,
                        193,
                        78,
                        521,
                        0,
                        9685,
                        2

                    ]
                ],
                names: {
                    data1: "2016",
                    data2: "2017"

                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(",d"),
                        "data2": d3.format(",d")
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
                    categories: [

                        "Сельскохозяйственные здания",
                        "Прочие нежилые здания",
                        "Сооружения для спорта и мест отдыха",
                        "Сооружения для горнодобывающей и обрабатывающей промышленности",
                        "Автомагистрали, улицы, дороги, железнодорожные пути, взлетно-посадочные полосы на аэродромах",
                        "Железнодорожные пути",
                        "Передаточные устройства",
                        "Прочие сооружения",
                        "Жилые здания",
                        "Промышленные здания",
                        "Здания предприятий торговли",
                        "Здания культурно-развлекательного назначения",
                        "Гостиничные, ресторанные и аналогичные здания",
                        "Здания учебных заведения",
                        "Здания медицинских организаций",
                        "Офисные здания",
                        "Здания транспорта, связи и коммуникаций"

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
                show: true
            },
            "bindto": "#chart4"
        });


        var ch5 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        307037,
                        231758,
                        5059,
                        4585,
                        4296,
                        4192,
                        4070,
                        2691
                    ]
                ],
                type: "bar",
                labels: {
                    format: function (x, id) {


                            return d3.format(",.2f")(x);




                    }
            },
            donut: {
                title: "563 688 млн. тенге",

                }
            },

            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories:
                        [
                            "г. Атырау",
                            "Жылыой",
                            "Махамбет",
                            "Индер",
                            "Исатай",
                            "Кумангазы",
                            "Макат",
                            "Кызылкога"
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
            bindto: "#chart5"
        });


        var ch6 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        86736
                    ],
                    [
                        "data2",
                        106882

                    ],
                    [
                        "data3",
                        370069

                    ]

                ],
                names: {
                    "data1": "Малые",
                    "data2": "Средние",
                    "data3": "Крупные"
                },
                type: "donut"
            },
            donut: {
                title: "563 688 \n" +
                " млн. тенге\n",
                label: {

                    data1: function (val) {
                        console.log(val)
                    }
                }
            },

            "axis": {
                "rotated": false,
                x: {

                    show: true
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
            bindto: "#chart6"
        });


        var ch7 = bb.generate({

            "data": {
                "columns": [
                    [
                        "data1",
                        200090,
                        242026,
                        264678,
                        374111,
                        380049,
                        392207,
                        397463,
                        426357,
                        612322,
                        624145,
                        646059,
                        721149,
                        792297,
                        833022,
                        1902326,
                        2359666
                    ]

                ],

                types:{
                    data1:"bar"
                },
                order: "desc",
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',.2f')(x)

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
                        "СЕВЕРО-КАЗАХСТАНСКАЯ",
                        "ПАВЛОДАРСКАЯ",
                        "КОСТАНАЙСКАЯ",
                        "КАРАГАНДИНСКАЯ",
                        "ВОСТОЧНО-КАЗАХСТАНСКАЯ",
                        "ЗАПАДНО-КАЗАХСТАНСКАЯ",
                        "ЖАМБЫЛСКАЯ",
                        "АКМОЛИНСКАЯ",
                        "КЫЗЫЛОРДИНСКАЯ",
                        "АТЫРАУСКАЯ",
                        "АЛМАТИНСКАЯ",
                        "ЮЖНО-КАЗАХСТАНСКАЯ",
                        "АКТЮБИНСКАЯ",
                        "МАНГИСТАУСКАЯ",
                        "Г.АЛМАТЫ",
                        "Г.АСТАНА"
                    ]

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
            data: {
                columns: [
                    [
                        "data1",
                        26614,
                        27678,
                        26142,
                        28696,
                        35270

                    ],
                    [
                        "data2",
                        40000,
                        39000,
                        32000,
                        37000,
                        47000

                    ]

                ],
                names:{
                    "data1":"Инвестиции в жилищное строительство (млн. тенге)",
                    "data2":"ИФО (%)"
                },
                type: "bar",
                types: {
                    data2: "line"
                },
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',d')(x)

                        },
                        data2: function (x) {

                            if(x===40000){

                                return d3.format('.1f')(x=100)+"%"

                            }
                            if(x===39000){

                                return d3.format('.1f')(x=99.8)+"%"

                            }
                            if(x===32000){

                                return d3.format('.1f')(x=92.0)+"%"

                            }
                            if(x===37000){

                                return d3.format('.1f')(x=104.9)+"%"

                            }
                            if(x===47000){

                                return d3.format('.1f')(x=117.3)+"%"

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
                    categories:
                        [
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017"
                        ]

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
            bindto: "#chart8"
        });


        var ch9 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        515.9,
                        522.3,
                        550.0,
                        558.6,
                        624.1

                    ],
                    [
                        "data2",
                        320,
                        370,
                        560,
                        400,
                        900
                        /*84.6,
                        89.6,
                        153.9,
                        142.2,
                        93.2*/
                    ]

                ],
                names:{
                    "data1":"Площадь введенного жилья (тыс. кв. м.)",
                    "data2":"ИФО введенного жилья (%)"
                },
                type: "bar",
                types: {
                    data2: "line"
                },
                labels: {
                    ratio: 0.5,
                    format: {
                        data1: function (x) {

                            return d3.format(',.2f')(x)

                        },
                        data2: function (x) {

                            if(x===320){

                                return d3.format('.1f')(x=100.7)+"%"

                            }
                            if(x===370){

                                return d3.format('.1f')(x=101.2)+"%"

                            }
                            if(x===560){

                                return d3.format('.1f')(x=105.3)+"%"

                            }
                            if(x===400){

                                return d3.format('.1f')(x=101.6)+"%"

                            }
                            if(x===900){

                                return d3.format('.1f')(x=111.7)+"%"

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
                    categories:
                        [
                            "2013",
                            "2014",
                            "2015",
                            "2016",
                            "2017"
                        ]

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
            bindto: "#chart9"
        });


        var ch10 = bb.generate({
            data: {
                columns: [
                    ["data1", 22557.0],
                    ["data2", 39.9],
                    ["data3", 4766.795],
                    ["data4", 4801,8],
                    ["data5", 2293,2]
                ],
                names:{
                    "data1": "Собственные средства",
                    "data2": "Кредиты банков",
                    "data3": "Другие заемные средства",
                    "data4": "Республиканский бюджет",
                    "data5": "Местный бюджет"
                },
                type: "pie"
            },


            bindto: "#chart10"
        });



        var ch11 = bb.generate({
            data: {
                columns: [
                    ["data1", 2293],
                    ["data2", 4801]
                ],
                names:{
                    "data1": "Собственные средства",
                    "data2": "Кредиты банков"
                },
                type: "pie",
                label: {
                    format: {
                        data1: function (x) {
                            console.log(x);
                            if (x === 32.3) {
                                return d3.format('.1f')(x = 13.9) + "%"
                            }
                        },
                        data2: function (x) {

                            if (x === 4801) {
                                return d3.format('.1f')(x = 6.7) + "%"
                                }
                            }

                        }
                    }


            },


            bindto: "#chart11"
        });


        var ch12 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        59457,
                        62141,
                        64190,
                        69438,
                        81708,
                        93715,
                        121573,
                        421923



                    ]

                ],
                names:{
                    "data1":"2016",
                    "data2":"2017"
                },
                type: "bar",
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',d')(x)

                        },
                        data2: function (x) {

                            return d3.format(',d')(x)

                        }
                    }
                }
            },
            "axis": {
                "rotated": true,
                x: {

                    show: true,
                    type: 'category',
                    categories:
                        [
                            "Курмангазы",
                            "Кызылкога",
                            "Макат",
                            "Индер",
                            "Исатай",
                            "Махамбет",
                            "Жылыой",
                            "г. Атырау"

                        ]
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
            bindto: "#chart12"
        });


        var ch13 = bb.generate({
            data: {
                columns: [
                    [
                        "data1",
                        26614,
                        27678,
                        26142,
                        28696,
                        35270

                    ],
                    [
                        "data2",
                        40000,
                        39000,
                        32000,
                        37000,
                        47000

                    ]

                ],
                names:{
                    "data1":"Инвестиции в жилищное строительство (млн. тенге)",
                    "data2":"ИФО (%)"
                },
                type: "bar",
                labels: {
                    format: {
                        data1: function (x) {

                            return d3.format(',d')(x)

                        }

                    }
                }
            },
            "axis": {
                "rotated": false,
                x: {

                    show: true,
                    type: 'category',
                    categories:
                        [
                            "индивидуальные",
                            "многоквартирные",
                            "общежития",
                            "специализированные дома (жилые здания для социальных групп) и другие жилые здания "
                        ]

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
            bindto: "#chart13"
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
        ch11.resize();
        ch12.resize();
        ch13.resize();


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

    });



    });

    $timeout(function () {


        ch1.resize();
        ch5.resize();
        ch7.resize();
        ch12.resize();



    }, 750);
});


