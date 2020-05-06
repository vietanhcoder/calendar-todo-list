import React from "react";
import { Button, Col, Row } from "reactstrap";

const Todo = (props) => {
  const { visibleTodoList } = props;
  console.log("OUTPUT: Todo -> visibleTodoList", visibleTodoList);
  
  return (
    <>
      <div className="todo__wrapper">
        <ul className="list-wrapper">
          {visibleTodoList.length > 0 ? (
            visibleTodoList.map((todo, idx) => {
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
                          {todo.date}
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
