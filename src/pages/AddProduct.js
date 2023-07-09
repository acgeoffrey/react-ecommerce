import { useState } from "react";
import styles from "../styles/addproduct.module.css";
import { addProduct } from "../actions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddProduct = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [stock, setStock] = useState();
  const store = props.store;
  const navigate = useNavigate();

  const addProductStore = () => {
    store.dispatch(
      addProduct({
        title,
        description,
        thumbnail,
        images,
        price,
        rating,
        stock,
      })
    );
    navigate("/");
    toast.success("New Product Added");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h3>Add a Product</h3>
        <h4>Name</h4>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <h4>Description</h4>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <h4>Price</h4>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <h4>Rating</h4>
        <input value={rating} onChange={(e) => setRating(e.target.value)} />
        <h4>Thumbnail URL</h4>
        <input
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
        />
        <h4>Image URL</h4>
        <input value={images} onChange={(e) => setImages([e.target.value])} />
        <h4>Stock Available</h4>
        <input value={stock} onChange={(e) => setStock(e.target.value)} />
        <button className={styles.addProductBtn} onClick={addProductStore}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
