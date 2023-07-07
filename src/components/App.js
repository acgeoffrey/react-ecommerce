import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreContext } from "..";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";

const Page404 = () => {
  return <h1>404</h1>;
};

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

class AppWrapper extends React.Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <App store={store} />}
      </StoreContext.Consumer>
    );
  }
}

export default AppWrapper;
