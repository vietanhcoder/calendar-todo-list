import React from "react";
import { Button, Col, Row } from "reactstrap";
const Todo = () => {
  return (
    <>
      <div className="todo__wrapper">
        <Row
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col xs="1" style={{ textAlign: "center" }}>
            1
          </Col>
          <Col xs="6">
            <div className="todo__title"> hello</div>
          </Col>
          <Col>
            <div className="todo__date-time text-center">
              <span className="todo__date-time__content">5/5/2020</span>
            </div>
          </Col>
          <Col>
            <div className="btn-container">
              <Button color="success" className="btn-addtodo" size="md">
                Complete
              </Button>
              <Button color="primary" className="btn-addtodo" size="md">
                View Detail
              </Button>
              <Button color="danger" className="btn-addtodo" size="md">
                Remove
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Todo;
