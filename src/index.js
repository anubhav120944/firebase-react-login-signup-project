import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers, createStore } from "redux";
import { useReducer } from "./store/reducer";
import { Provider } from "react-redux";

const rootReducer = combineReducers({ user: useReducer });
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
