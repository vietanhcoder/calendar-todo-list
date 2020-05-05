import React from "react";
import { Button, Col, Row } from "reactstrap";
const Todo = (props) => {
  const { todos } = props;

  const formatDate = (date) => {
    let datePicker =
      parseInt(date.getMonth() + 1) +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear();
    return datePicker;
  };
  return (
    <>
      <div className="todo__wrapper">
        <ul className="list-wrapper">
          {todos.length > 0 ? (
            todos.map((todo, idx) => {
              return (
                <li key={todo.id} className="todo-item">
                  <Row
                    style={{
                      display: "flex",
                      aligntodos: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Col xs="1" style={{ textAlign: "center" }}>
                      {idx}
                    </Col>
                    <Col xs="6">
                      <div
                        className={`todo__title ${
                          todo.isCompleted ? "completed" : ""
                        }`}
                      >
                        {todo.title}
                      </div>
                    </Col>
                    <Col>
                      <div className="todo__date-time text-center">
                        <span className="todo__date-time__content">
                          {formatDate(todo.date)}
                        </span>
                      </div>
                    </Col>
                    <Col>
                      <div className="btn-container">
                        <Button
                          color="success"
                          className="btn-addtodo"
                          size="md"
                          onClick={() => props.completeTodo(todo.id)}
                        >
                          {`${todo.isCompleted ? "Completed" : "Complete"}`}
                        </Button>
                        <Button
                          color="primary"
                          className="btn-addtodo"
                          size="md"
                          onClick={() => props.viewTodo(todo.id)}
                        >
                          View Detail
                        </Button>
                        <Button
                          color="danger"
                          className="btn-addtodo"
                          size="md"
                          onClick={() => props.removeTodo(todo.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </li>
              );
            })
          ) : (
            <p>Please, add your task to show</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Todo;
