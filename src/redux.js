const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  count: 0,
  count2: 1
};

const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";
const INC_COUNT2 = "INC_COUNT2";

const reducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === INC_COUNT) {
    return {
      ...state,
      count: state.count + action.num
    };
  }
  if (action.type === DEC_COUNT) {
    return {
      ...state,
      count: state.count - 1
    };
  }
  if (action.type === INC_COUNT2) {
    return {
      ...state,
      count2: state.count2 + 1
    };
  }
  return {...state}
};

const store = createStore(reducer);

let ReduxState;
store.subscribe(() => {
  ReduxState = store.getState();
});

store.dispatch({ type: INC_COUNT, num: 10 });
store.dispatch({ type: INC_COUNT, num: 10 });
store.dispatch({ type: DEC_COUNT });
store.dispatch({ type: INC_COUNT2 });

console.log("State", ReduxState);
