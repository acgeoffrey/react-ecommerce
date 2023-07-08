import styles from "../styles/cart.module.css";

const ProductCart = (props) => {
  const { product } = props;
  return (
    <div className={styles.productsList}>
      <div className={styles.imgName}>
        <img src={product.thumbnail} alt="cart-item" />
        <div className={styles.namePrice}>
          <p>{product.title}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <div className={styles.addRemove}>
        <button
          className={styles.addBtn}
          onClick={() => props.increaseFunction(product)}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
        <p>{product.cart}</p>
        <button
          className={styles.removeBtn}
          onClick={() => props.decreaseFunction(product)}
        >
          <i className="fa-solid fa-minus"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
