import React from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm.js";

const TodoList = () => {
  return (
    <div>
      <TodoForm />
      <Todo />
    </div>
  );
};

export default TodoList;
