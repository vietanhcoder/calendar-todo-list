import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  SEARCH_DATE_TASK,
} from "./types";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  visibleTodoList: [
    {
      id: uuidv4(),
      title: "task default 1",
      isCompleted: false,
      date: '5/6/2020'
    },
    {
      id: uuidv4(),
      title: "task default 2",
      isCompleted: false,
      date: '5/7/2020'
    },
  ],
  loading: false,
  error: false,
  dateSearch: "",
  title: ''
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      return {
        ...state,
        visibleTodoList: [...state.visibleTodoList, action.payload],
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
      const newTodoLists = state.visibleTodoList.filter(todo => todo.date === action.payload)
      return {
        ...state,
        visibleTodoList: newTodoLists
      }
    }
    default:
      return state;
  }
};

export default reducers;
