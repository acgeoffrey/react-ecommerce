import styles from "../styles/productdetails.module.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import toast from "react-hot-toast";
import { addToCart } from "../actions";

const ProductDetails = (props) => {
  const location = useLocation();
  const { product } = location.state;
  const store = props.store;

  const addProductToCart = (product) => {
    const cart = store.getState().cart;
    let alreadyPresent = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        toast.error("Product already in Cart!");
        alreadyPresent = true;
      }
    }
    // console.log(alreadyPresent);
    if (!alreadyPresent) {
      store.dispatch(addToCart(product));
      props.cartCountFunction();
      toast.success("Product added to Cart");
    }
  };

  return (
    <div className={styles.container}>
      <Link to={"/"}>
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <div className={styles.productContainer}>
        <img src={product.images[0]} alt="product-img" />
        <div className={styles.titleBrand}>
          <h2>{product.title}</h2>
          <h3>{product.brand}</h3>
        </div>
        <p>{product.description}</p>
        <div className={styles.rating}>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            value={product.rating}
            precision={0.1}
            readOnly
          />
          <p>({product.rating})</p>
        </div>
        <p>
          STOCK LEFT: <strong>{product.stock ? product.stock : "N/A"}</strong>
        </p>
        <div className={styles.priceCart}>
          <h3>${product.price}</h3>
          <button
            className={styles.cartBtn}
            onClick={() => addProductToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
