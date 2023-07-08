import { useEffect, useState } from "react";
import styles from "../styles/home.module.css";
import { Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState({
    title: props.product.title,
    description: props.product.description,
    rating: props.product.rating,
    price: props.product.price,
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (props.editing.isEdit && props.product === props.editing.product) {
      setEdit(true);
    }
  }, [props.editing.isEdit, props.product, props.editing.product]);

  const renderProductDetails = (product) => {
    navigate("/product-details", {
      state: {
        product,
        cartFunction: 2,
      },
    });
  };

  return (
    <div className={styles.productDiv}>
      <div className={styles.productImage}>
        <img
          src={props.product.thumbnail}
          alt=""
          onClick={() => renderProductDetails(props.product)}
        />
      </div>
      <div className={styles.titleRating}>
        {edit ? (
          <input
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
          />
        ) : (
          <h3 onClick={() => renderProductDetails(props.product)}>
            {props.product.title}
          </h3>
        )}

        <div className={styles.rating}>
          <p>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              value={props.product.rating}
              precision={0.1}
              readOnly
            />
          </p>
          {edit ? (
            <input
              value={data.rating}
              onChange={(e) => setData({ ...data, rating: e.target.value })}
            />
          ) : (
            <p>({props.product.rating})</p>
          )}
        </div>
      </div>
      <div className={styles.description}>
        {edit ? (
          <textarea
            value={data.description}
            className={styles.inputDescription}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          ></textarea>
        ) : (
          <p>{props.product.description}</p>
        )}
      </div>
      <div className={styles.priceButtons}>
        <div className={styles.price}>
          <p>Price</p>
          {edit ? (
            <input
              value={data.price}
              onChange={(e) => setData({ ...data, price: e.target.value })}
            />
          ) : (
            <h3>
              $ <span>{props.product.price}</span>
            </h3>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.cartBtn}
            onClick={() => props.cartFunction(props.product)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className={styles.bottomButtons}>
        {edit ? (
          <button>
            <i
              className="fa-solid fa-floppy-disk"
              style={{ color: "#609966" }}
              onClick={() => {
                setEdit(false);
                const product = props.editing.product;
                product.title = data.title;
                product.price = data.price;
                product.description = data.description;
                product.rating = data.rating;
                props.editFunction(product, false);
              }}
            ></i>
          </button>
        ) : (
          <button>
            <i
              className="fa-solid fa-pen"
              onClick={() => props.editFunction(props.product, true)}
            ></i>
          </button>
        )}

        <button onClick={() => props.deleteFunction(props.product)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
