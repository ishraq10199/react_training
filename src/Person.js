import React from "react";
import "./person.css";

function Person(props) {
  return (
    <div>
      <h3>
        Hello, my name is <span className="blue">{props.name}</span> and I am{" "}
        <span className="red">{props.age}</span> years old!
      </h3>
    </div>
  );
}

export default Person;
