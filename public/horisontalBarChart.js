/**
 * Created by simvolice on 17.01.2018 22:46
 */


var color = d3.scaleOrdinal(d3.schemeCategory10);
var margin = {top: 0, right: 150, bottom: 0, left: 0},
    width = 407.141 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var x = d3.scaleLinear()
    .range([0,width]);

var y = d3.scaleBand()
    .rangeRound([height,0])
    .padding(0.2)




x.domain([0,d3.max(data, function(d){ return d.value; })]);
y.domain(data.map(function(d) { return d.name; }));

svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", 0)
    .attr("y", function(d){ return y(d.name); })
    .attr("width", function(d){ return x(d.value)+50; })
    .attr("height", y.bandwidth())
    .attr("fill", function (d) {
        return color(d.value);
    });


svg.selectAll(".bar-label")
    .data(data)
    .enter().append("text")
    .attr("class", "bar-label")
    .attr("x", function(d){ return x(d.value) + 60; })
    .attr("y", function(d){ return y(d.name); })
    .attr("dy", y.bandwidth()-3)
    .attr("text-anchor", "start")
    .style('font-weight', 700)
    .text(function (d) {
        return d3.format(",.2f")(d.value);
    });


