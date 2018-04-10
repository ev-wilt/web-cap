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

  encodeCiphertext() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startIndex = 26 - alphabet.indexOf(this.state.startChar);
    let trimmedKeyword = "";
    let key = alphabet;

    // Trim any unnecessary characters from the keyword
    for (let i = this.state.keyword.length - 1; i > -1; --i) {
      console.log(this.state.keyword.substr(0, i - 1));
      if (!this.state.keyword.substr(0, i - 1).includes(this.state.keyword[i])) {
        trimmedKeyword = this.state.keyword[i] + trimmedKeyword;
      }
    }

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
    key = key.join("");

    // Use the new key
    let newOutput = this.props.state.plaintext;

    for (let i = 0; i < newOutput.length; ++i) {
      let charLoc = alphabet.indexOf(newOutput[i]);
       newOutput = newOutput.substr(0, i) + key[charLoc] + newOutput.substr(i + 1);
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
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input"
                   type="text"
                   id="keyword"
                   onChange={this.handleKeywordChange}
                   value={this.state.keyword}
            />
            <label className="mdl-textfield__label" htmlFor="keyword">Keyword</label>
          </div>
          <br/>
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input className="mdl-textfield__input"
                   type="text"
                   id="keyword"
                   onChange={this.handleStartChange}
                   value={this.state.startChar}
            />
            <label className="mdl-textfield__label" htmlFor="keyword">Letter to start from</label>
          </div>
          <br/>
          <button
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            onClick={() => this.encodeCiphertext()}
          >
            Encode
          </button>
          <br/>
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
