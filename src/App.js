import React from "react";
import "./App.css";
//! Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello React</h1>
      <p>
        Formula of Hydrogen is :- H<sub>2</sub>O
      </p> */}
      <header>
        <h1>Ayush's To-Do List</h1>
      </header>

      <Form />
      <TodoList />
    </div>
  );
}

export default App;
