/**
 * Created by Admin on 29.09.2016.
 */



angular.module('app').controller('StructuRashodCtrl', function ($scope, $timeout) {


    $scope.menuItems = ['2014', '2015', '2016', '2017', "2018", "2019"];




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





        var donut = null;
        var data = null;














    data = [
        {DataName: "Прочие", FullDataLabel: "Прочие", DataVal: "6594749.33", Persent: "3,24%"},

        {DataName: "Транспорт и коммуникации", FullDataLabel: "Транспорт и коммуникации", DataVal: "9167912.00", Persent: "4,51%"},
        {DataName: "Оплата по долгам", FullDataLabel: "Оплата по долгам", DataVal: "4694724.00", Persent: "2,31%"},

        {DataName: "Государственные услуги общего характера", FullDataLabel: "Государственные услуги общего характера", DataVal: "14919184.00", Persent: "7,34%"},
        {DataName: "Жилищно-коммунальное хозяйство", FullDataLabel: "Жилищно-коммунальное хозяйство", DataVal: "10047636.00", Persent: "4,94%"},
        {DataName: "Здравоохранение", FullDataLabel: "Здравоохранение", DataVal: "454226.00", Persent: "0,22%"},
         {DataName: "Культура, спорт, туризм и информационное пространство", FullDataLabel: "Культура, спорт, туризм и информационное пространство", DataVal: "9830389.00", Persent: "4,84%"},

        {DataName: "Трансферты", FullDataLabel: "Трансферты", DataVal: "98623848.00", Persent: "48,51%"},
        {DataName: "Промышленность, архитектурная, градостроительная и строительная деятельность", FullDataLabel: "Промышленность, архитектурная, градостроительная и строительная деятельность", DataVal: "352626.00", Persent: "0,17%"},

        {DataName: "Образование", FullDataLabel: "Образование", DataVal: "36632884.20", Persent: "18,02%"},
        {DataName: "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", FullDataLabel: "Общественный порядок, безопасность, правовая, судебная, уголовно-исполнительная деятельность", DataVal: "4579806.00", Persent: "2,25%"},
        {DataName: "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", FullDataLabel: "Сельское, водное, лесное, рыбное хозяйство, особо охраняемые природные территории, охрана окружающей среды и животного мира, земельные отношения", DataVal: "2332287.00", Persent: "1,15%"},
        {DataName: "Социальная помощь и социальное обеспечение", FullDataLabel: "Социальная помощь и социальное обеспечение", DataVal: "4161698.17", Persent: "2,05%"},
        {DataName: "Топливно-энергетический комплекс и недропользование", FullDataLabel: "Топливно-энергетический комплекс и недропользование", DataVal: "698412.00", Persent: "0,34%"},

    ];






   $timeout(function () {


       var diameter = 460,
           format = d3.format(",d"),
           color = d3.scaleOrdinal(d3.schemeCategory10);

       var bubble = d3.pack()
           .size([diameter, diameter])
           .padding(1.5);

       var svg = d3.select("#chart").append("svg")
           .attr("width", diameter)
           .attr("height", diameter)
           .attr("class", "bubble");

       d3.json("flare.json", function(error, data) {
           if (error) throw error;

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
       });

// Returns a flattened hierarchy containing all leaf nodes under the root.
       function classes(root) {
           var classes = [];

           function recurse(name, node) {
               if (node.children) node.children.forEach(function(child) { recurse(node.name, child); });
               else classes.push({packageName: name, className: node.name, value: node.size});
           }

           recurse(null, root);
           return {children: classes};
       }

       d3.select(self.frameElement).style("height", diameter + "px");



   }, 100);










    $scope.selectDate = function (date) {


        $scope.activeMenu = date;



        if (date === '2014'){

            $("#chartstructurerashod").empty();
            donut = null;
            data = [{DataName: "Трансферты", DataVal: "69016591", Persent: "56,34%"},
                {DataName: "Налоговое поступление", DataVal: "52867580", Persent: "43,16%"},
                {DataName: "Неналоговое поступление", DataVal: "608019", Persent: "0,5%"},

            ];


            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div



        } else if (date === '2015') {


            $("#chartstructurerashod").empty();
            donut = null;

            data = [{DataName: "Трансферты", DataVal: "79242641", Persent: "56,48%"},
                {DataName: "Налоговое поступление", DataVal: "59112695", Persent: "42,13%"},
                {DataName: "Неналоговое поступление", DataVal: "1944570", Persent: "1,39%"},

            ];


            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div







        } else if (date === '2016') {


            $("#chartstructurerashod").empty();
            donut = null;

            data = [

                {DataName: "Поступления от продажи основного капитала", DataVal: "2835512", Persent: "1,27%"},

                {DataName: "Трансферты", DataVal: "48231633", Persent: "21,68%"},

                {DataName: "Налоговое поступление", DataVal: "168354979", Persent: "75,68%"},

                {DataName: "Неналоговое поступление", DataVal: "3021438", Persent: "1,36%"},

            ];


            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div











        } else if (date === '2017') {

            $("#chartstructurerashod").empty();
            donut = null;

            data = [{DataName: "Трансферты", DataVal: "115205004", Persent: "66,07%"},
                {DataName: "Налоговое поступление", DataVal: "56551304", Persent: "32,43%"},
                {DataName: "Неналоговое поступление", DataVal: "2614197", Persent: "1,5%"},

            ];


            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div










        } else if (date === '2018') {


            $("#chartstructurerashod").empty();
            donut = null;


            data = [{DataName: "Налоговое поступление", DataVal: "57546988", Persent: "99,48%"},
                {DataName: "Неналоговое поступление", DataVal: "298612", Persent: "0,52%"}];




            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div













        } else if (date === '2019') {



            $("#chartstructurerashod").empty();
            donut = null;


            data = [{DataName: "Налоговое поступление", DataVal: "61404155", Persent: "99,49%"},
                {DataName: "Неналоговое поступление", DataVal: "313543", Persent: "0,51%"}];




            donut = donutChart()
                .width(960)
                .height(500)
                .cornerRadius(3) // sets how rounded the corners are on each slice
                .padAngle(0.015) // effectively dictates the gap between slices
                .variable('DataVal')

                .category('DataName');


            d3.select('#chartstructurerashod')
                .datum(data) // bind data to the div
                .call(donut); // draw chart in div










        }
    }

























});

