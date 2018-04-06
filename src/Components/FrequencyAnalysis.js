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

    for (let i = 0; i < ciphertext.length; ++i) {
      let isInData = false;
      let currentString = ciphertext.slice(i, i + splitSize + 1);
      let value = ciphertext.split(currentString).length - 1;

      for (let j = 0; j < newDataSource.data.length; ++j) {
        if (newDataSource.data[j].label === currentString) {
          isInData = true;
        }
      }

      if (isInData === false && currentString.length === splitSize + 1) {
        newDataSource.data.push({
          label: currentString,
          value: value
        });
      }
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
            value={JSON.stringify(this.state.dataSource.data)}
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
