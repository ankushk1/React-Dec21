import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todosArr, setTodosArr] = useState([]);

  const onTodoAddHandler = () => {
    if (!input) return;
    setTodosArr([
      ...todosArr,
      {
        id: uuidv4().split("-")[0],
        text: input
      }
    ]);
    setInput("");
  };

  const onHandleDelete = (id) => {
    // Method 1 with index
    // const cloneTodos = [...todosArr]
    // cloneTodos.splice(index,1)
    // setTodosArr(cloneTodos)

    //Method 2 with id
    const updatedArr = todosArr.filter((todo) => todo.id != id);
    setTodosArr(updatedArr);
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-50 mt-4"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="btn btn-primary h-50 align-self-end ms-2"
          onClick={() => onTodoAddHandler()}
        >
          Add
        </button>
      </div>
      <div className="todo-container">
        {todosArr.map((todo, index) => (
          <ul style={{ listStyle: "none" }} className="row mt-3">
            <li className="col-5">{todo.text}</li>
            <button className="col-2 btn btn-secondary me-2">Edit</button>
            <button
              className="col-2 btn btn-danger"
              onClick={() => onHandleDelete(todo.id)}
            >
              Delete
            </button>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Todo;
