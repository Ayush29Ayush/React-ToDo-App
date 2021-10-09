import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  //! Events
  const deleteHandler = () => {
    // console.log(todo);
    console.log(todo.id);
    setTodos(todos.filter((xyzelement) => console.log(xyzelement.id)));
    //! Use Inspect element and see the values to understand

    // filter function discards the element from the array if the condition is not satisfied so here the condition is that the id should not be the same , but since the id's are same , the condition fails(false) so it filters/removes it from the array.
    // So array se hatega voh jiska condition match nahi karta.
    // The filter() method creates an array filled with all array elements that pass a test (provided by a function).
    setTodos(todos.filter((xyzelement) => xyzelement.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((xyzitem) => {
        if (xyzitem.id === todo.id) {
          return {
            ...xyzitem,
            completed: !xyzitem.completed,
          };
        }
        return xyzitem;
      })
    );
  };

  return (
    <div className="todo">
      {/* <li className="todo-item">HEY GUYS</li> */}
      <li className="todo-item">{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i> Insert
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i> Delete
      </button>
    </div>
  );
};

export default Todo;
