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


    function wrap(text, width) {



        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 0.9, // ems
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }


    function donutChart() {

        var div = d3.select("body").append("div").attr("class", "toolTip");


        var width,
            height,
            margin = {top: 10, right: 10, bottom: 10, left: 10},
            colour = d3.scaleOrdinal(d3.schemeCategory10), // colour scheme
            variable, // value in data that will dictate proportions on chart
            category, // compare data by
            padAngle, // effectively dictates the gap between slices
            floatFormat = d3.format('.4r'),
            ruFormat = d3.format(',d'),
            cornerRadius, // sets how rounded the corners are on each slice
            percentFormat = d3.format(',.2%');

        function chart(selection){
            selection.each(function(data) {
                // generate chart

                // ===========================================================================================
                // Set up constructors for making donut. See https://github.com/d3/d3-shape/blob/master/README.md
                var radius = Math.min(width, height) / 2;

                // creates a new pie generator
                var pie = d3.pie()
                    .value(function(d) { return floatFormat(d[variable]); })
                    .sort(null);

                // contructs and arc generator. This will be used for the donut. The difference between outer and inner
                // radius will dictate the thickness of the donut

                var arc1 = d3.arc()
                    .outerRadius(radius * 0.8)
                    .innerRadius(radius * 0.4);

                var arc = d3.arc()
                    .outerRadius(radius * 0.9)
                    .innerRadius(radius * 0.6)
                    .cornerRadius(cornerRadius)
                    .padAngle(padAngle);

                // this arc is used for aligning the text labels
                var outerArc = d3.arc()
                    .outerRadius(radius * 0.9)
                    .innerRadius(radius * 0.9);
                // ===========================================================================================

                // ===========================================================================================
                // append the svg object to the selection
                var svg = selection.append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
                // ===========================================================================================

                // ===========================================================================================
                // g elements to keep elements within svg modular
                svg.append('g').attr('class', 'slices');
                svg.append('g').attr('class', 'labelName');
                svg.append('g').attr('class', 'lines');
                // ===========================================================================================

                // ===========================================================================================
                // add and colour the donut slices
                var path = svg.select('.slices')
                    .datum(data).selectAll('path')
                    .data(pie)
                    .enter().append('path')
                    .attr('fill', function(d) { return colour(d.data[category]); })
                    .attr('d', arc);






                // ===========================================================================================

                // ===========================================================================================
                // add text labels
                /*var label = svg.select('.labelName').selectAll('text')
                    .data(pie)
                    .enter().append('text')
                    .attr('dy', '.35em')
                    .html(function(d) {



                        return `${d.data[category].substr(0,60)}: ${ruFormat(d.data[variable])}`;



                    })
                    .attr('transform', function(d) {

                        // effectively computes the centre of the slice.
                        // see https://github.com/d3/d3-shape/blob/master/README.md#arc_centroid
                        var pos = outerArc.centroid(d);

                        // changes the point to be on left or right depending on where label is.
                        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                        return 'translate(' + pos + ')';
                    })
                    .style('text-anchor', function(d) {
                        // if slice centre is on the left, anchor text to start, otherwise anchor to end
                        return (midAngle(d)) < Math.PI ? 'start' : 'end';
                    }).call(wrap, 260);*/
                // ===========================================================================================

                // ===========================================================================================
                // add lines connecting labels to slice. A polyline creates straight lines connecting several points
                /*var polyline = svg.select('.lines')
                    .selectAll('polyline')
                    .data(pie)
                    .enter().append('polyline')
                    .attr('points', function(d) {

                        // see label transform function for explanations of these three lines.
                        var pos = outerArc.centroid(d);
                        pos[0] = radius * 0.95 * (midAngle(d) < Math.PI ? 1 : -1);
                        return [arc.centroid(d), outerArc.centroid(d), pos]
                    });*/
                // ===========================================================================================

                // ===========================================================================================
                // add tooltip to mouse events on slices and labels
                d3.selectAll('.labelName text, .slices path').call(toolTip);
                // ===========================================================================================

                // ===========================================================================================
                // Functions

                // calculates the angle for the middle of a slice
                function midAngle(d) { return d.startAngle + (d.endAngle - d.startAngle) / 2; }

                // function that creates and adds the tool tip to a selected element
                function toolTip(selection) {

                    // add tooltip (svg circle element) when mouse enters label or slice
                    selection.on('mouseenter', function (data) {

                        div.style("display", "block");

                        div.style("left", 660+"px");
                        div.style("top", 420+"px");
                        div.style("position", "absolute");

                        div.html("<div style='text-align: center; width: 200px; word-wrap: break-word; font-family: Roboto Black; font-size: 18px '>"+ (data.data[category]) + "<br>" + (ruFormat(data.data[variable])) + "<br>" + (data.data.Persent)+"%" + "</div>");

                    });




                    // remove the tooltip when mouse leaves the slice/label
                    selection.on('mouseout', function () {
                        div.style("display", "none");

                    });
                }

                // function to create the HTML string for the tool tip. Loops through each key in data object
                // and returns the html string key: value
                function toolTipHTML(data) {

                    var tip = '';


                       /* tip += '<tspan x="0" dy="1.2em">' + data.data[category] + '</tspan>';
                        tip += '<tspan x="0" dy="1.3em">' + ruFormat(data.data[variable]) + '</tspan>';
                        tip += '<tspan x="0" dy="1.4em">' + data.data['Persent'] + '</tspan>';
*/


                    return data.data[category];
                }
                // ===========================================================================================

            });
        }

        // getter and setter functions. See Mike Bostocks post "Towards Reusable Charts" for a tutorial on how this works.
        chart.width = function(value) {
            if (!arguments.length) return width;
            width = value;
            return chart;
        };

        chart.height = function(value) {
            if (!arguments.length) return height;
            height = value;
            return chart;
        };

        chart.margin = function(value) {
            if (!arguments.length) return margin;
            margin = value;
            return chart;
        };

        chart.radius = function(value) {
            if (!arguments.length) return radius;
            radius = value;
            return chart;
        };

        chart.padAngle = function(value) {
            if (!arguments.length) return padAngle;
            padAngle = value;
            return chart;
        };

        chart.cornerRadius = function(value) {
            if (!arguments.length) return cornerRadius;
            cornerRadius = value;
            return chart;
        };

        chart.colour = function(value) {
            if (!arguments.length) return colour;
            colour = value;
            return chart;
        };

        chart.variable = function(value) {
            if (!arguments.length) return variable;
            variable = value;
            return chart;
        };

        chart.category = function(value) {
            if (!arguments.length) return category;
            category = value;
            return chart;
        };

        return chart;
    }




        var donut = null;
        var data = null;









    donut = donutChart()
        .width(960)
        .height(500)
        .cornerRadius(3) // sets how rounded the corners are on each slice
        .padAngle(0.02) // effectively dictates the gap between slices
        .variable('DataVal')
        .category('DataName');




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





        d3.select('#chartstructurerashod')
            .datum(data) // bind data to the div
            .call(donut);


    }, 50);





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

