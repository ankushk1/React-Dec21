import React, { useState } from "react";
import { useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const counterRef = useRef(0);
  const inputRef = useRef("");

  const onIncrement = () => {
    counterRef.current = counterRef.current + 1;
    console.log(counterRef.current);
  };

  const onSubmit = () => {
    inputRef.current.value="new input"
    inputRef.current.style.backgroundColor= "red"
    inputRef.current.style.width= "500px"
    console.dir(inputRef.current);
    console.dir(document.getElementById("input"));
  };

  return (
    <div>
      {console.log("render")}
      {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => onIncrement()}>Ref Inc</button>
      <br />
      <input
      id = "input"
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        <button onClick={() => onSubmit()}>Submit</button>
      </div>
    </div>
  );
};

export default UseRef;
