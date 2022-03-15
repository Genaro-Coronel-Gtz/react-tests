import { combineReducers } from "redux";

import pokemon from "./Pokemon/reducer";

const rootReducers = combineReducers({
  pokemon,
});

export default rootReducers;
