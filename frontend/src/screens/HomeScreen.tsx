import * as React from "react";
import Product from "../components/Product.tsx";

import { useGetProductsQuery } from "../slices/apiSlices/productsApiSlice.ts";

interface HomeScreenProps {}

interface ProductType {
  _id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  isInStock?: boolean;
  image: string;
  description?: string;
  unit?: string;
  rating?: number;
  numberReviews?: number;
  numberInStock?: number;
}

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const { data: products, isLoading, error } = useGetProductsQuery("Product");

  return (
    <>
      {isLoading && <h2>is loading ...</h2>}
      {!isLoading && (
        <div className="home-screen-wrapper">
          <h1>Discover Our Products</h1>
          <div>
            {products.map((product: ProductType, index: number) => {
              return <Product key={index} product={product} index={index} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeScreen;
