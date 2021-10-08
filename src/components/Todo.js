import React from "react";

const Todo = ({ text }) => {
  return (
    <div className="todo">
      {/* <li className="todo-item">HEY GUYS</li> */}
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i> This is Button 1
      </button>
      <button className="trash-btn">
        <i className="fas fa-trash"></i> This is Button 2
      </button>
    </div>
  );
};

export default Todo;
