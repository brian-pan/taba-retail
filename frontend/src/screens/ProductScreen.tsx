import * as React from "react";
import { useParams } from "react-router-dom";

import products from "../assets/products";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  // const productId = useParams().id;
  const { id: productId } = useParams();
  const product = products.find((prod) => prod._id === productId);
  console.log(product);

  return <div>Product Screen</div>;
};

export default ProductScreen;
