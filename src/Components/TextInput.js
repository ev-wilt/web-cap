import React, { Component } from 'react';
import './TextInput.css'

class TextInput extends Component {
  constructor(props) {
    super(props);

    this.handlePlaintextChange = this.handlePlaintextChange.bind(this);
    this.handleCiphertextChange = this.handleCiphertextChange.bind(this);
  }

  handlePlaintextChange(event) {
    this.props.handlePlaintextChange(event.target.value);
  }

  handleCiphertextChange(event) {
    this.props.handleCiphertextChange(event.target.value);
  }

  render() {
    return (
      <div className="TextInput">
        <form>
          <h4>Plaintext</h4>
          <textarea
            onChange={this.handlePlaintextChange}
            value={this.props.state.plaintext}
            rows="20"
            cols="65"
            id="plaintext"
          />
          <br/>
          <h4>Ciphertext</h4>
          <textarea
            onChange={this.handleCiphertextChange}
            value={this.props.state.ciphertext}
            rows="20"
            cols="65"
            id="ciphertext"
          />
          <br/>
        </form>
      </div>
    );
  }
}

export default TextInput;
