import React, { Component } from 'react';

class Keyword extends Component {
  constructor(props) {
    super (props);
    this.state = {
      keyword: "",
      startChar: "",
      output: ""
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
  }

  createKey(alphabet, key) {
    let startIndex = 26 - alphabet.indexOf(this.state.startChar);
    let keywordSet = new Set(this.state.keyword.split(""));
    let trimmedKeyword = "";

    // Trim any unnecessary characters from the keyword
    keywordSet.forEach(function (value) {
      trimmedKeyword += value;
    });

    // Trim the alphabet of characters in keyword
    for (let i = 0; i < trimmedKeyword.length; ++i) {
      key = key.split(trimmedKeyword[i]).join("");
    }

    // Make the key and shift it as necessary
    key = trimmedKeyword + key;
    key = key.split("");

    for (let i = 0; i < startIndex; ++i) {
      key.push(key.shift());
    }

    return key.join("");
  }

  encodePlaintext() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let key = alphabet;

    key = this.createKey(alphabet, key);

    // Use the new key
    let newOutput = this.props.state.plaintext.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for (let i = 0; i < newOutput.length; ++i) {
      let charLoc = alphabet.indexOf(newOutput[i]);
       newOutput = newOutput.substr(0, i) + key[charLoc] + newOutput.substr(i + 1);
    }

    this.setState({output: newOutput});
  }

  decodeCiphertext() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let key = alphabet;

    key = this.createKey(alphabet, key);

    // Use the new key
    let newOutput = this.props.state.ciphertext.replace(/[^0-9a-z]/gi, '').toLowerCase();

    for (let i = 0; i < newOutput.length; ++i) {
      let charLoc = key.indexOf(newOutput[i]);
      newOutput = newOutput.substr(0, i) + alphabet[charLoc] + newOutput.substr(i + 1);
    }

    this.setState({output: newOutput});
  }

  handleKeywordChange(event) {
    this.setState({keyword:event.target.value});
  }

  handleStartChange(event) {
    this.setState({startChar:event.target.value});
  }


  render() {
    return (
      <div className="Keyword">
        <div className="mdl-layout__content">
          <h4>Keyword Substitution</h4>
          <div>
            <label htmlFor="keyword">Keyword</label>
            <br/>
            <input type="text"
                   id="keyword"
                   onChange={this.handleKeywordChange}
                   value={this.state.keyword}
            />
          </div>
          <br/>
          <div>
            <label htmlFor="letter">Letter to start from</label>
            <br/>
            <input type="text"
                   id="letter"
                   onChange={this.handleStartChange}
                   value={this.state.startChar}
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

export default Keyword;
