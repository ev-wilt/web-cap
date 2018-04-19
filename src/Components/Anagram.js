import React, { Component } from 'react';

class Anagram extends Component {
  constructor(props) {
    super (props);
    this.state = {
      keyword: "",
      output: ""
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  getOrder() {
    let key = this.state.keyword.toUpperCase();

    // Find ordering of letters in keyword
    let order = [];
    let result = [];

    for (let i = 0; i < key.length; ++i) {
      order.push(key.charCodeAt(i) - 64)
    }

    for (let i = 0; i < order.length; ++i) {
      let counter = 0;
      for (let j = 0; j < order.length; ++j) {
        if (i !== j && order[i] > order[j]) {
          ++counter;
        }
      }
      while (result.includes(counter)) {
        ++counter;
      }
      result[i] = counter;
    }

    return result;
  }

  encodePlaintext() {
    let order = this.getOrder();
    let newOutput = "";
    let plaintext = this.props.state.plaintext.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // Pad with q's if needed
    while (plaintext.length % this.state.keyword.length !== 0) {
      plaintext += "q";
    }

    for (let i = 0; i < plaintext.length; ++i) {
      let charLoc = order[i % order.length] + (Math.floor(i / order.length) * order.length);
      newOutput += plaintext[charLoc];
    }

    this.setState({output: newOutput});
  }

  decodeCiphertext() {
    let order = this.getOrder();
    let newOutput = "";
    let ciphertext = this.props.state.ciphertext.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for (let i = 0; i < ciphertext.length; ++i) {
      let charLoc = order[i % order.length] + (Math.floor(i / order.length) * order.length);
      newOutput = newOutput.substr(0, charLoc) + ciphertext[i] + newOutput.substr(charLoc);
    }

    this.setState({output: newOutput});
  }

  handleKeywordChange(event) {
    this.setState({keyword:event.target.value});
  }

  render() {
    return (
      <div className="Anagram">
        <div className="mdl-layout__content">
          <h4>Anagram</h4>
          <div>
            <label htmlFor="input">Keyword</label>
            <br/>
            <input type="text"
                   id="input"
                   onChange={this.handleKeywordChange}
                   value={this.state.keyword}
            />
          </div>
          <br/>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.encodePlaintext()}
              >
                Encode
              </button>
            </div>
            <div className="mdl-cell mdl-cell--4-col">
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={() => this.decodeCiphertext()}
              >
                Decode
              </button>
            </div>
          </div>
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

export default Anagram;
