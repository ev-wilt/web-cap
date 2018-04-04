import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts)
var chartConfigs = {
  type: "Column2D",
  className: "fc-column2d",
  dataFormat: "JSON",
  dataSource: {
      chart:{},
      data: [{
        label: "a",
        value: 3
      }, {
        label: "b",
        value: 2
      }, {
        label: "c",
        value: 4
      }]
  }
}

class FrequencyAnalysis extends Component {
  render() {
    return (
      <div className="Frequency-Analysis">
        {this.props.children}
        <ReactFC {...chartConfigs} />
      </div>
    );
  }
}

export default FrequencyAnalysis;
