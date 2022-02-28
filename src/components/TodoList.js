import React, { useState } from "react";

const TodoList = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <ul>
        {props.todos.map((todoObj) => (
          <li key={todoObj.id}>
            {todoObj.title}
            <input
              type="checkbox"
              checked={todoObj.completed}
              onChange={() => {
                props.changeHandler(todoObj.id);
              }}
            />
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "transparent",
                border: "none",
              }}
              onClick={() => props.deleteHandler(todoObj.id)}
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <button
        disabled={isDisabled}
        onClick={() => {
          const changedTodos = props.todos.map((todo) => {
            todo.title = `sofort ${todo.title}`;
            return todo;
          });

          props.setTodos(changedTodos);
          setIsDisabled(true);
        }}
      >
        Add sofort!
      </button>
    </>
  );
};

export default TodoList;
