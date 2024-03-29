import "./App.css";
import {
  HashRouter as Router,
  NavLink,
  Route,
  Switch
} from "react-router-dom";

import { RecoilRoot } from "recoil";
import { WindToSail } from "../wind";
import { Settings } from "../settings";
import { MySails } from "../mysails";

export default function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Router basename="/" hashType="noslash">
          <header>
            <div className="App-menu">
              <NavLink to="/" className="App-link" exact>
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
            <Route path="/" exact>
              <WindToSail />
            </Route>
            <Route path="/my">
              <MySails />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Router>
      </RecoilRoot>
    </div>
  );
}

