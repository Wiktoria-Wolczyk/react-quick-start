import logo from "./logo.svg";
import "./App.css";
import { MyButton } from "./exercise.jsx";
import { Welcome } from "./exercise.jsx";
import picture from "./bee.jpg";
import { MyList } from "./exercise.jsx";
import { JustButton } from "./exercise.jsx";
import { useState, useEffect } from "react";
import { CounterA } from "./components/CounterA/CounterA.jsx";
import { CounterB } from "./components/CounterB/CounterB.jsx";
import { CounterC } from "./components/CounterC/CounterC.jsx";
import { CounterD } from "./components/CounterD/CounterD.jsx";


function App() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);
  const [counterC, setCounterC] = useState(0);
  const [counterD, setCounterD] = useState(0);
  const [counterADisabled, setCounterADisabled] = useState(false);

  useEffect(() => {
    // console.log("Counter a sie zmienil, jego obecna wartosc to:", counterA);
    // if (counterA >= 10) {
    //   setCounterADisabled(true);
    // }

    if (counterA >= 10) {
      setCounterA(0);
    }
  }, [counterA]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counts sum: {counterA + counterB + counterC}</h2>
        <div style={{ display: "flex" }}>
          <div style={{ borderWidth: 1 }}>
            <h1> Button A clicked {counterA} times </h1>
            <CounterA
              setCount={setCounterA}
              currentCount={counterA}
              isDisabled={counterADisabled}
            />
          </div>

          <div style={{ borderWidth: 1 }}>
            <h1> Button B clicked {counterB} times </h1>
            <CounterB setCount={setCounterB} currentCount={counterB} />
          </div>
        </div>
        <h3>Button C clicked {counterC} times</h3>
          <CounterC
          setCount={setCounterC}
          currentCount={counterC}
        />
        <h3> Button D clicked {counterD} times</h3>
          <CounterD 
          setCount={setCounterD}
          currentCount={counterD}
          />
          <CounterD 
          setCount={setCounterD}
          currentCount={counterD}
          />
      </header>
    </div>
  );
}

export default App;

// const [count, setCount] = useState(0);
// const [hasBeenClicked, setHasBeenClicked] = useState(false);
// const [user, setUser] = useState({});

// const bee = {
//   red: 4,
// };

// let text;
// if (bee.red > 2) {
//   text = "Happy Bee";
// } else {
//   text = "Sad Bee";
// }

// const handleClick = () => {
//   setCount(count + 1);
//   setHasBeenClicked(true);
//   console.log(user);
// };

{
  /* <h1> Counter value: {count} </h1>

        <h2>Czy ktos kliknal? {hasBeenClicked ? "Tak" : "Nie"}</h2>
        <Welcome />
        <JustButton />
        <img className="bee" src={picture} alt="bee" />
        <MyButton /> */
}

{
  /*     <input type="text" placeholder="Name" value={user.name}></input>
        <input type="text" placeholder="Surname" value={user.surname}></input> */
}

{
  /* <span>{text}</span> */
}
{
  /* <MyList /> */
}

{
  /* <button onClick={handleClick}>Don't click me</button> */
}
