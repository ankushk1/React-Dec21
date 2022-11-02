import { INC_COUNT, DEC_COUNT, RESET_COUNT, SET_TODOS } from "./actionConsts";

export const incrementCount = (num) =>{
  return  ({
    type: INC_COUNT,
    payload:num
  });
}

export const decrementCount = (num) => ({
  type: DEC_COUNT,
  payload:num
});

export const resetCount = () => ({
  type: RESET_COUNT
});


export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos
})