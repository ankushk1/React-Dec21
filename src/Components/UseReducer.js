import React from "react";
import { useReducer } from "react";

const UseReducer = () => {
  const initialState = {
    count: 0,
    count2: 10,
    user: {
      name: ""
    }
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
       state.user.name = "ABC"
       return {...state, user:{...state.user, name:"changed"}}

    }
  };

  const [state, setState] = useReducer(
    (state, newState) => {
      console.log(state, newState)
      return ({...state, ...newState})
    }
    , initialState);
  console.log(state);
  return (
    <div>
    {console.log(state)}

      <h3>{state.count}</h3>
      <h3>{state.count2}</h3>
      <h3>{state.user.name}</h3>
      <button onClick={() => setState({...state, count:1})}>Decrement</button>

      {/* <button onClick={() => dispatch({ type: "increment", value: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment2", value: 5 })}>
        Increment2
      </button>
      <button onClick={() => dispatch({ type: "changeName"})}> */}
        Change Name
      {/* </button> */}
    </div>
  );
};

export default UseReducer;
