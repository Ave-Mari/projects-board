import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/store.js";
import { loadState, saveState } from "./store/localstorage.js";
import throttle from "lodash/throttle";
import App from "./App.jsx";
import "./index.scss";

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(
  throttle(() => {
    saveState({
      projectsList: store.getState().projectsList,
    });
  }, 1000)
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
