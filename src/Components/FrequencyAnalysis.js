import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

class FrequencyAnalysis extends Component {
  constructor(props) {
    super (props);
    this.state = {
      type: 'column2d',
      width: 500,
      height: 300,
      dataSource: {
        chart:{
          caption: 'Character Frequency',
        },
        data: []
      }
    };

    this.splitCipher = this.splitCipher.bind(this);
  }

  splitCipher(splitSize) {
    let ciphertext = this.props.state.ciphertext;
    ciphertext = ciphertext.split(" ").join("");
    let newDataSource = {
      chart:{
        caption: 'Character Frequency',
      },
      data: []
    };

    while(ciphertext !== "") {
      let currentString = ciphertext.slice(0, splitSize + 1);
      let value = ciphertext.split(currentString).length - 1;

      newDataSource.data.push({
        label: currentString,
        value: value
      });

      ciphertext = ciphertext.split(currentString).join("");
      console.log(ciphertext);
    }

    this.setState({
      dataSource: newDataSource
    });
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
          <ReactFC {...this.state} />
        </div>
      </div>
    );
  }
}

export default FrequencyAnalysis;
