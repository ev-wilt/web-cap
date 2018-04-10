import React, { Component } from 'react';

class Shift extends Component {
  constructor(props) {
    super (props);
    this.state = {      
      analysis: "",
      amount: "0",
      output: ""
    };
    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  shiftAnalysis(event) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newAnalysis = "";
    let shortSize = 30;
    for(let i = 0; i < 26; ++i) {
      let newOutput = this.props.state.ciphertext.substr(0, shortSize).split(" ").join("");
      let shifted_alphabet = alphabet.substr(i, 26-i) + alphabet.substr(0, i);

      for(let k = 0; k < newOutput.length; ++k) {
        let charLoc = shifted_alphabet.indexOf(newOutput[k]);
        newOutput = newOutput.substr(0, k) + alphabet[charLoc] + newOutput.substr(k + 1);
      }
      newAnalysis += i + ": " + newOutput + "\n";
      this.setState({analysis: newAnalysis});
    }
  }

  shift(event) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newOutput = this.props.state.ciphertext.split(" ").join("").split("\n").join("");
    let amount = this.state.amount;
    let shifted_alphabet = alphabet.substr(amount, 26-amount) + alphabet.substr(0, amount);
    for(let i = 0; i < newOutput.length; ++i) {
      let charLoc = shifted_alphabet.indexOf(newOutput[i]);
      newOutput = newOutput.substr(0, i) + alphabet[charLoc] + newOutput.substr(i + 1);
    }
    this.setState({output: newOutput});
  }

  handleAmountChange(event) {
    this.setState({amount:event.target.value});
  }


  render() {
    return (
      <div className="Shift">
        <div className="mdl-layout__content">
          <h4>Shift Analysis</h4>
          <div className="mdl-grid">
            <button
                  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                  onClick={() => this.shiftAnalysis()}
            >
            Shift Analysis
            </button>
          </div>
          <textarea
            readOnly={true}
            value={this.state.analysis}
            cols="50"
            rows="20"
          />
          <h4>Caesar Shift</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col">
              <textarea
                onChange={this.handleAmountChange}
                value={this.state.amount}
                cols="3"
              />
            </div>
            <div className="mdl-cell mdl-cell--2-col">
            <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.shift()}
              >
            Shift
            </button>
            </div>
          </div>
            <textarea
              readOnly={true}
              value={this.state.output}
              rows="10"
              cols="50"
            />
        </div>
      </div>
    );
  }
}

export default Shift;
