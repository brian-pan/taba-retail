import * as React from "react";
import { useEffect, useState } from "react";
import Product from "../components/Product.tsx";
import axios from "axios";

// import { useGetProductsQuery } from "../slices/apiSlices/productsApiSlice.ts";
interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  // const { data: products, isLoading, isError } = useGetProductsQuery();

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
            return <Product key={index} product={product} index={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
