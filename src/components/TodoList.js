import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <ul>
        {props.todos.map((todoObj) => (
          <TodoItem
            todoObj={todoObj}
            changeHandler={props.changeHandler}
            deleteHandler={props.deleteHandler}
          />
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
