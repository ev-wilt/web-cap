import React, { Component } from 'react';

class FrequencyAnalysis extends Component {
  render() {
    return (
      <div className="Frequency-Analysis">
        <div className="mdl-layout__content">
          <h4>Frequency Analysis</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Single
              </button>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Double
              </button>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                Triple
              </button>
            </div>
          </div>
          <textarea
            readOnly={true}
            value={this.props.state.ciphertext}
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

export default FrequencyAnalysis;
