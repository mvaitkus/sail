import logo from "./logo.svg";
import "./App.css";
import { RecoilRoot } from "recoil";
import { WindToSail } from "./WindToSail";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RecoilRoot>
          <WindToSail />
        </RecoilRoot>
      </header>
    </div>
  );
}

export default App;
