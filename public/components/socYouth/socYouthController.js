/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socYouthCtrl', function ($scope, $timeout) {

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
                        157638,
                        157638,
                        154343,
                        151814

                    ],
                    [
                        "data2",
                        555217,
                        567861,
                        581473,
                        594562
                    ]
                ],
                names: {
                    data1: "Численость молодежи области",
                    data2: "Численость населения"
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
                        categories: ["2013","2014","2015", "2016"]

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
                        0.518,
                        0.518,
                        0.456,
                        0.542
                    ],
                    [
                        "data2",
                        0.482,
                        0.482,
                        0.543,
                        0.458                   ]
                ],
                names: {
                    data1: "Сельская молодежь",
                    data2: "Среднее значение Городская молодежь"
                },
                type: "bar",
                labels: {
                    format: {

                        "data1": d3.format(".3p"),
                        "data2": d3.format(".3p")



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
                    categories: ["2013","2014","2015", "2016"]

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
                        80126,
                        80126,
                        78633,
                        74665
                    ],
                    [
                        "data2",
                        77512,
                        77512,
                        75710,
                        74149

                    ]
                ],
                names: {
                    data1: "Мужчина",
                    data2: "Женщина"
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
                        categories: ["2013","2014","2015", "2016"]

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














    $('.drawer').on('drawer.closed', function(){


        ch1.resize();
        ch2.resize();
        ch3.resize();



    });


    $('.drawer').on('drawer.opened', function(){



        ch1.resize();
        ch2.resize();
        ch3.resize();


    });



    });
});


