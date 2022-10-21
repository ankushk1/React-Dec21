import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItemDetails from "./TodoItemDetails";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todosArr, setTodosArr] = useState(() => {
    const todosFromLC = JSON.parse(localStorage.getItem("todos"));
    return todosFromLC && todosFromLC.length > 0 ? todosFromLC : [];
  });
  const [isEditing, setIsEditing] = useState({
    edit: false,
    todoId: ""
  });
  const [filter, setFilter] = useState("All");

  const onTodoAddHandler = () => {
    if (!input) return;
    setTodosArr([
      ...todosArr,
      {
        id: uuidv4().split("-")[0],
        text: input,
        isCompleted: false
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

  const onEditHandler = (text, id) => {
    setIsEditing({ ...isEditing, edit: true, todoId: id });
    setInput(text);
  };

  const onTodoUpdateHandler = () => {
    const todoIndex = todosArr.findIndex(
      (elem) => elem.id === isEditing.todoId
    );
    const clonedArr = [...todosArr];
    clonedArr[todoIndex] = {
      id: uuidv4().split("-")[0],
      text: input
    };
    setTodosArr(clonedArr);
    setInput("");
  };

  const onCompleteHandler = (id) => {
    const todoIndex = todosArr.findIndex((elem) => elem.id === id);
    const clonedArr = [...todosArr];
    clonedArr[todoIndex] = {
      ...clonedArr[todoIndex],
      isCompleted: !clonedArr[todoIndex].isCompleted
    };
    setTodosArr(clonedArr);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todosArr));
  }, [todosArr]);

  const getAllTodos = () => {
    console.log("getAllTodos");
    return todosArr.map((todo, index) => (
      <TodoItemDetails
        key={index}
        todo={todo}
        onCompleteHandler={onCompleteHandler}
        onEditHandler={onEditHandler}
        onHandleDelete={onHandleDelete}
      />
    ));
  };

  const getCompleted = () => {
    console.log("getCompleted");
    return todosArr.map(
      (todo, index) =>
        todo.isCompleted && (
          <TodoItemDetails
            key={index}
            todo={todo}
            onCompleteHandler={onCompleteHandler}
            onEditHandler={onEditHandler}
            onHandleDelete={onHandleDelete}
          />
        )
    );
  };

  const getPending = () => {
    console.log("getPending");
    return todosArr.map(
      (todo, index) =>
        !todo.isCompleted && (
          <TodoItemDetails
            key={index}
            todo={todo}
            onCompleteHandler={onCompleteHandler}
            onEditHandler={onEditHandler}
            onHandleDelete={onHandleDelete}
          />
        )
    );
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
        {isEditing.edit ? (
          <button
            className="btn btn-warning h-50 align-self-end ms-2"
            onClick={() => onTodoUpdateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            className="btn btn-primary h-50 align-self-end ms-2"
            onClick={() => onTodoAddHandler()}
          >
            Add
          </button>
        )}
      </div>
      <div className="mt-4 mx-auto d-flex justify-content-center ">
        <button
          className={`${filter == "All" ? "btn-info" : ""}  btn mx-2 px-4`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`${
            filter == "Completed" ? "btn-info" : ""
          }  btn mx-2 px-4`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
        <button
          className={`${filter == "Pending" ? "btn-info" : ""}  btn mx-2 px-4`}
          onClick={() => setFilter("Pending")}
        >
          Pending
        </button>
      </div>
      <div className="todo-container">{filter == "All" && getAllTodos()}</div>
      <div className="todo-container">
        {filter == "Completed" && getCompleted()}
      </div>
      <div className="todo-container">
        {filter == "Pending" && getPending()}
      </div>
    </div>
  );
};

export default Todo;
