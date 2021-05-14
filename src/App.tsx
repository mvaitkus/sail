import "./App.css";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

import { RecoilRoot } from "recoil";
import { WindToSail } from "./WindToSail";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router>
          <header>
            <div className="App-menu">
              <NavLink to="/" className="App-link" exact >
                <div className="App-menu-item">Wind</div>
              </NavLink>
              <NavLink to="/my" className="App-link">
                <div className="App-menu-item">My Sails</div>
              </NavLink>
              <NavLink to="/settings" className="App-link">
                <div className="App-menu-item">Settings</div>
              </NavLink>
            </div>
          </header>
          <Switch>
            <Route path="/my">
              <div>My sails component</div>
            </Route>
            <Route path="/settings">
              <div>Settings component</div>
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
