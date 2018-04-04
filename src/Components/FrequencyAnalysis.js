import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);
let chartConfigs = {
  type: "Column2D",
  className: "fc-column2d",
  dataFormat: "JSON",
  dataSource: {
      chart:{},
      data: []
  }
};

class FrequencyAnalysis extends Component {
  constructor(props) {
    super (props);
    this.state = {
      cipherArray: []
    };

    this.splitCipher = this.splitCipher.bind(this);
  }

  splitCipher(splitSize) {
    let ciphertext = this.props.state.ciphertext;
    ciphertext = ciphertext.trim();
    this.setState({cipherArray: []});

    while(ciphertext !== "") {
      this.state.cipherArray.push(ciphertext.slice(0, splitSize + 1));
      ciphertext = ciphertext.slice(splitSize + 1);
    }

    console.log(this.state.cipherArray);
  }

  render() {
    return (
      <div className="Frequency-Analysis">
        <div className="mdl-layout__content">
          <h4>Frequency Analysis</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.splitCipher(0)}
              >
                Single
              </button>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.splitCipher(1)}
              >
                Double
              </button>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.splitCipher(2)}
              >
                Triple
              </button>
            </div>
          </div>
          <textarea
            readOnly={true}
            value={this.state.cipherArray}
            rows="20"
            cols="65"
            id="frequency-output"
          />
          <h4>Graphical Analysis</h4>
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    );
  }
}

export default FrequencyAnalysis;
