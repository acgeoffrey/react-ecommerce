import { useEffect, useState } from "react";
import Product from "../components/Product";
import styles from "../styles/home.module.css";
import { getProducts, updateProduct, deleteProduct } from "../actions";
import toast from "react-hot-toast";

const Home = (props) => {
  const store = props.store;
  const list = store.getState().list;

  const [editing, setEditing] = useState({
    product: {},
    isEdit: false,
  });
  const [sort, setSort] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);

  let products = [];

  const editProduct = (product, editState) => {
    if (editState) {
      setEditing({ product, isEdit: true });
      toast.success("Edit mode is ON!");
      return;
    }
    store.dispatch(updateProduct(product));
    toast.success("Product edited");
    setEditing({ product: {}, isEdit: false });
  };

  const deleteProductComponent = (product) => {
    store.dispatch(deleteProduct(product));
    toast.success("Product deleted");
  };

  const sortProducts = () => {
    setSort(!sort);
    if (!sort) {
      setSortedProducts(list?.sort((a, b) => a.price - b.price));
      toast.success("Sorted by Price");
    } else {
      setSortedProducts(list?.sort((a, b) => a.id - b.id));
    }
  };

  useEffect(() => {
    store.subscribe(() => {
      setEditing({ product: {}, isEdit: false });
    });
    if (store.getState().list.length < 1) {
      fetch("https://dummyjson.com/products?limit=10")
        .then((res) => res.json())
        .then((json) => store.dispatch(getProducts(json.products)));
    }
  }, [store]);

  products = sort ? sortedProducts : list;

  return (
    <div className={styles.container}>
      <div className={styles.sortMenu}>
        <h3>Sort</h3>
        <button
          className={sort ? styles.sortBtnActive : styles.sortBtn}
          onClick={sortProducts}
        >
          Price
        </button>
      </div>
      <div className={styles.productContainer}>
        {products.map((product) => (
          <Product
            editFunction={editProduct}
            deleteFunction={deleteProductComponent}
            editing={editing}
            product={product}
            key={`product-${product.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
