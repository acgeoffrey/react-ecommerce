import { useEffect, useState } from "react";
import ProductCart from "../components/ProductCart";
import styles from "../styles/cart.module.css";
import { decreaseCartQty, increaseCartQty } from "../actions";

const Cart = (props) => {
  const store = props.store;
  const cart = store.getState().cart;
  const [cartTotal, setCartTotal] = useState(0);
  const [render, setRender] = useState(false);

  useEffect(() => {
    store.subscribe(() => setRender(true));
    cartTotalFunction();
  }, [store, cart]);

  const cartTotalFunction = () => {
    let total = 0;
    cart.map((product) => (total += product.price * product.cart));
    setCartTotal(total);
  };

  const increaseCartItem = (product) => {
    store.dispatch(increaseCartQty(product));
    cartTotalFunction();
    props.cartCountFunction();
  };

  const decreaseCartItem = (product) => {
    store.dispatch(decreaseCartQty(product));
    cartTotalFunction();
    props.cartCountFunction();
  };

  if (cart.length < 1) {
    return <h2 className={styles.noItems}>No items to display!</h2>;
  }
  return (
    <div className={styles.container}>
      <h3>Order Summary</h3>
      <div className={styles.cartContainer}>
        <div className={styles.productsContainer}>
          {cart.map((product) => (
            <ProductCart
              product={product}
              increaseFunction={increaseCartItem}
              decreaseFunction={decreaseCartItem}
              key={`product-${product.id}`}
            />
          ))}
        </div>
        <div className={styles.cartSummary}>
          <div className={styles.cartSummaryBottom}>
            <div className={styles.subTotal}>
              <h4>Total</h4>
              <p>${cartTotal}</p>
            </div>
            <button className={styles.confirmOrder}>Confirm Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
