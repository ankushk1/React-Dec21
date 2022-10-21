import React from "react";

const TodoItemDetails = ({ todo, onCompleteHandler, onEditHandler, onHandleDelete }) => {
  return (
    <div>
      <ul
        style={{ listStyle: "none" }}
        className="row mt-3 d-flex align-items-center"
      >
        <li className="col-6 text-center  fs-4 ms-5 ">
          <span onClick={() => onCompleteHandler(todo.id)}>
            {!todo.isCompleted ? (
              <i className="fa-solid fa-stopwatch me-2 p-3"></i>
            ) : (
              <i className="fa-solid fa-circle-check me-2 p-3"></i>
            )}
          </span>
          {todo.text}
        </li>
        <button
          className="col-auto btn btn-secondary me-2 px-3 h-75"
          onClick={() => onEditHandler(todo.text, todo.id)}
        >
          Edit
        </button>
        <button
          className="col-auto btn btn-danger h-75"
          onClick={() => onHandleDelete(todo.id)}
        >
          Delete
        </button>
      </ul>
    </div>
  );
};

export default TodoItemDetails;
