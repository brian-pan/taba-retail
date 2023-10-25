import * as React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  const [product, setProduct] = useState([]);
  // const productId = useParams().id;
  const { id: productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${productId}`);
      setProduct(data);
    };

    fetchProduct();
  }, [productId]);

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
          <div className="product-screen__image-wrapper">
            <img
              className="product-screen__image"
              src={product?.image}
              alt={product?.name}
              aria-hidden={true}
            />
          </div>
          <div>
            <p>{product?.category}</p>
            <h2>
              {product?.brand} {product?.name}
            </h2>
            <p>{product?.unit}</p>
          </div>
          <div>
            <p>Price: ${product?.price}</p>
            <p>
              Status:{" "}
              {product?.isInStock ? "In Stock" : "Temporarily Out of Stock"}
            </p>
            <button disabled={!product?.isInStock}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
