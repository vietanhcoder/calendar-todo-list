import React, { useState } from "react";
import Todo from "./Components/Todo";
import TodoForm from "./Components/TodoForm.js";
import { connect } from "react-redux";
import * as helpers from "../../helpers";
import {
  setTasks,
  ToggleCompletion,
  removeTodo,
  searchTasks,
} from "../../redux/actions";

const TodoList = ({
  visibleTodoList,
  setTasks,
  ToggleCompletion,
  removeTodo,
  searchTasks,
}) => {

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
    setTasks(emptyArray);
  };
  const _completeTodo = (id) => {
    ToggleCompletion(id);
  };
  const _removeTodo = (id) => {
    removeTodo(id);
  };

  const _viewTodo = (id) => {
    console.log("OUTPUT: _viewTodo -> id", id);
  };

  const _handleChangeSearch = (event) => {
    const { value } = event.target;
    if (value !== "") {
      searchTasks(value);
    }
  };
  // ENd format date =================
  return (
    <div>
      <TodoForm
        handleClearTodo={_handleClearTodo}
        handleChangeSearch={(event) => _handleChangeSearch(event)}
      />
      <Todo
        visibleTodoList={visibleTodoList}
        completeTodo={(id) => _completeTodo(id)}
        viewTodo={(id) => _viewTodo(id)}
        removeTodo={(id) => _removeTodo(id)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  const {
    todoReducers: {
      visibleTodoList,
      initialTodoList,
      loading,
      error,
      dateSearch,
    },
  } = state;
  return {
    visibleTodoList,
    initialTodoList,
    loading,
    error,
    dateSearch,
  };
};

const mapDispatchToProps = {
  setTasks,
  ToggleCompletion,
  removeTodo,
  searchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
