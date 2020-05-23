import React from "react";
import { useState } from "react";
import Person from "./Person";
import "./App.css";

function App() {
  const changeBetweenBruceAndAnita = () => {
    let newName, newFlag;
    if (personState.isBruce) {
      newName = "Anita";
      newFlag = false;
    } else {
      newName = "Bruce";
      newFlag = true;
    }

    setpersonState({
      persons: [
        { name: "Freddy", age: 23 },
        { name: "Nathan", age: 35 },
        { name: "Alfred", age: 67 },
        { name: newName, age: 55 },
        { name: "Gordon", age: 25 },
      ],
      isBruce: newFlag,
    });
  };
  const [personState, setpersonState] = useState({
    persons: [
      { name: "Freddy", age: 23 },
      { name: "Nathan", age: 35 },
      { name: "Alfred", age: 67 },
      { name: "Bruce", age: 55 },
      { name: "Gordon", age: 25 },
    ],
    isBruce: true,
  });
  return (
    <div className="App">
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
      <Person
        name={personState.persons[3].name}
        age={personState.persons[3].age}
      />
      <Person
        name={personState.persons[4].name}
        age={personState.persons[4].age}
      />
      <button onClick={changeBetweenBruceAndAnita}>
        Change between Bruce and Anita
      </button>
    </div>
  );
}

export default App;
