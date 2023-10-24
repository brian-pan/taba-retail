import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Product from "../components/Product.tsx";

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="home-screen-wrapper">
        <h1>Discover Our Products</h1>
        <div>
          {products.map((product, index) => {
            return (
              <Product key={product._id} product={product} index={index} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
