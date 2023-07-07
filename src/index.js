import React from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";
import { Toaster } from "react-hot-toast";

import "./styles/index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
// console.log("STATE", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
    <Toaster />
  </React.StrictMode>
);
