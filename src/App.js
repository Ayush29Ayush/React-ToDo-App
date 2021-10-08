import React, { useState } from "react";
import "./App.css";
//! Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //! Creating a state
  // inputText is the actual value typed and setInputText is the function that allows to change the value , you can use the state anywhere in the app , wherever you want you can have it.
  const [inputText, setInputText] = useState("");

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
      <Form setInputText={setInputText}/> 
      <TodoList />
    </div>
  );
}

export default App;
