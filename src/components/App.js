import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import AddProduct from "../pages/AddProduct";

const Page404 = () => {
  return <h1>404</h1>;
};

const App = (props) => {
  const [cartCount, setCartCount] = useState(0);

  const cartCountFunc = () => {
    const cart = props.store.getState().cart;
    let tempCount = 0;
    for (let i = 0; i < cart.length; i++) {
      tempCount += cart[i].cart;
    }
    setCartCount(tempCount);
  };

  return (
    <div className="container">
      <BrowserRouter basename="/react-ecommerce">
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route
            path="/"
            element={
              <Home store={props.store} cartCountFunction={cartCountFunc} />
            }
          />
          <Route
            path="/add-product"
            element={<AddProduct store={props.store} />}
          />
          <Route
            path="/cart"
            element={
              <Cart store={props.store} cartCountFunction={cartCountFunc} />
            }
          />
          <Route
            path="/product-details"
            element={
              <ProductDetails
                store={props.store}
                cartCountFunction={cartCountFunc}
              />
            }
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
