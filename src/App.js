import React, { Component } from 'react';
import { BrowserRouter as Route, Link, Switch } from "react-router-dom";
import FrequencyAnalysis from './Components/FrequencyAnalysis'
import Welcome from "./Components/Welcome";

class App extends Component {
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
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content">
              <Switch>
                <Route exact path="/" component={Welcome} />
                <Route exact path="/frequency" component={FrequencyAnalysis} />
              </Switch>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
