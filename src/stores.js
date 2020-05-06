import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//import reducers

import todoReducers from "./redux/reducers";

//config for Reducers

const allReducers = {
  todoReducers,
};
const reducers = combineReducers({
  ...allReducers,
});
const stores = createStore(reducers, composeWithDevTools());
export default stores;
