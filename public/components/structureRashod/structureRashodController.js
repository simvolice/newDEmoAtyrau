/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('StructuRashodCtrl', function ($scope, $timeout, $filter) {





    $scope.menuItems = ['2014', '2015', '2016', '2017', "2018", "2019", "Все"];




    $scope.activeMenu = $scope.menuItems[4];



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






        var data = null;






    function classes(root) {
        var classes = [];

        function recurse(name, node) {
            if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
            else classes.push({packageName: name, className: node.name, value: node.size});
        }

        recurse(null, root);




        return {children: classes};
    }







    data = {
        "name": "flare",
        "children": [
            {
                "name": "analytics",
                "children": [
                    {
                        "name": "cluster",
                        "children": [
                            {"name": "Прочие", "size": 6594749.33}
                        ]
                    },
                    {
                        "name": "graph",
                        "children": [
                            {"name": "Транспорт и коммуникации", "size": 9167912.00}
                        ]
                    },
                    {
                        "name": "optimization",
                        "children": [
                            {"name": "Оплата по долгам", "size": 4694724.00}
                        ]
                    },
                    {
                        "name": "optimization2",
                        "children": [
                            {"name": "Государственные услуги общего характера", "size": 14919184.00}
                        ]
                    },
                    {
                        "name": "optimization3",
                        "children": [
                            {"name": "Жилищно-коммунальное хозяйство", "size": 10047636.00}
                        ]
                    },
                    {
                        "name": "optimization4",
                        "children": [
                            {"name": "Здравоохранение", "size": 454226.00}
                        ]
                    },

                    {
                        "name": "optimization5",
                        "children": [
                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 9830389.00}
                        ]
                    },



                    {
                        "name": "optimization6",
                        "children": [
                            {"name": "Трансферты", "size": 98623848.00}
                        ]
                    },


                    {
                        "name": "optimization7",
                        "children": [
                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 352626.00}
                        ]
                    },


                    {
                        "name": "optimization8",
                        "children": [
                            {"name": "Образование", "size": 36632884.20}
                        ]
                    },


                    {
                        "name": "optimization9",
                        "children": [
                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4579806.00}
                        ]
                    },


                    {
                        "name": "optimization10",
                        "children": [
                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2332287.00}
                        ]
                    },


                    {
                        "name": "optimization11",
                        "children": [
                            {"name": "Социальная помощь и социальное обеспечение", "size": 4161698.17}
                        ]
                    },



                    {
                        "name": "optimization12",
                        "children": [
                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 698412.00}
                        ]
                    },


                    {
                        "name": "optimization13",
                        "children": [
                            {"name": "Оборона", "size": 159777.00}
                        ]
                    },

                    {
                        "name": "optimization13",
                        "children": [
                            {"name": "Обслуживание долга", "size": 40197.10}
                        ]
                    },


                    {
                        "name": "optimization14",
                        "children": [
                            {"name": "Всего", "size": 203290355.81}
                        ]
                    },



                ]
            }

        ]
    };



    $scope.dataTable = classes(data).children;



    function newBubbleChart(data, idEl) {
        var diameter = 460,
            format = d3.format(",.2f"),
            color = d3.scaleOrdinal(d3.schemeCategory10);

        var bubble = d3.pack()
            .size([diameter, diameter])
            .padding(1.5);

        var svg = d3.select(idEl).append("svg")
            .attr("width", diameter)
            .attr("height", diameter)
            .attr("class", "bubble");



        var root = d3.hierarchy(classes(data))
            .sum(function(d) { return d.value; })
            .sort(function(a, b) { return b.value - a.value; });

        bubble(root);
        var node = svg.selectAll(".node")
            .data(root.children)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

        node.append("title")
            .text(function(d) { return d.data.className + ": " + format(d.value); });

        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) {
                return color(d.data.packageName);
            });

        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.className.substring(0, d.r / 3); });





        d3.select(self.frameElement).style("height", diameter + "px");


    }



   $timeout(function () {

        newBubbleChart(data, "#chartstructurerashod");


   }, 100);










    $scope.selectDate = function (date) {


        $scope.activeMenu = date;



        if (date === '2014'){

            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 5599522.10}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 16391690.00}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 41210.00}
                                ]
                            },
                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 2196778.00}
                                ]
                            },
                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 19389548.70}
                                ]
                            },
                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 18154700.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 7098030.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 59900409.00}
                                ]
                            },


                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 749080.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 407037.00}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4336195.00}
                                ]
                            },


                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2177866.90}
                                ]
                            },


                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 1868806.00}
                                ]
                            },



                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 1149008.00}
                                ]
                            },


                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 407037.00}
                                ]
                            },


                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 154256724.70}
                                ]
                            }



                        ]
                    }

                ]
            };


            $scope.dataTable = classes(data).children;






            newBubbleChart(data, "#chartstructurerashod");




        } else if (date === '2015') {







            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [




                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 2408588.00}
                                ]
                            },


                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 4913604.00}
                                ]
                            },


                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 18481611.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 8466322.00}
                                ]
                            },



                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 345022.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 11013952.00}
                                ]
                            },

                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 40754.00}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 5236839.00}
                                ]
                            },
                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 724318.00}
                                ]
                            },






                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 4992168.30}
                                ]
                            },

                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2551616.70}
                                ]
                            },

                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 2024077.00}
                                ]
                            },




                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 420486.00}
                                ]
                            },



                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 13613569.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 68655326.00}
                                ]
                            },










                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 143888253.00}
                                ]
                            }



                        ]
                    }

                ]
            };

            $scope.dataTable = classes(data).children;



            newBubbleChart(data, "#chartstructurerashod");

        } else if (date === '2016') {



            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [




                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 6750488.60}
                                ]
                            },


                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 20952369.00}
                                ]
                            },


                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 21258147.20}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 12338726.70}
                                ]
                            },



                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 494499.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 50590259.80}
                                ]
                            },

                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 69164.00}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 7157398.00}
                                ]
                            },
                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 4250397.90}
                                ]
                            },






                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 3924672.80}
                                ]
                            },

                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 4618270.00}
                                ]
                            },

                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 6535987.00}
                                ]
                            },




                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 497901.00}
                                ]
                            },



                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 16369121.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 74142316.00}
                                ]
                            },










                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 229949718.00}
                                ]
                            }



                        ]
                    }

                ]
            };

            $scope.dataTable = classes(data).children;



            newBubbleChart(data, "#chartstructurerashod");

        } else if (date === '2017') {


            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [




                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 14034856.00}
                                ]
                            },


                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 10378021.00}
                                ]
                            },


                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 1773997.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 9874260.00}
                                ]
                            },



                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 156467.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 39624258.91}
                                ]
                            },


                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 61661.00}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 7250424.00}
                                ]
                            },



                            {
                                "name": "optimization18",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 1064876.00}
                                ]
                            },




                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 346922.00}
                                ]
                            },






                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 6591373.33}
                                ]
                            },

                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2379395.00}
                                ]
                            },

                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 4117684.00}
                                ]
                            },




                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 923881.00}
                                ]
                            },



                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 3034058.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 93617234.00}
                                ]
                            },










                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 195229368.24}
                                ]
                            }



                        ]
                    }

                ]
            };

            $scope.dataTable = classes(data).children;



            newBubbleChart(data, "#chartstructurerashod");



        } else if (date === '2018') {


            $("#chartstructurerashod").empty();
            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 6594749.33}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 9167912.00}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 4694724.00}
                                ]
                            },
                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 14919184.00}
                                ]
                            },
                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 10047636.00}
                                ]
                            },
                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 454226.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 9830389.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 98623848.00}
                                ]
                            },


                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 352626.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 36632884.20}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4579806.00}
                                ]
                            },


                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2332287.00}
                                ]
                            },


                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 4161698.17}
                                ]
                            },



                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 698412.00}
                                ]
                            },


                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 159777.00}
                                ]
                            },

                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 40197.10}
                                ]
                            },


                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 203290355.81}
                                ]
                            },



                        ]
                    }

                ]
            };
            $scope.dataTable = classes(data).children;


            newBubbleChart(data, "#chartstructurerashod");








        } else if (date === '2019') {



            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [




                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 15140197.00}
                                ]
                            },


                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 10178190.00}
                                ]
                            },


                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 471394.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 10020902.00}
                                ]
                            },



                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 160250.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 36594832.20}
                                ]
                            },


                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 17234.40}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4350233.00}
                                ]
                            },



                            {
                                "name": "optimization18",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 2222166.00}
                                ]
                            },




                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 353351.00}
                                ]
                            },






                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 6595171.33}
                                ]
                            },

                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2253628.00}
                                ]
                            },

                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 4187652.01}
                                ]
                            },








                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 10175194.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 105721350.00}
                                ]
                            },










                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 208441744.95}
                                ]
                            }



                        ]
                    }

                ]
            };

            $scope.dataTable = classes(data).children;



            newBubbleChart(data, "#chartstructurerashod");




        }else if (date === 'Все') {


            $("#chartstructurerashod").empty();

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [




                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 55450091.60}
                                ]
                            },


                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 75859368.70}
                                ]
                            },


                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 60594075.20}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 57628629.70}
                                ]
                            },



                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 1723052.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 189253031.12}
                                ]
                            },


                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 270220.50}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 32910895.00}
                                ]
                            },



                            {
                                "name": "optimization18",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 7981766.00}
                                ]
                            },




                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 6776694.90}
                                ]
                            },






                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 34297657.20}
                                ]
                            },

                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 16313063.60}
                                ]
                            },

                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 22895904.18}
                                ]
                            },




                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 3689688.00}
                                ]
                            },



                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 68751544.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 500660483.00}
                                ]
                            },










                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 1135056164.70}
                                ]
                            }



                        ]
                    }

                ]
            };

            $scope.dataTable = classes(data).children;



            newBubbleChart(data, "#chartstructurerashod");



        }
    }





        $scope.tab1 = function () {


            $scope.activeMenu = $scope.menuItems[4];

            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Прочие", "size": 6594749.33}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 9167912.00}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 4694724.00}
                                ]
                            },
                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 14919184.00}
                                ]
                            },
                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 10047636.00}
                                ]
                            },
                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Здравоохранение", "size": 454226.00}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 9830389.00}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Трансферты", "size": 98623848.00}
                                ]
                            },


                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 352626.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Образование", "size": 36632884.20}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4579806.00}
                                ]
                            },


                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2332287.00}
                                ]
                            },


                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 4161698.17}
                                ]
                            },



                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 698412.00}
                                ]
                            },


                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Оборона", "size": 159777.00}
                                ]
                            },

                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 40197.10}
                                ]
                            },


                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 203290355.81}
                                ]
                            },



                        ]
                    }

                ]
            };



            $scope.dataTable = classes(data).children;
            $("#chartstructurerashod").empty();

            newBubbleChart(data, "#chartstructurerashod");




        };




        $scope.tab2 = function () {




            $scope.menuItems2 = ['2014', '2015', '2016', '2017', "2018", "2019", "Все"];




            $scope.activeMenu2 = $scope.menuItems2[4];




            data = {
                "name": "flare",
                "children": [
                    {
                        "name": "analytics",
                        "children": [
                            {
                                "name": "cluster",
                                "children": [
                                    {"name": "Государственные услуги общего характера", "size": 14919184.00}
                                ]
                            },
                            {
                                "name": "graph",
                                "children": [
                                    {"name": "Жилищно-коммунальное хозяйство", "size": 10047636.00}
                                ]
                            },
                            {
                                "name": "optimization",
                                "children": [
                                    {"name": "Здравоохранение", "size": 454226.00}
                                ]
                            },
                            {
                                "name": "optimization2",
                                "children": [
                                    {"name": "Культура, спорт, туризм и информационное пространство", "size": 9830389.00}
                                ]
                            },
                            {
                                "name": "optimization3",
                                "children": [
                                    {"name": "Оборона", "size": 159777.00}
                                ]
                            },
                            {
                                "name": "optimization4",
                                "children": [
                                    {"name": "Образование", "size": 36632884.20}
                                ]
                            },

                            {
                                "name": "optimization5",
                                "children": [
                                    {"name": "Обслуживание долга", "size": 40197.10}
                                ]
                            },



                            {
                                "name": "optimization6",
                                "children": [
                                    {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4579806.00}
                                ]
                            },


                            {
                                "name": "optimization7",
                                "children": [
                                    {"name": "Оплата по долгам", "size": 4694724.00}
                                ]
                            },


                            {
                                "name": "optimization8",
                                "children": [
                                    {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 352626.00}
                                ]
                            },


                            {
                                "name": "optimization9",
                                "children": [
                                    {"name": "Прочие", "size": 6594749.33}
                                ]
                            },


                            {
                                "name": "optimization10",
                                "children": [
                                    {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2332287.00}
                                ]
                            },


                            {
                                "name": "optimization11",
                                "children": [
                                    {"name": "Социальная помощь и социальное обеспечение", "size": 4161698.17}
                                ]
                            },



                            {
                                "name": "optimization12",
                                "children": [
                                    {"name": "Топливно-энергетический комплекс и недропользование", "size": 698412.00}
                                ]
                            },


                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Транспорт и коммуникации", "size": 9167912.00}
                                ]
                            },

                            {
                                "name": "optimization13",
                                "children": [
                                    {"name": "Трансферты", "size": 98623848.00}
                                ]
                            },


                            {
                                "name": "optimization14",
                                "children": [
                                    {"name": "Всего", "size": 203290355.81}
                                ]
                            },



                        ]
                    }

                ]
            };



            $scope.dataTable = classes(data).children;


            $("#chartstructurerashod2").empty();

            newBubbleChart(data, "#chartstructurerashod2");



            $scope.selectDate2 = function (date) {


                $scope.activeMenu2 = date;


                if (date === "2014") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 2196778.00}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 19389548.70}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 18154700.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 7098030.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 407037.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 14796844.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 41210.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4336195.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 749080.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 5599522.10}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2177866.90}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 1868806.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 1149008.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 16391690.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Трансферты", "size": 59900409.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 154256724.70}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");



                } else if (date === "2015") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 2408588.00}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 4913604.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 18481611.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 8466322.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 345022.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 11013952.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 40754.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 5236839.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 724318.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 4992168.30}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2551616.70}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 2024077.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 420486.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 13613569.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Трансферты", "size": 68655326.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 143888253.00}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");



                }else if (date === "2016") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 6750488.60}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 20952369.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 21258147.20}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 12338726.70}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 494499.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 50590259.80}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 69164.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 7157398.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 4250397.90}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 3924672.80}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 4618270.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 6535987.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 497901.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 16369121.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Трансферты", "size": 74142316.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 229949718.00}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");



                }else if (date === "2017") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 14034856.00}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 10378021.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 1773997.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 9874260.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 156467.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 39624258.91}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 61661.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 7250424.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization25",
                                        "children": [
                                            {"name": "Оплата по долгам", "size": 1064876.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 346922.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 6591373.33}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2379395.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 4117684.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 923881.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 3034058.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization135",
                                        "children": [
                                            {"name": "Трансферты", "size": 93617234.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 195229368.24}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");



                } else if (date === "2018") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 14919184.00}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 10047636.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 454226.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 9830389.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 159777.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 36632884.20}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 40197.10}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4579806.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization7",
                                        "children": [
                                            {"name": "Оплата по долгам", "size": 4694724.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 352626.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 6594749.33}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2332287.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 4161698.17}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 698412.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 9167912.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Трансферты", "size": 98623848.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 203290355.81}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");




                } else if (date === "2019") {



                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 15140197.00}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 10178190.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 471394.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 10020902.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 160250.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 36594832.20}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 17234.40}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 4350233.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization25",
                                        "children": [
                                            {"name": "Оплата по долгам", "size": 2222166.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 353351.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 6595171.33}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 2253628.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 4187652.01}
                                        ]
                                    },






                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 10175194.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization135",
                                        "children": [
                                            {"name": "Трансферты", "size": 105721350.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 208441744.95}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");




                }else if (date === "Все") {


                    data = {
                        "name": "flare",
                        "children": [
                            {
                                "name": "analytics",
                                "children": [
                                    {
                                        "name": "cluster",
                                        "children": [
                                            {"name": "Государственные услуги общего характера", "size": 55450091.60}
                                        ]
                                    },
                                    {
                                        "name": "graph",
                                        "children": [
                                            {"name": "Жилищно-коммунальное хозяйство", "size": 75859368.70}
                                        ]
                                    },
                                    {
                                        "name": "optimization",
                                        "children": [
                                            {"name": "Здравоохранение", "size": 60594075.20}
                                        ]
                                    },
                                    {
                                        "name": "optimization2",
                                        "children": [
                                            {"name": "Культура, спорт, туризм и информационное пространство", "size": 57628629.70}
                                        ]
                                    },
                                    {
                                        "name": "optimization3",
                                        "children": [
                                            {"name": "Оборона", "size": 1723052.00}
                                        ]
                                    },
                                    {
                                        "name": "optimization4",
                                        "children": [
                                            {"name": "Образование", "size": 189253031.12}
                                        ]
                                    },

                                    {
                                        "name": "optimization5",
                                        "children": [
                                            {"name": "Обслуживание долга", "size": 270220.50}
                                        ]
                                    },



                                    {
                                        "name": "optimization6",
                                        "children": [
                                            {"name": "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", "size": 32910895.00}
                                        ]
                                    },



                                    {
                                        "name": "optimization25",
                                        "children": [
                                            {"name": "Оплата по долгам", "size": 7981766.00}
                                        ]
                                    },





                                    {
                                        "name": "optimization8",
                                        "children": [
                                            {"name": "Промышленность, архитектурная, градостроительная и строительная деятельность", "size": 6776694.90}
                                        ]
                                    },


                                    {
                                        "name": "optimization9",
                                        "children": [
                                            {"name": "Прочие", "size": 34297657.20}
                                        ]
                                    },


                                    {
                                        "name": "optimization10",
                                        "children": [
                                            {"name": "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", "size": 16313063.60}
                                        ]
                                    },


                                    {
                                        "name": "optimization11",
                                        "children": [
                                            {"name": "Социальная помощь и социальное обеспечение", "size": 22895904.18}
                                        ]
                                    },



                                    {
                                        "name": "optimization12",
                                        "children": [
                                            {"name": "Топливно-энергетический комплекс и недропользование", "size": 3689688.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization13",
                                        "children": [
                                            {"name": "Транспорт и коммуникации", "size": 68751544.00}
                                        ]
                                    },

                                    {
                                        "name": "optimization135",
                                        "children": [
                                            {"name": "Трансферты", "size": 500660483.00}
                                        ]
                                    },


                                    {
                                        "name": "optimization14",
                                        "children": [
                                            {"name": "Всего", "size": 1135056164.70}
                                        ]
                                    },



                                ]
                            }

                        ]
                    };



                    $scope.dataTable = classes(data).children;


                    $("#chartstructurerashod2").empty();

                    newBubbleChart(data, "#chartstructurerashod2");



                }







            }









        }














});

