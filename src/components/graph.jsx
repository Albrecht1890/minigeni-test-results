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
    valueAxis.min = 0
    valueAxis.max = 200

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

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
