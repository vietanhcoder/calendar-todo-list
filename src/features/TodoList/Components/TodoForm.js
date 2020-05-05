import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
  Badge,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <h1 className="text-center">
        Please input <Badge color="success"> a task </Badge>
      </h1>
      <div className="form-wrapper">
        <Form>
          <FormGroup>
            <Label htmlFor="inputTask">Your Task</Label>
            <Row>
              <Col xs="8">
                <Input
                  type="text"
                  name="taskName"
                  id="inputTask"
                  placeholder="Please input your task"
                />
              </Col>
              <Col xs="4">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </Col>
            </Row>
          </FormGroup>
        </Form>
        <div className="btn-conttainer">
          <Button color="primary" className="btn-addtodo" size="lg">
            Add Task
          </Button>
          <Button color="danger" className="btn-addtodo" size="lg">
            Remove Task
          </Button>
        </div>
      </div>
    </>
  );
};

export default TodoForm;
