import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./exercise.jsx";
import { Welcome } from "./exercise.jsx";
import picture from "./bee.jpg";
import { MyList } from "./exercise.jsx";
import { JustButton } from "./exercise.jsx";

function App() {
  const BeeList = {
    red: 4,
  };

  let text;
  if (BeeList.red > 2) {
    text = "Happy Bee";
  } else {
    text = "Sad Bee";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to r1111eload.
        </p>

        <Welcome />
        <JustButton/>
        <img className="bee" src={picture} />
        <MyButton />

        <span>{text}</span>
        <MyList />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
