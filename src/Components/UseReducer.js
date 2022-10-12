import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
    count2: 10,
    user: {
      name: "Name"
    },
    input1: "",
    email: ""
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.value };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return initialState;
      case "increment2":
        return { ...state, count2: state.count2 + action.value };
      case "changeName":
        return { ...state, user: { name: "Changed Name" } };
      case "inputNameChange":
        return { ...state, input1: action.value };
      case "inputEmailChange":
        return { ...state, email: action.value };
    }
  };

  const [state, setState] = useReducer((prevState, nextState) => {
    console.log(prevState);
    console.log(nextState);
    return { ...prevState, ...nextState };
  }, initialState);

  // const [count, setCount] = useReducer(
  // }, 1);

  return (
    <div>
      {/* {console.log(state)} */}
      {/* <h3>{state.count}</h3>
      <h3>{state.count2}</h3>
      <h3>{state.user.name}</h3> <br /> */}
      <h3>{state.count}</h3> <br />
      {/* <input
        type="text"
        placeholder="Name"
        value={state.input1}
        onChange={(event) => {
          dispatch({ type: "inputNameChange", value: event.target.value });
        }}
      />{" "}
      <input
        type="text"
        placeholder="Email"
        value={state.email}
        onChange={(event) => {
          dispatch({ type: "inputEmailChange", value: event.target.value });
        }}
      />{" "} */}
      <br />
      {/* <button onClick={() => dispatch({ type: "increment", value: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "changeName" })}>
        Change Name
      </button> */}
      <button onClick={() => setState({ ...state, count: state.count + 2 })}>
        Increment Count1
      </button>
    </div>
  );
};

export default UseReducer;
