import { configureStore } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

export const history = createBrowserHistory();

const loadState = () => {
  try {
    const serializeState = localStorage.getItem("state");

    if (serializeState === null) {
      return {};
    }
    return JSON.parse(serializeState);
  } catch (err) {
    return {};
  }
};

const saveState = (state) => {
  // PREVENT SAVE
  const { createLabel: _, invoices, sidebard, ...toSave } = state;

  try {
    const serializedState = JSON.stringify(toSave);

    localStorage.setItem("state", serializedState);
  } catch (err) {
    // Ignorar
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducers,
  middleware: [thunk, routerMiddleware(history)],
  devTools:
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__,
  preloadedState,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

export default store;
