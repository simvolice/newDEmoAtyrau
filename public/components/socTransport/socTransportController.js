/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('SocTransportCtrl', function ($scope, $timeout, $mdDialog) {







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



    var tab1Chart = null;
    var tab2Chart = null;
    var tab3Chart = null;
    var tab4Chart = null;

    var tab6Chart = null;
    var tab7Chart = null;
    var tab8Chart = null;
    var tab9Chart = null;
    var tab10Chart = null;



    $timeout(function () {




       tab1Chart = bb.generate({

            bindto: "#chart1",

            data: {
                columns: [
                    ['Местный бюджет', 10855, 5479, 10460, 5794, 11227, 14494, 12122, 29450],
                    ['Республиканский бюджет', 2159, 6084, 5426, 3648, 7072, 1750, 1500, 4090],
                    ['Другие источники', 0,0,0, 6295, 3363, 0,0,0],
                    ['Всего', 13014, 11564, 15887, 15737, 21661, 16244, 13622, 33539],

                ],
                type: 'bar',

                groups: [
                    [
                        'Местный бюджет',
                        'Республиканский бюджет',
                        'Другие источники',
                        'Всего'
                    ]
                ],
                labels: {
                    format: function (x) {
                        return d3.format(",.2d")(x);
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
                    categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
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

        });








    }, 250);






    $scope.tabClk = function (id) {



        if (id === 2) {


            tab2Chart = bb.generate({
                data: {
                    columns: [
                        ["Республиканского значения", 990],
                        ["Областного значения", 973],
                        ["Районного значения", 1088.6]
                    ],
                    type: "donut"
                },
                donut: {
                    title: "3 051,6 км",
                    label: {
                        format: function (x) {
                            return d3.format(",.2d")(x) + " км";
                        }
                    }
                },
                legend: {
                    show: true
                },
                bindto: "#chart2"
            });


        } else if (id === 3) {


            tab3Chart = bb.generate({

                bindto: "#chart3",

                data: {
                    columns: [
                        ['Протяженность в хорошем и удовлет. состоянии', 875, 967, 1011, 1053],
                        ['Отремонтированные дороги', 146, 84.2, 47.3, 244.3],
                        ['Требующие ремонта', 1187, 1095, 1051, 1008],
                        ['Общая протяженность', 2062, 2062, 2062, 2062],

                    ],
                    type: 'bar',

                    groups: [
                        [
                            'Протяженность в хорошем и удовлет. состоянии',
                            'Отремонтированные дороги'
                        ]
                    ],

                    labels: {
                        format: function (x) {
                            return d3.format(",.2d")(x);
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
                        categories: [2014, 2015, 2016, 2017]
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


            tab4Chart = bb.generate({

                bindto: "#chart4",

                data: {
                    columns: [
                        ['Выделенно средств, млн. тенге', 13014, 11564, 15887, 15737, 21661, 16244, 13622, 33539],
                        ['Отремонтировано дорог, км', 180, 152, 156, 141, 202, 139, 104, 244],
                        ['Доля дорог в хорошем и удовлет. состоянии', 24, 30, 32, 37, 42, 47, 49, 51],

                    ],
                    axes: {
                        'Отремонтировано дорог, км': "y2",
                        'Доля дорог в хорошем и удовлет. состоянии': "y"
                    },
                    type: 'bar',

                    types: {

                        'Отремонтировано дорог, км': "line",
                        'Доля дорог в хорошем и удовлет. состоянии': "line",

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === "Доля дорог в хорошем и удовлет. состоянии") {

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
                        categories: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
                    },
                    y: {
                        padding: {
                            top: 200,
                            bottom: 400
                        }
                    },
                    y2: {
                        padding: {
                            top: 100,
                            bottom: 200
                        },
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


        } else if (id === 5) {


            function getColor(d) {


                if (d === "Подготовлены проектно-сметные документации и ведутся подготовительные работы") {

                    return "red";


                } else {

                    return "green";
                }
            }

            var accessToken = 'sk.eyJ1IjoibXVsbGFudXIiLCJhIjoiY2o5NjFjMDZmMW8waDMybXd1OW5vN2VpeiJ9.WY-_nrUvUgXbYET6wpyHEg';
            // Add tiles from Mapbox Style API (https://www.mapbox.com/developers/api/styles/)
            // Tiles are 512x512 pixels and are offset by 1 zoom level




            var mapboxTileLayerDark = L.tileLayer(
                'https://api.mapbox.com/styles/v1/mullanur/cjd4gjzt358hn2ss0ql7myq2v/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXVsbGFudXIiLCJhIjoiY2o5NjFiZjQ2MXR3YTM1cWJhazg3cWRibyJ9.NwJfO3sFsVFGVNoqU7V-fg', {

                    tileSize: 512,
                    zoomOffset: -1,
                    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="http://efflife.kz">EFFLIFE.KZ</a>'
                });



            var mapboxTileLayer = L.tileLayer(
                'https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=' + accessToken, {

                    tileSize: 512,
                    zoomOffset: -1,
                    attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> © <a href="#">AgileSolution</a>'
                });

            var legend = L.control({position: 'bottomright'});

            legend.onAdd = function (map) {

                var div = L.DomUtil.create('div', 'info legend'),
                    grades = ["Подготовлены проектно-сметные документации и ведутся подготовительные работы", "Дорожно-строительные работы завершены и сдано в эксплуатацию"],
                    labels = [];

                // loop through our density intervals and generate a label with a colored square for each interval
                for (var i = 0; i < grades.length; i++) {
                    div.innerHTML +=
                        '<i style="background:' + getColor(grades[i]) + '"></i> ' +
                        grades[i] + '<br>';
                }

                return div;
            };


            var map = L.map('map', {
                center: [47.158615, 50.984952],
                zoom: 7,
                layers: [mapboxTileLayerDark]
            });

            legend.addTo(map);



            d3.json("outOnlyRoad.geojson", function (collection) {


                let marker1 = L.marker([46.54847214853457, 48.752517700195305]).addTo(map);


                let marker2 = L.marker([47.14116119721898, 51.893577575683594]).addTo(map);

                marker1.bindPopup("<b>Атырау - Астрахань</b><br>92 003,6 млн тг<br>277 км").openPopup();
                marker2.bindPopup("<b>Атырау - Астрахань</b><br>92 003,6 млн тг<br>277 км").openPopup();


                let featuresdata = collection.features;
                let latlngs = [];

                for (let coordPoint of featuresdata) {
                    latlngs.push(coordPoint.geometry.coordinates.reverse());
                }


                let polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);


            });


            d3.json("makat.geojson", function (collection) {


                let marker1 = L.marker([47.52461999690651, 52.97813415527343]).addTo(map);


                let marker2 = L.marker([47.643880037404706, 53.338279724121094]).addTo(map);

                marker1.bindPopup("<b>Макат - Доссор</b><br>3 879,9 млн тг<br>17 км").openPopup();
                marker2.bindPopup("<b>Макат - Доссор</b><br>3 879,9 млн тг<br>17 км").openPopup();


                let featuresdata = collection.features;
                let latlngs = [];

                for (let coordPoint of featuresdata) {
                    latlngs.push(coordPoint.geometry.coordinates.reverse());
                }


                let polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);


            });


            d3.json("roaderror.geojson", function (collection) {


                let featuresdata = collection.features;
                let latlngs = [];

                for (let coordPoint of featuresdata) {
                    latlngs.push(coordPoint.geometry.coordinates.reverse());
                }


                let polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);


            });

            d3.json("sagiz.geojson", function (collection) {


                let marker3 = L.marker([47.732858147066494, 53.644866943359375
                ]).addTo(map);


                let marker4 = L.marker([48.2347355834968, 54.853363037109375
                ]).addTo(map);

                marker3.bindPopup("<b>Макат – Сагиз</b><br>38 208,7 млн тг<br>138 км").openPopup();
                marker4.bindPopup("<b>Макат – Сагиз</b><br>38 208,7 млн тг<br>138 км").openPopup();


                let featuresdata = collection.features;
                let latlngs = [];

                for (let coordPoint of featuresdata) {
                    latlngs.push(coordPoint.geometry.coordinates.reverse());
                }


                let polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);


            });


        } else if (id === 6) {


            tab6Chart = bb.generate({

                bindto: "#chart6",

                data: {
                    columns: [
                        ['Перевозка грузов транспортом, млн. тонн', 141, 151, 151, 144, 145, 154],
                        ['Темп роста перевозок грузов', 118, 108, 100, 96, 101, 106],

                    ],

                    type: 'bar',

                    types: {

                        'Темп роста перевозок грузов': "line"

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Темп роста перевозок грузов') {

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
                        categories: [2012, 2013, 2014, 2015, 2016, 2017]
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


        } else if (id === 7) {


            tab7Chart = bb.generate({

                bindto: "#chart7",

                data: {
                    columns: [
                        ['Перевозка пассажиров, млн. человек', 155, 168, 172, 172, 181, 181],
                        ['Темп роста перевозок пассажиров', 133, 108, 103, 100, 105, 100],

                    ],

                    type: 'bar',

                    types: {

                        'Темп роста перевозок пассажиров': "line"

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Темп роста перевозок пассажиров') {

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
                        categories: [2012, 2013, 2014, 2015, 2016, 2017]
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


            tab8Chart = bb.generate({

                bindto: "#chart8",

                data: {
                    columns: [
                        ['Грузооборот, млн. ткм', 46041, 51554, 53720, 57159, 54199, 54946],
                        ['Темп роста грузооборота', 116, 112, 104, 106, 95, 101],

                    ],

                    type: 'bar',

                    types: {

                        'Темп роста грузооборота': "line"

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Темп роста грузооборота') {

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
                        categories: [2012, 2013, 2014, 2015, 2016, 2017]
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


            tab9Chart = bb.generate({

                bindto: "#chart9",

                data: {
                    columns: [
                        ['Пассажирооборот, млн. пкм', 1140, 1192, 1158, 1229, 1393, 1403],
                        ['Темп роста пассажирооборота', 154, 105, 97, 106, 113, 101],

                    ],

                    type: 'bar',

                    types: {

                        'Темп роста пассажирооборота': "line"

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Темп роста пассажирооборота') {

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
                        categories: [2012, 2013, 2014, 2015, 2016, 2017]
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


        }else if (id === 10) {


            tab10Chart = bb.generate({

                bindto: "#chart10",

                data: {
                    columns: [
                        ['Доходы от услуг связи', 11317.70, 12898.6, 12107.1, 14044.24],
                        ['Темп роста', 112, 113, 101, 106],

                    ],

                    type: 'bar',

                    types: {

                        'Темп роста': "line"

                    },


                    labels: {
                        format: function (x, id) {


                            if (id === 'Темп роста') {

                                return d3.format(",.2d")(x) + "%";

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
                        categories: [2014, 2015, 2016, 2017]
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


        tab1Chart.resize();


        if (tab2Chart !== null){

            tab2Chart.resize();
        } else if (tab3Chart !== null) {

            tab3Chart.resize();

        }
        else if (tab4Chart !== null) {

            tab4Chart.resize();

        }else if (tab6Chart !== null) {

            tab6Chart.resize();

        }else if (tab7Chart !== null) {

            tab7Chart.resize();

        }else if (tab8Chart !== null) {

            tab8Chart.resize();

        }else if (tab9Chart !== null) {

            tab9Chart.resize();

        }else if (tab10Chart !== null) {

            tab10Chart.resize();

        }




    });


    $('.drawer').on('drawer.opened', function(){



        tab1Chart.resize();


        if (tab2Chart !== null){

            tab2Chart.resize();
        } else if (tab3Chart !== null) {

            tab3Chart.resize();

        }
        else if (tab4Chart !== null) {

            tab4Chart.resize();

        }else if (tab6Chart !== null) {

            tab6Chart.resize();

        }else if (tab7Chart !== null) {

            tab7Chart.resize();

        }else if (tab8Chart !== null) {

            tab8Chart.resize();

        }else if (tab9Chart !== null) {

            tab9Chart.resize();

        }else if (tab10Chart !== null) {

            tab10Chart.resize();

        }


    });




});

