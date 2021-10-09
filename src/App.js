import React, { useState, useEffect } from "react";
import "./App.css";
//! Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //! Creating a state
  // inputText is the actual value typed and setInputText is the function that allows to change the value , you can use the state anywhere in the app , wherever you want you can have it.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //! UseEffect example
  // //Since we provide [], it will run only once when the app runs first
  // useEffect(() => {
  //   console.log("hey");
  // }, []);

  // //Since we provide [todos, status], we are telling that everytime the todos and status state changes, run this function
  // useEffect(() => {
  //   console.log("hey");
  // }, [todos, status]);

  //! Run once when the app start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //! UseEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //! Functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((xyztodo) => xyztodo.completed === true));
        break;

      case "uncompleted":
        setFilteredTodos(
          todos.filter((xyztodo) => xyztodo.completed === false)
        );
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // console.log(filteredTodos);

  //! Save to Local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      // let todoLocal = localStorage.getItem("todos", JSON.stringify(todos));
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      // console.log(todoLocal)
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      {/* <h1>Hello React</h1>
      <p>
        Formula of Hydrogen is :- H<sub>2</sub>O
      </p> */}
      <header>
        {/* <h1>Ayush's To-Do List {inputText}</h1> */}
        <h1>Ayush's To-Do List</h1>
      </header>

      {/* Doing this gave us access to the value in the Form.js */}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
