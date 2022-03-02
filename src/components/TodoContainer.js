import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import "./TodoContainer.scss";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoCount from "./TodoCount";
import Playground from "./Playground";
import TodoInput from "./TodoInput";
import { Alert } from "react-bootstrap";
import styles from "./TodoContainer.module.css";

const TodoContainer = () => {
  useEffect(() => {
    const getTodos = async () => {
      try {
        const usersResp = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const allUseres = await usersResp.json();
        const users = allUseres.splice(0, 8);
        console.log("asdasd");
        setTodosArr(users);
        setIsLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    getTodos();
  }, []);

  const [todosArr, setTodosArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  const usersId1 = () => {
    setTodosArr(todosArr.filter((todo) => todo.userId === 1));
  };

  console.log(todosArr);

  return (
    <>
      {todosArr.length === 0 ? (
        <Alert variant="danger" className={styles.alertDes}>
          <Alert.Heading className={styles.alertHead}>
            Deine ToDo-Liste ist leer.
          </Alert.Heading>
          Du hast nichts zu tun. Schäm dich, du unproduktiver Mensch.
        </Alert>
      ) : null}
      <Header />
      <TodoInput addHandler={addHandler} />
      <TodoCount todosCount={todosArr} todos={todosArr} />
      <button onClick={usersId1}>Show only ID: 1</button>

      {isLoading ? (
        <p style={{ color: "red", fontSize: "40px" }}>Todos is Loading</p>
      ) : (
        <TodoList
          todos={todosArr}
          changeHandler={changeHandler}
          deleteHandler={deleteHandler}
          // Bad practice, da wir TodoList nicht die gesamte "Macht" /// über unsern State geben möchte
          setTodos={setTodosArr}
        />
      )}
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
