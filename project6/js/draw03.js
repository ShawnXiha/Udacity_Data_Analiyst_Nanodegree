//creat svgs
var svg1 = dimple.newSvg("#chart1", 590, 400);
var svg2 = dimple.newSvg("#chart2", 590, 400);
var labelOrder = ['heavy-Medium',
 'heavy-Tall',
 'midheavy-Medium',
 'midheavy-Tall',
 'medium-Short',
 'medium-Medium',
 'medium-Tall',
 'midlight-Short',
 'midlight-Medium',
 'midlight-Tall',
 'light-Short',
 'light-Medium'];

// Chart1, plot of count and lables
d3.csv("data.csv", function(data) {
    var myChart = new dimple.chart(svg1, data);
    var x = myChart.addCategoryAxis("x", "Label");
    x.addOrderRule(labelOrder);
    myChart.addMeasureAxis("y", "count");
    var serie = myChart.addSeries("avg", dimple.plot.bar);
    serie.addOrderRule(['low','mid','high']);
    myChart.addLegend(200, 15, 380, 20, "right");
    myChart.draw();
    // add title
    svg1.append("text")
        .attr("x", (svg1[0][0].clientWidth / 2))
        .attr("y", 10)
        .attr("text-anchor", "middle")
        .style("font-size", "13px")
        .style("font-weight", "bold")
        .text("stacked counts plot for batting averages");
        // x label rotate
    x.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 20) rotate(-70)";
    });});

// Chart2, plot of percent and labels
d3.csv("data2.csv", function(data) {
    var myChart = new dimple.chart(svg2, data);
    var x =myChart.addCategoryAxis("x", "Label");
    x.addOrderRule(labelOrder);
    var y = myChart.addPctAxis("y", "percentage");
    y.title = "percentage" ;
    var serie = myChart.addSeries("avg", dimple.plot.bar);
    serie.addOrderRule(['low','mid','high']);
    myChart.addLegend(200, 15, 380, 20, "right");
    myChart.draw();
   // add title
   svg2.append("text")
       .attr("x", (svg2[0][0].clientWidth / 2))
       .attr("y", 10)
       .attr("text-anchor", "middle")
       .style("font-size", "13px")
       .style("font-weight", "bold")
       .text("stacked percents plot for batting averages");
   // x label rotate
   x.shapes.selectAll("text").attr("transform",
    function (d) {
      return d3.select(this).attr("transform") + " translate(0, 20) rotate(-70)";
    });});
