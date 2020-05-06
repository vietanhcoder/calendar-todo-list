import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  SEARCH_DATE_TASK,
} from "./types";
import { v4 as uuidv4 } from "uuid";
import * as helpers from "../helpers/index";
const initialState = {
  visibleTodoList: [
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
  ],
  initialTodoList: [
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
  ],
  loading: false,
  error: false,
  dateSearch: "",
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        visibleTodoList: [...state.visibleTodoList, action.payload],
        initialTodoList: [...state.visibleTodoList, action.payload],
      };
    }
    case COMPLETE_TASK: {
      return {
        ...state,
        visibleTodoList: state.visibleTodoList.map((todo) => {
          if (todo.id === action.payload.id) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    }
    case REMOVE_TASK: {
      return {
        ...state,
        visibleTodoList: state.visibleTodoList.filter(
          (todo) => todo.id !== action.payload.id
        ),
      };
    }
    case SEARCH_DATE_TASK: {
      console.log(helpers);
      return {
        ...state,
        visibleTodoList: state.initialTodoList.filter((todo) =>
          helpers.formatDate(todo.date).indexOf(action.payload.date)
        ),
      };
    }
    default:
      return state;
  }
};

export default reducers;
