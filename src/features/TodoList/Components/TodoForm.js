import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Badge,
} from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

const TodoForm = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [todo, setTodo] = useState({});

  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "") {
      const newObj = {
        id: uuidv4(),
        title: value,
        isCompleted: false,
        date: startDate,
      };
      setTodo(newObj);
    }
  };

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
                  onChange={handleChange}
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
          <Button
            color="primary"
            className="btn-addtodo"
            size="lg"
            onClick={() => props.handleAddTodo(todo)}
          >
            Add Task
          </Button>
          <Button
            color="danger"
            className="btn-addtodo"
            size="lg"
            onClick={props.handleClearTodo}
          >
            Clear Task
          </Button>
        </div>
        <h5>Search tasks by day</h5>
        <Input
          type="text"
          name="search"
          id="inputSearch"
          placeholder="Please input your date for searching"
          onChange={(event) => props.handleChangeSearch(event)}
        />
      </div>
    </>
  );
};

export default TodoForm;
