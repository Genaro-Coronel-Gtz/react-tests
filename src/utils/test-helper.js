import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";
import { initialState } from "./redux-mockups";
import App from "App";

export default function visit(url, reduxState = initialState) {
  const middlewares = [thunk];

  const mockStore = configureStore(middlewares);

  const store = mockStore(reduxState);

  return render(
    <MemoryRouter initialEntries={[url]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
}
