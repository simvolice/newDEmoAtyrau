/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('BudgetIspolCtrl', function ($scope, $timeout) {


    $scope.menuItems = ['2014', '2015', '2016', '2017', "2018", "2019"];




    $scope.activeMenu = $scope.menuItems[4];



    $scope.label1 = "57 845,6";
    $scope.label2 = "57 845,6";
    $scope.proficit = "ДЕФИЦИТ / ПРОФИЦИТ\n" +
        "0,0 Тыс. Тенге";

    var chartFirst;



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

      chartFirst = bb.generate({

           bindto: "#chartbudgetispol",

            data: {
                columns: [
                    ['Расходы', 110000],
                    ['Доходы', 105000],
                    ['Профицит', 5000]

                ],

                type: 'bar',
                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]

            },


          color: {
            pattern: [
                "#1f77b4",

                "#ff7f0e",

                "#d62728",

            ]
        },


          legend: {
              show: false
          },


            bar: {
                width: {
                    ratio: 0.5
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
                    show: false
                },
                y: {
                    show: false
                }
            },


           tooltip: {
               show: false
           }


        });








      d3.select('.bb-target-Доходы').attr("transform", "translate(50, 0)");
      d3.select('.bb-target-Профицит').attr("transform", "translate(50, 0)");


    }, 50);




    $scope.selectDate = function (date) {



        $scope.activeMenu = date;




        if (date === '2014') {

            $scope.label1 = "154 634,3";
            $scope.label2 = "165 635,6";
            $scope.proficit = "ПРОФИЦИТ 11 001,3 Тыс. ТЕНГЕ";


            chartFirst.load({
                columns: [
                    ['Расходы', 120000],
                    ['Доходы', 110000],
                    ['Профицит', 20000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]
            });




        } else if (date === '2015'){

            $scope.label1 = "154 225,2";
            $scope.label2 = "151 077,3";
            $scope.proficit = "ДЕФИЦИТ \n" +
                "-3 147,8 \n" +
                "МЛН. ТЕНГЕ";



            chartFirst.load({
                columns: [
                    ['Расходы', 130000],
                    ['Доходы', 110000],
                    ['Профицит', 5000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]
            });




        } else if (date === '2016'){

            $scope.label1 = "229 564,7";
            $scope.label2 = "260 134,3";
            $scope.proficit = "ПРОФИЦИТ 30 569,6 Тыс. ТЕНГЕ";


            chartFirst.load({
                columns: [
                    ['Расходы', 110000],
                    ['Доходы', 130000],
                    ['Профицит', 10000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]
            });




        }else if (date === '2017'){

            $scope.label1 = "177 993,2";
            $scope.label2 = "200 195,9";
            $scope.proficit = "ПРОФИЦИТ 22 202,7 Тыс. ТЕНГЕ";


            chartFirst.load({
                columns: [
                    ['Расходы', 100000],
                    ['Доходы', 110000],
                    ['Профицит', 8000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]
            });




        }else if (date === '2018'){

            $scope.label1 = "57 845,6";
            $scope.label2 = "57 845,6";
            $scope.proficit = "ДЕФИЦИТ / ПРОФИЦИТ\n" +
                "0,0 Тыс. Тенге";


            chartFirst.load({
                columns: [
                    ['Расходы', 110000],
                    ['Доходы', 105000],
                    ['Профицит', 5000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]

            });



        }else if (date === '2019'){

            $scope.label1 = "61 717,4";
            $scope.label2 = "61 717,6";
            $scope.proficit = "ДЕФИЦИТ / ПРОФИЦИТ\n" +
                "0,0 Тыс. Тенге";


            chartFirst.load({
                columns: [
                    ['Расходы', 105000],
                    ['Доходы', 110000],
                    ['Профицит', 5000]

                ],


                groups: [
                    [
                        "Доходы",
                        "Профицит"
                    ]
                ]

            });



        }








    };




    $('.drawer').on('drawer.closed', function(){


        chartFirst.resize();


    });


    $('.drawer').on('drawer.opened', function(){



        chartFirst.resize();

    });








});

