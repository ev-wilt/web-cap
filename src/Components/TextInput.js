import React, { Component } from 'react';
import './TextInput.css'

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciphertext: '',
      plaintext: ''
    };

    this.handlePlaintextChange = this.handlePlaintextChange.bind(this);
    this.handleCiphertextChange = this.handleCiphertextChange.bind(this);
  }

  handlePlaintextChange(event) {
    this.setState({plaintext: event.target.value});
    console.log(this.state.plaintext);
  }

  handleCiphertextChange(event) {
    this.setState({ciphertext: event.target.value});
    console.log(this.state.ciphertext);
  }

  render() {
    return (
      <div className="TextInput">
            <form>
              <h4>Plaintext</h4>
              <textarea
                onChange={this.handlePlaintextChange}
                value={this.state.plaintext}
                rows="20"
                cols="60"
                id="plaintext"
              />
              <br/>
              <h4>Ciphertext</h4>
              <textarea
                onChange={this.handleCiphertextChange}
                value={this.state.ciphertext}
                rows="20"
                cols="60"
                id="ciphertext"
              />
              <br/>
            </form>
      </div>
    );
  }
}

export default TextInput;
