import React, { useState, useEffect, useLayoutEffect } from "react";

const FirstComponent = (props) => {
  const { setPropsFromChild } = props;
  // console.log(carName);

  const [count, setCount] = useState({
    num2: 1
  });

  const [user, setUser] = useState({
    name: {
      firstName: "Name"
    }
  });
  const [name, setName] = useState("ABC");

  const onIcrement = () => {
    setCount({ ...count, num1: count.num1 + 1 });
  };

  const onIcrement2 = () => {
    setCount({ ...count, num2: count.num2 + 1 });
  };

  const onDecrement = () => {
    setCount({ ...count, num1: count.num1 - 1 });
  };

  const onReset = () => {
    setCount({ num1: 0, num2: 0 });
  };

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [name, count]);

  // useEffect(() => {
  //   console.log('UseEffect 2 run');
  //   return () => {
  //     console.log("Unmount");
  //   };
  // }, []);

  
  useEffect(() => {
    console.log("User UseEffect");
  }, [count]);

  useLayoutEffect(() => {
    console.log("useLayoutEffect Called");
  },[count]);

  const onNameChange = () => {
    setName("xyz" + Math.random().toFixed(2) * 100);
  };
  // useEffect()

  // console.log("render", count);
  return (
    <div>
      {console.log("render")}
      <h3>{/* Name from Parent - {username} and age - {age} */}</h3>
      <h4>Func Component</h4>
      <h3>Num1 is - {count.num1}</h3> <br />
      <h3>Num2 is - {count.num2}</h3> <br />
      <h3>Name- {name}</h3> <br />
      <button onClick={onIcrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIcrement2}>Icrement2</button>
      <button onClick={onNameChange}>Name change</button>
      <br />
      {user?.name?.firstName ?? "Name not found"}
    </div>
  );
};

export default FirstComponent;
