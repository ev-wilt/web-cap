import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

class Worksheet extends Component {
  constructor(props) {
    super (props);
    this.state = {};

  }

  render() {
    return (
      <div className="Worksheet">
        <div className="mdl-layout__content">
          <h4>Worksheet</h4>
          <textarea
            readOnly={true}
            rows="20"
            cols="65"
            id="frequency-output"
          />
          <h4>Graphical Analysis</h4>
        </div>
      </div>
    );
  }
}

export default Worksheet;
