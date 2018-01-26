/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('socSportCtrl', function ($scope, $timeout) {

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



        bb.generate({

            bindto: "#chart1",

            data: {
                columns: [
                    ['data1', 959, 974, 984],

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
        bb.generate({

            bindto: "#chart2",

            data: {
                columns: [
                    ['data1', 11, 11, 11],

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
        bb.generate({

            bindto: "#chart3",

            data: {
                columns: [
                    ['data1', 1503  , 1122, 1302],

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
            }

        });



        var chart = bb.generate({
            "data": {
                "columns": [
                    [
                        "data1",
                        25.9,
                        25.2,
                        25

                    ],

                ],
                "types": {
                    "data1": "bar"
                },
                labels: {
                    format: {

                        data1: d3.format(",.1f")

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

       /* bb.generate({

            bindto: "#chart4",

            data: {
                columns: [
                    ['data1', 25.9, 25.2, 25],

                ],
                type: 'bar',
                axis: {
                    'rotated': true
                },
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
                    show: false
                },
                y: {
                    type: 'category',
                    categories: ["2014", "2015", "2016"]


                }
            },

            tooltip: {
                show: false
            },
            legend: {
                show: false
            },

        });*/



    }, 50);











    $('.drawer').on('drawer.closed', function(){


        chartDohod.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartDohod.resize();

    });


});

