import React, { Component } from 'react';

// amcharts
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class Graph extends Component {

  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart)
    chart.paddingRight = 20;


    chart.data = this.props.getTestData;


    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.min = 0;
    valueAxis.max = 200;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.strokeWidth = 3;
    series.bullets.push(new am4charts.CircleBullet());
    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    // create ranges
    let range = valueAxis.axisRanges.create();
    range.value = 0;
    range.endValue = 50;
    range.axisFill.fill = am4core.color('green');
    range.axisFill.fillOpacity = 0.2;
    
    let range2 = valueAxis.axisRanges.create();
    range2.value = 50;
    range2.endValue = 100;
    range2.axisFill.fill = am4core.color('grey');
    range2.axisFill.fillOpacity = 0.2;

    let range3 = valueAxis.axisRanges.create();
    range3.value = 100;
    range3.endValue = 150;
    range3.axisFill.fill = am4core.color('orange');
    range3.axisFill.fillOpacity = 0.2;

    let range4 = valueAxis.axisRanges.create();
    range4.value = 150;
    range4.endValue = 200;
    range4.axisFill.fill = am4core.color('red');
    range4.axisFill.fillOpacity = 0.2;


    this.chart = chart;
  }

  componentDidUpdate(oldProps) {
    if (oldProps.getTestData !== this.props.getTestData) {
      this.chart.data = this.props.getTestData;
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    console.log()
    return (
      <div id="chartdiv" style={{ width: "100%", height:"500px"}}></div>
    )
  }
}

export default Graph;
