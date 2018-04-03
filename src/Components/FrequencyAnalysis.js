import React, { Component } from 'react';

class FrequencyAnalysis extends Component {
  render() {
    return (
      <div className="Frequency-Analysis">
        {this.props.children}
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Button
        </button>
      </div>
    );
  }
}

export default FrequencyAnalysis;
