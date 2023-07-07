import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { legacy_createStore as createStore } from "redux";

import "./index.css";
import App from "./components/App";
import rootReducer from "./reducers";

const store = createStore(rootReducer);
console.log("STATE", store);

export const StoreContext = createContext();

class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
