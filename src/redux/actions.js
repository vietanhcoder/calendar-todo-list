import { v4 as uuidv4 } from "uuid";
import {
  ADD_TASK,
  REMOVE_TASK,
  COMPLETE_TASK,
  SEARCH_DATE_TASK,
} from "./types";

export const setTasks = (title, date) => ({
  type: ADD_TASK,
  payload: {
    id: uuidv4(),
    title: title,
    isCompleted: false,
    date: date,
  },
});

export const ToggleCompletion = (id) => ({
  type: COMPLETE_TASK,
  payload: {
    id,
  },
});

export const removeTodo = (id) => ({
  type: REMOVE_TASK,
  payload: {
    id,
  },
});
export const searchTasks = (dateSearch) => ({
  type: SEARCH_DATE_TASK,
  payload: {
    dateSearch,
  },
});
