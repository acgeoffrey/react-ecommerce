import { useEffect, useState } from "react";
import Product from "../components/Product";
import styles from "../styles/home.module.css";
import { addProducts } from "../actions";

const Home = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const store = props.store;
    store.subscribe(() => {
      setProducts(store.getState().list.products);
    });

    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => store.dispatch(addProducts(json)));
  }, []);

  return (
    <div className={styles.container}>
      {products.map((product) => (
        <Product product={product} key={`product-${product.id}`} />
      ))}
    </div>
  );
};

export default Home;
