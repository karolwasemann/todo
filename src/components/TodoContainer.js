import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TodoContainer.css";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoCount from "./TodoCount";
import Playground from "./Playground";
import TodoInput from "./TodoInput";
import { Alert } from "react-bootstrap";

const TodoContainer = () => {
  const [todosArr, setTodosArr] = useState([
    {
      id: uuid(),
      title: "essen",
      completed: true,
    },
    {
      id: uuid(),
      title: "aufräumen",
      completed: true,
    },
    {
      id: uuid(),
      title: "zocken",
      completed: false,
    },
    {
      id: uuid(),
      title: "schlafen",
      completed: true,
    },
  ]);

  const [showPlayground, setShowPlayground] = useState(false);

  const changeHandler = (id) => {
    console.log(`Checkbox-ID ${id}`);

    const changedArr = todosArr.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodosArr(changedArr);
  };

  const deleteHandler = (id) => {
    console.log("deleted item with ID: " + id);
    const changedArr = todosArr.filter((todo) => todo.id !== id);

    setTodosArr(changedArr);
  };

  const addHandler = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    const newArr = [...todosArr, newTodo];
    setTodosArr(newArr);
  };

  return (
    <>
      {todosArr.length === 0 ? (
        <Alert variant="danger">
          <Alert.Heading>Deine ToDo-Liste ist leer.</Alert.Heading>
          Du hast nichts zu tun. Schäm dich, du unproduktiver Mensch.
        </Alert>
      ) : null}
      <Header />
      <TodoInput addHandler={addHandler} />
      <TodoCount todosCount={todosArr} todos={todosArr} />
      <TodoList
        todos={todosArr}
        changeHandler={changeHandler}
        deleteHandler={deleteHandler}
        // Bad practice, da wir TodoList nicht die gesamte "Macht" /// über unsern State geben möchte
        setTodos={setTodosArr}
      />
      <button
        id="play"
        onClick={() => {
          setShowPlayground(!showPlayground);
        }}
      >
        Playground {showPlayground ? "hide" : "show"}
      </button>
      {showPlayground ? <Playground /> : null}
    </>
  );
};

export default TodoContainer;
