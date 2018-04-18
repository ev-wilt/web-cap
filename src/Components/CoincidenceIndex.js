import React, { Component } from 'react';

class CoincidenceIndex extends Component {
  constructor(props) {
    super (props);
    this.state = {
      output: ""
    };
  }

  getIndexOfCoincidence() {
    let ciphertext = this.props.state.ciphertext.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let frequencyMap = new Map();

    // Get frequencies of each character in the text
    for (let j = 0; j < ciphertext.length; ++j) {
      frequencyMap.set(ciphertext[j], 0);
    }
    for (let k = 0; k < ciphertext.length; ++k) {
      frequencyMap.set(ciphertext[k], frequencyMap.get(ciphertext[k]) + 1);
    }

    // Find the index of coincidence for the text
    let sum = 0;

    frequencyMap.forEach(function (value, key, map) {
      sum += (value * (value - 1));
    });

    let newOutput = sum / (ciphertext.length * (ciphertext.length - 1));
    this.setState({output: newOutput});
  }

  render() {
    return (
      <div className="CoincidenceIndex">
        <div className="mdl-layout__content">
          <h4>Index of Coincidence</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.getIndexOfCoincidence()}
              >
                Calculate
              </button>
            </div>
          </div>
          <h4>Output</h4>
          <textarea
            readOnly={true}
            value={this.state.output}
            cols="50"
          />
        </div>
      </div>
    );
  }
}

export default CoincidenceIndex;
