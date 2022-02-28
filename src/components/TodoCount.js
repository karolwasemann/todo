import React from "react";

const TodosCount = (props) => {
  const completedTodos = props.todos.filter((todo) => {
    return todo.completed === true;
  });

  return (
    <>
      <h3>Insgesamt Todos {props.todosCount.length}</h3>
      <h3>
        Todos erledigt:
        {completedTodos.length}/ {props.todosCount.length}
      </h3>
    </>
  );
};
export default TodosCount;
