import React, { Component } from 'react';

class ColumnTransposition extends Component {
  constructor(props) {
    super (props);
    this.state = {
      keyword: "",
      output: "",
      columns: ""
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
    let columnArray = this.getColumnArray();

    // Now build the ciphertext
    let order = this.getOrder();
    let newOutput = "";

    for (let i = 0; i < order.length; ++i) {
      for (let j = 0; j < columnArray.length; ++j) {
        newOutput += columnArray[j][order[i]];
      }
    }
    this.setState({output: newOutput});

  }

  decodeCiphertext() {
    let columnArray = this.getColumnArray();

    // Now build the ciphertext
    let order = this.getOrder();
    let newOutput = "";

    for (let i = 0; i < columnArray.length; ++i) {
      for (let j = 0; j < columnArray[i].length; ++j) {
        newOutput += columnArray[i][j];
      }
    }
    this.setState({output: newOutput});

  }

  getColumnArray() {
    // Build columns output first
    let plaintext = this.props.state.plaintext.replace(/[^0-9a-z]/gi, '').toLowerCase();
    let columnOutput = "";
    let columnArray = [[]];

    for (let i = 0; i < plaintext.length; ++i) {
      if (i !== 0 && i % this.state.keyword.length === 0 ) {
        columnOutput += "\n";
        columnArray.push([]);
      }
      columnOutput += plaintext[i];
      columnArray[Math.floor(i / this.state.keyword.length)].push(plaintext[i]);

    }

    // Pad with q's if needed
    while (plaintext.length % this.state.keyword.length !== 0) {
      plaintext += "q";
      columnOutput += "q";
      columnArray[columnArray.length - 1].push("q");
    }

    this.setState({columns: columnOutput});
    return columnArray;
  }

  handleKeywordChange(event) {
    this.setState({keyword:event.target.value});
  }

  render() {
    return (
      <div className="ColumnTransposition">
        <div className="mdl-layout__content">
          <h4>Columnar Transposition</h4>
          <div>
            <label htmlFor="input">Keyword</label>
            <br/>
            <input type="text"
                   id="input"
                   onChange={this.handleKeywordChange}
                   value={this.state.keyword}
            />
          </div>
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
          <h4>Column Format</h4>
          <textarea
            readOnly={true}
            value={this.state.columns}
            rows="20"
            cols="50"
          />
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

export default ColumnTransposition;
