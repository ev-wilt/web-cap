import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import FrequencyAnalysis from './Components/FrequencyAnalysis'
import TextInput from "./Components/TextInput";
import Shift from "./Components/Shift";
import Worksheet from "./Components/Worksheet";
import Keyword from "./Components/Keyword";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ciphertext: '',
      plaintext: ''
    };

    this.handlePlaintextChange = this.handlePlaintextChange.bind(this);
    this.handleCiphertextChange = this.handleCiphertextChange.bind(this);
  }

  handlePlaintextChange(plaintext) {
    this.setState ({plaintext: plaintext}, function () {
    });
  }

  handleCiphertextChange(ciphertext) {
    this.setState({ciphertext: ciphertext});
  }

  handleInput(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
              <Link to="/" className="mdl-navigation__link">
                <span className="mdl-layout-title">WebCAP</span>
              </Link>
              <div className="mdl-layout-spacer"></div>
              <nav className="mdl-navigation mdl-layout--large-screen-only">
                <a className="mdl-navigation__link"
                   href="https://cas.iu.edu/cas/login?cassvc=IU&casurl=http://localhost:3000"
                >
                  Login with CAS
                </a>
              </nav>
            </div>
          </header>
          <div className="mdl-layout__drawer">
            <span className="mdl-layout-title">WebCAP</span>
            <nav className="mdl-navigation">
              <Link to="/frequency" className="mdl-navigation__link">Frequency Analysis</Link>
              <Link to="/worksheet" className="mdl-navigation__link">Worksheet</Link>
              <Link to="/shift" className="mdl-navigation__link">Caesar Shift</Link>
              <Link to="/keyword" className="mdl-navigation__link">Keyword Substitution</Link>
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--6-col">
                <Switch>
                  <Route exact path="/frequency" render={() => (
                    <FrequencyAnalysis state={this.state} />
                  )}/>
                  <Route exact path="/worksheet" render={() => (
                    <Worksheet state={this.state} />
                  )}/>
                  <Route exact path="/shift" render={() => (
                    <Shift state={this.state} />
                  )}/>
                  <Route exact path="/keyword" render={() => (
                    <Keyword state={this.state} />
                  )}/>
                </Switch>
              </div>
              <div className="mdl-cell mdl-cell--6-col">
                <TextInput
                  state={this.state}
                  handlePlaintextChange={this.handlePlaintextChange}
                  handleCiphertextChange={this.handleCiphertextChange}
                />
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
