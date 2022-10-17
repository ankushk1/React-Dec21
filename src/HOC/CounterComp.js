import React from "react";
import { useState } from "react";
import withCounter from "./withCounter";

const CounterComp = (props) => {
  const { count, onIncrement, onDecrement, name } = props;
  console.log(props);

  return (
    <div>
      Count - {count}
      Name - {name}
      <div>
        <button onClick={onIncrement}>Count Increment</button>

        <button onClick={onDecrement}>Count Decremnt</button>
      </div>
    </div>
  );
};

export default withCounter(CounterComp);
