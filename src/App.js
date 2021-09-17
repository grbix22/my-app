import logo from "./logo.svg";
import "./App.css";
import constant from "./random";
import CurrentDate from "./components/CurrentDate";
import UniqueId from "./components/UniqueId";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Pozdrav!</h1>
        <p>Hello world!</p>
        <p>Rezultati aplikacija</p>
        <UniqueId />
        <CurrentDate />
        <UserInfo />
        <p>The random constant is {constant} </p>
        <a
          className="App-link"
          href="https://github.com/grbix22"
          target="_blank"
          rel="noopener noreferrer"
        >
          My GitHub profile!
        </a>
      </header>
    </div>
  );
}

export default App;
