import {
  INC_COUNT,
  DEC_COUNT,
  RESET_COUNT,
  SET_TODOS
} from "../actions/actionConsts";

const initialState = {
  count: 0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        count: state.count + action.payload
      };
    case DEC_COUNT:
      return {
        ...state,
        count: state.count - action.payload
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0
      };
    case SET_TODOS:
      return {
        todos: action.payload
      };
    default:
      return state;
  }
};

export default counterReducer;
