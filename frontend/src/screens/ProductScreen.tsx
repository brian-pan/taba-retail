import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import products from "../assets/products";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  // const productId = useParams().id;
  const { id: productId } = useParams();
  const product = products.find((prod) => prod._id === productId);

  return (
    <>
      <div className="product-screen-wrapper">
        <div className="product-screen__backwards-cta-wrapper">
          <Link
            className="button button-light button-borderless product-screen__backwards-cta"
            to="/"
          >
            Back
          </Link>
        </div>
        <div className="product-screen__body-wrapper">
          <div className="product-screen__image">
            <img src={product?.image} alt={product?.name} aria-hidden={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
