import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.leftNav}>
        <Link to={"/"}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/color/48/online-store.png"
            alt="online-store"
            style={{ marginRight: "0.8rem" }}
          />
          <h2>eCommerce</h2>
        </Link>
        <Link to={"/add-product"}>Add Product</Link>
      </div>
      <div className={styles.rightNav}>
        <Link to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
        <div>
          <img
            src="https://img.icons8.com/color/96/user-male-circle--v1.png"
            alt="user-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
