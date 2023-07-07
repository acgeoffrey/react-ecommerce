import styles from "../styles/home.module.css";
import { Rating } from "@mui/material";

const Product = (props) => {
  return (
    <div className={styles.productDiv}>
      <div className={styles.productImage}>
        <img src={props.product.thumbnail} alt="" />
      </div>
      <div className={styles.titleRating}>
        <h3>{props.product.title}</h3>
        <div className={styles.rating}>
          <p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              value={props.product.rating.toFixed(1)}
              precision={0.1}
              readOnly
            />
          </p>
          <p>({props.product.rating.toFixed(1)})</p>
        </div>
      </div>
      <div className={styles.description}>
        <p>{props.product.description}</p>
      </div>
      <div className={styles.priceButtons}>
        <div className={styles.price}>
          <p>Price</p>
          <h3>
            ₹ <span>{props.product.price * 83}</span>
          </h3>
        </div>
        <div className={styles.buttons}>
          <button className={styles.cartBtn}>Add to cart</button>
        </div>
      </div>
      <div className={styles.bottomButtons}>
        <button>
          <i className="fa-solid fa-pen"></i>
        </button>
        <button>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
