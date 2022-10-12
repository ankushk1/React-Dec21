import React from "react";
import { useState, useMemo } from "react";

const slowFunc = (n) => {
  for (let i = 0; i < 1000000000; i++) {}
  return n * 2;
};

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const DoubleOfNum = useMemo(()=>{
    return slowFunc(number);
  },[number])

  return (
    <div>
      Count is- {count} <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        {number} * 2 = {DoubleOfNum}
      </div>
    </div>
  );
};

export default UseMemo;
