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
import {connect} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from "uuid";

import { setTasks, searchTasks } from '../../../redux/actions';

import { formatDate } from '../../../helpers';

const TodoForm = ({ setTasks, searchTasks }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [searchDate, setSearchDate] = useState(new Date());
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    if (value !== "") {
      setTodo(value);
    }
  };

  const handleAddTodo = () => {
    const newObj = {
      id: uuidv4(),
      title: todo,
      isCompleted: false,
      date: formatDate(startDate),
    };
    setTodo('');
    setTasks(newObj)
  }

  const handleSearch = () => {
    const format = formatDate(searchDate);
    searchTasks(format)
  }

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
                  value={todo}
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
            onClick={handleAddTodo}
          >
            Add Task
          </Button>
          {/* <Button
            color="danger"
            className="btn-addtodo"
            size="lg"
            onClick={props.handleClearTodo}
          >
            Clear Task
          </Button> */}
        </div>
        <h5>Search tasks by day</h5>
        <DatePicker
          selected={searchDate}
          onChange={(date) => setSearchDate(date)}
        />
        <Button
            color="primary"
            className="btn-addtodo"
            size="lg"
            onClick={handleSearch}
          >
            Search
          </Button>

      </div>
    </>
  );
};

const mapDispatchToProps = {
  setTasks,
  searchTasks
};

export default connect(null, mapDispatchToProps)(TodoForm);

