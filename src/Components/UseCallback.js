import React from "react";
import { useEffect } from "react";
import { useState, useCallback } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  const onIncrement1 = () => {
    setCount(count + 1);
  };

  const onIncrement2 = useCallback((num)=>{
      setCount2(count2 + num);
  },[count2])

  useEffect(()=>{
    console.log('useEffect called');
  }, [onIncrement2])

  return <div>
    <div>
      Count 1 = {count} <br />
      Count 2 = {count2}
    </div>
    <div>
      <button onClick={()=> onIncrement1()}>Increment 1</button>
      <button onClick={()=> onIncrement2(6)}>Increment 2</button>
    </div>
  </div>;
};

export default UseCallback;
