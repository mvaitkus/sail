import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { RecoilRoot } from "recoil";
import { WindToSail } from "./WindToSail";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-menu">
              <Link to="/" className="App-link">
                Wind
              </Link>
              <Link to="/my" className="App-link">
                My Sails
              </Link>
            </div>
          </header>
          <Switch>
            <Route path="/my">
              <div>My sails component</div>
            </Route>
            <Route path="/">
              <WindToSail />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
