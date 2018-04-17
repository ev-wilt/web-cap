import React, { Component } from 'react';

class Kasiski extends Component {
  constructor(props) {
    super (props);
    this.state = {      
      estimate: "",
      factors: ""
    };
    this.splitCipher = this.splitCipher.bind(this);
  }

  kasiski(event) {
    let double = this.splitCipher(1);
    let triple = this.splitCipher(2);
    let distances = [];
    for(let i = 0; i < double.length; ++i) {
      for(let j = 0; j < double[i].index.length - 1; ++j) {
        distances.push(double[i].index[j+1] - double[i].index[j]);
      }
    }
    for(let i = 0; i < triple.length; ++i) {
      for(let j = 0; j < triple[i].index.length - 1; ++j) {
        distances.push(triple[i].index[j+1] - triple[i].index[j]);
      }
    }
    let maxDistance = Math.max.apply(Math, distances);
    let factorCount = Array.apply(null, new Array(maxDistance)).map(Number.prototype.valueOf,0);
    for(let i = 0; i < distances.length; ++i) {
      for(let j = 2; j <= distances[i]; ++j) {
        if(distances[i]%j===0) {
          if(isNaN(factorCount[j])) {
            factorCount[j] = 0;
          }
          factorCount[j]++;
        }
      }
    }
    let factorCountString = "";
    for(let i = 2; i < factorCount.length; ++i) { 
      factorCountString += i+": " + factorCount[i] +"\n";
    }
    this.setState({factors: factorCountString});
    let estimateString = "";
    let amtToDisplay = 3;
    for(let i = 0; i < amtToDisplay; ++i) { 
      let maxFactorAmt = Math.max.apply(Math, factorCount);
      let maxFactor = factorCount.indexOf(maxFactorAmt);
      if(i===amtToDisplay-1) {
        estimateString += maxFactor;
      }
      else { 
        estimateString += maxFactor + " or ";
      }
      factorCount[maxFactor] = 0;
    }
    this.setState({estimate: estimateString});
  }

  splitCipher(splitSize) {
    let ciphertext = this.props.state.ciphertext.split(" ").join("").split("\n").join("");
    ciphertext = ciphertext.split(" ").join("");
    ciphertext = ciphertext.split("\\").join("");
    let data = [];

    for (let i = 0; i < ciphertext.length; ++i) {
      let isInData = false;
      let currentString = ciphertext.slice(i, i + splitSize + 1);
      let value = ciphertext.split(currentString).length - 1;
      let indices = [];

      for (let j = 0; j < data.length; ++j) {
        if (data[j].label === currentString) {
          isInData = true;
        }
      }

      if (isInData === false && currentString.length === splitSize + 1 && value > 1) {
        let j = 0;
        while(j < ciphertext.length) {
          let nextIndex = ciphertext.indexOf(currentString, j);
          if(nextIndex !== -1) {
            indices.push(nextIndex);
            j = nextIndex + currentString.length;
          }
          else { 
            j = ciphertext.length;
          }
        }
        data.push({
          label: currentString,
          value: value,
          index: indices
        });
      }
    }
    return data;
  }


  render() {
    return (
      <div className="Shift">
        <div className="mdl-layout__content">
          <h4>Kasiski Tool</h4>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col">
            <button
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                    onClick={() => this.kasiski()}
              >
            Analyze
            </button>
            </div>
          </div>
          <div className="mdl-grid">
            <textarea
              readOnly={true}
              value={"Likely keyword length = " + this.state.estimate}
              rows="1"
              cols="50"
            />
          </div>
          <div className="mdl-grid">
            <textarea
              readOnly={true}
              value={this.state.factors}
              rows="20"
              cols="50"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Kasiski;
