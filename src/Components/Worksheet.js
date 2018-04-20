import React, { Component } from 'react';

class Worksheet extends Component {
  constructor(props) {
    super (props);
    this.state = {
      alphabet: "a b c d e f g h i j k l m n o p q r s t u v w x y z",
      guess: "- - - - - - - - - - - - - - - - - - - - - - - - - -",
      output: ""
    };

    this.handleGuessChange = this.handleGuessChange.bind(this);
  }

  handleGuessChange(event) {
    this.setState({guess: event.target.value});

    let guess = event.target.value.split(" ").join("");
    let alphabet = this.state.alphabet.split(" ").join("");
    let newOutput = this.props.state.ciphertext.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for (let i = 0; i < newOutput.length; ++i) {
      let charLoc = alphabet.indexOf(newOutput[i]);

      if (guess[charLoc] !== "-") {
        newOutput = newOutput.substr(0, i) + guess[charLoc] + newOutput.substr(i + 1);
      }
    }

    this.setState({output: newOutput});
  }


  render() {
    return (
      <div className="Worksheet">
        <div className="mdl-layout__content">
          <h4>Worksheet</h4>
          <textarea
            readOnly={true}
            value={this.state.alphabet}
            cols="50"
          />
          <textarea
            onChange={this.handleGuessChange}
            value={this.state.guess}
            cols="50"
          />
          <h4>Output</h4>
          <textarea
            readOnly={true}
            value={this.state.output}
            rows="20"
            cols="50"
          />
        </div>
      </div>
    );
  }
}

export default Worksheet;
