import * as React from "react";
import Product from "../components/Product.tsx";
import products from "../assets/products.ts";

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
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
