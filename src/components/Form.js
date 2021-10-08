import React from "react";

// const Form = (props) => {
const Form = ({ inputText, setInputText, todos, setTodos }) => {
  //! Here I can write javascript code and function
  const inputTextHandler = (e) => {
    // console.log("Input just got changed")
    // console.log(e);
    // console.log(e.target);
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault(); // prevents the page from refreshing after submitting using the button
    // setTodos([])
    setTodos([
      // This means what all todos you have , just pass it down here
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    //! after submitting , the input form state should go blank again
    setInputText("");
  };

  return (
    <form>
      {/* <input type="text" className="todo-input" /> */}

      {/* value={inputText} os used so that the input form of the UI also goes blank when the input form state goes blank. So this is used to reflect the change in the input form state  */}
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
