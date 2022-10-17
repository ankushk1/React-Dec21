import React from "react";
import { useState } from "react";
import withCounter from "./withCounter";

const HoverComp = ({count, onDecrement, onIncrement,age}) => {
  
  return (
    <div>
      Count - {count}
      Age - {age}
      <div>
        <button onMouseOver={onIncrement}>Count Increment</button>
        <button onMouseOver={onDecrement}>Count Decremnt</button>
      </div>
    </div>
  );
};

export default withCounter(HoverComp);
