import React from "react";
//! Import Components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  // console.log(todos)
  // console.log(filteredTodos) 

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* {todos.map((todo) => ( */}
        {filteredTodos.map((todo) => (
          // <Todo text={todo.text} id={todo.id}/>
          // we are providing the id as the key so that react would know which one to target for tasks like deleting
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
