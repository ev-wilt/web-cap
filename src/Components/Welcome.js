import React, { Component } from 'react';
import './Welcome.css'

class Welcome extends Component {
  render() {
    return (
      <div className="Welcome mdl-layout">
        <div className="mdl-grid">
          <form>
            <h4>Plaintext</h4>
            <textarea rows="20" cols="75" name="plaintext" /><br/>
            <h4>Ciphertext</h4>
            <textarea rows="20" cols="75" name="ciphertext" /><br/>
            <input
              className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
              type="submit" 
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default Welcome;
