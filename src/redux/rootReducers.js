import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import movies from "./Movies/reducer";

const rootReducers = combineReducers({
  routing: routerReducer,
  movies,
});

export default rootReducers;
