//chart 1
var svg1 = dimple.newSvg("#chart1", 590, 400);
var svg2 = dimple.newSvg("#chart2", 590, 400);
d3.csv("data.csv", function(data) {
    var myChart = new dimple.chart(svg1, data);
    var x = myChart.addCategoryAxis("x", "Label");
    x.title = 'High,Mid,Low avg players count in different weight and height';
    myChart.addMeasureAxis("y", "count");
    var serie = myChart.addSeries("avg", dimple.plot.bar);
    serie.addOrderRule(['low','mid','high']);
    myChart.addLegend(200, 10, 380, 20, "right");
    myChart.draw();})

d3.csv("data.csv", function(data) {
    var myChart = new dimple.chart(svg2, data);
    var x =myChart.addCategoryAxis("x", "Label");
    x.title = 'High,Mid,Low avg players percent in different weight and height'
    myChart.addPctAxis("y", "count");
    var serie = myChart.addSeries("avg", dimple.plot.bar);
    serie.addOrderRule(['low','mid','high']);
    myChart.addLegend(200, 10, 380, 20, "right");
    myChart.draw();})
