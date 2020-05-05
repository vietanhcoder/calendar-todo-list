import React, { useState } from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm.js";
import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: "task default 1",
      isCompleted: false,
      date: new Date(),
    },
    {
      id: uuidv4(),
      title: "task default 2",
      isCompleted: false,
      date: new Date(),
    },
  ]);
  // const [valueInputTask, setValueInputTask] = useState(valueInputTask);
  const _handleAddTodo = (todo) => {
    if (Object.keys(todo).length > 0) {
      const newObj = { ...todo };
      const newArray = [newObj, ...todos];
      setTodos(newArray);
    }
  };

  //================================================================
  // Begin local storage
  //================================================================

  // useEffect(() => {
  //   if (todos.length > 0) {
  //     localStorage.setItem("myValueInLocalStorage", todos);
  //   }
  // }, [todos]);

  // useEffect(() => {
  //   if (todos.length > 0) {
  //     let value = localStorage.getItem("myValueInLocalStorage");
  //     console.log("OUTPUT: TodoList -> value", value);
  //   }
  // }, [todos]);

  //================================================================
  // End local storage
  //================================================================

  const _handleClearTodo = () => {
    const emptyArray = [];
    setTodos(emptyArray);
  };
  const _completeTodo = (id) => {
    const completedTodos = [...todos];
    completedTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      } else {
        return todo;
      }
    });
    setTodos(completedTodos);
  };
  const _removeTodo = (id) => {
    const removeTodo = todos.filter((item) => item.id !== id);
    setTodos(removeTodo);
  };

  const _viewTodo = (id) => {
    console.log("OUTPUT: _viewTodo -> id", id);
  };

  const _handleChangeSearch = (event) => {
    const { value } = event.target;
    console.log("OUTPUT: TodoList -> event", value);
  };

  return (
    <div>
      <TodoForm
        handleAddTodo={(todo) => _handleAddTodo(todo)}
        handleClearTodo={_handleClearTodo}
        handleChangeSearch={(event) => _handleChangeSearch(event)}
      />
      <Todo
        todos={todos}
        completeTodo={(id) => _completeTodo(id)}
        viewTodo={(id) => _viewTodo(id)}
        removeTodo={(id) => _removeTodo(id)}
      />
    </div>
  );
};

export default TodoList;
