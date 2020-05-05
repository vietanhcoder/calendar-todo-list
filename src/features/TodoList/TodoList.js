import React, { useState, useEffect } from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm.js";
import { v4 as uuidv4 } from "uuid";
const TodoList = () => {
  const [todosVisible, setTodosVisible] = useState([
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
  const [todosInitial, setTodosInitial] = useState([
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
      const newArray = [newObj, ...todosVisible];
      setTodosVisible(newArray);
      setTodosInitial(newArray);
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
    setTodosVisible(emptyArray);
  };
  const _completeTodo = (id) => {
    const completedTodos = [...todosVisible];
    completedTodos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      } else {
        return todo;
      }
    });
    setTodosVisible(completedTodos);
    setTodosInitial(completedTodos);
  };
  const _removeTodo = (id) => {
    const removeTodo = todosVisible.filter((item) => item.id !== id);
    setTodosVisible(removeTodo);
    setTodosInitial(removeTodo);
  };

  const _viewTodo = (id) => {
    console.log("OUTPUT: _viewTodo -> id", id);
  };

  const formatDate = (date) => {
    let datePicker =
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear();
    return datePicker;
  };
  // End format date =================

  const _handleChangeSearch = (event) => {
    const { value } = event.target;
    if (value !== "") {
      const searchArray = todosInitial.filter(
        (todo) => formatDate(todo.date).indexOf(value) !== -1
      );
      setTodosVisible(searchArray);
    }
  };
  // ENd format date =================
  return (
    <div>
      <TodoForm
        handleAddTodo={(todo) => _handleAddTodo(todo)}
        handleClearTodo={_handleClearTodo}
        handleChangeSearch={(event) => _handleChangeSearch(event)}
      />
      <Todo
        todosVisible={todosVisible}
        completeTodo={(id) => _completeTodo(id)}
        viewTodo={(id) => _viewTodo(id)}
        removeTodo={(id) => _removeTodo(id)}
      />
    </div>
  );
};

export default TodoList;
