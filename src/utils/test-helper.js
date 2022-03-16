import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { initialState } from "./redux-mockups";
import App from "App";

export default function renderApp(reduxState = initialState) {
  const middlewares = [thunk];

  const mockStore = configureStore(middlewares);

  const store = mockStore(reduxState);

  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
