import React from "react";
import TodoList from "./features/TodoList/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
function App() {
  return (
    <div className="App">
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
