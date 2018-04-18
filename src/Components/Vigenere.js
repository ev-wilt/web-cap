import React, { Component } from 'react';

class Vigenere extends Component {
  constructor(props) {
    super (props);
    this.state = {      
      keyword: "key",
      output: ""
    };
    this.handleKeywordChange = this.handleKeywordChange.bind(this);
  }

  decode(event) {
    let baseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let vigenereAlphabets = [];
    for(let i = 0; i < 26; ++i) { 
      vigenereAlphabets[i] = baseAlphabet.substr(i, 26-i) + baseAlphabet.substr(0, i);
    }
    let newOutput = this.props.state.ciphertext.split(" ").join("").split("\n").join("");
    let keyword = this.state.keyword;
    for(let i = 0; i < newOutput.length; ++i) {
      let keywordIndex = i%keyword.length;
      let firstIndex = baseAlphabet.indexOf(keyword[keywordIndex]);
      let secondIndex = vigenereAlphabets[firstIndex].indexOf(newOutput[i]);

      newOutput = newOutput.substr(0, i) + baseAlphabet[secondIndex] + newOutput.substr(i + 1);
    }
    this.setState({output: newOutput});
  }

  encode(event) {
    let baseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let vigenereAlphabets = [];
    for(let i = 0; i < 26; ++i) { 
      vigenereAlphabets[i] = baseAlphabet.substr(i, 26-i) + baseAlphabet.substr(0, i);
    }
    let newOutput = this.props.state.plaintext.split(" ").join("").split("\n").join("");
    let keyword = this.state.keyword;
    for(let i = 0; i < newOutput.length; ++i) {
      let keywordIndex = i%keyword.length;
      let firstIndex = baseAlphabet.indexOf(keyword[keywordIndex]);
      let secondIndex = baseAlphabet.indexOf(newOutput[i]);

      newOutput = newOutput.substr(0, i) + vigenereAlphabets[firstIndex][secondIndex] + newOutput.substr(i + 1);
    }
    this.setState({output: newOutput});
  }

  handleKeywordChange(event) {
    this.setState({keyword:event.target.value});
  }


  render() {
    return (
      <div className="Shift">
        <div className="mdl-layout__content">
          <h4>Vigenere Cipher</h4>
          <label htmlFor="keyword">Keyword</label>
          <br/>
          <input type="text"
            id="keyword"
            onChange={this.handleKeywordChange}
            value={this.state.keyword}
          />
          <br/>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--3-col">
            <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.decode()}
              >
            Decode
            </button>
            </div>

            <div className="mdl-cell mdl-cell--3-col">
            <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.encode()}
              >
            Encode
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

export default Vigenere;
