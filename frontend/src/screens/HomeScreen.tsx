import * as React from "react";
import Hero from "../components/Hero";
import products from "../assets/products.ts";

interface HomeScreenProps {}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = (props) => {
  return (
    <>
      <div className="home-screen-wrapper">
        <h1>Discover Our Products</h1>
        <div>
          {products.map((product, index) => {
            return (
              <div className={`card card-${index + 1}`}>
                <h3>{product.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
