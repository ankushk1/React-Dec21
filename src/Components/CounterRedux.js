import React from "react";
import {
  incrementCount,
  decrementCount,
  resetCount
} from "../actions/counterActions";
import { connect, useSelector, useDispatch } from "react-redux";

const CounterRedux = () => {
  const stateFromStore = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount(5));
  };

  const handleDecrement = () => {
    dispatch(decrementCount(2));
  };

  const handleReset = () => {
    dispatch(resetCount());
  };
  
  return (
    <div>
      <h3>Counter Using Redux</h3>

      <h5>{stateFromStore}</h5>
      <div>
        <button onClick={() => handleIncrement()}>Increment</button>
        <button onClick={() => handleDecrement()}>Decrement</button>
        <button onClick={() => handleReset()}>Reset</button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counterState: state
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(incrementCount()),
//     decrement: () => dispatch(decrementCount()),
//     reset: () => dispatch(resetCount())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
export default CounterRedux;
