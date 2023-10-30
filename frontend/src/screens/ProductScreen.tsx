import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from "../slices/apiSlices/productsApiSlice";
import { updateCart } from "../slices/feSlices/cartSlice";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const productId = useParams().id;
  const { id: productId } = useParams();

  const cartState = useSelector((state: any) => state.cart);

  // Get prod dtls data from db
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  useEffect(() => {
    console.log("cartState (on loading)", cartState);
  }, []);

  const onMinusBtnClick = () => {
    console.log("product", product);
  };

  const onPlusBtnClick = () => {
    dispatch(updateCart(product));
  };

  const handleQtyChange = () => {
    console.log("handleQtyChange");
  };
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

        {isLoading ? (
          <>
            <Loader />
          </>
        ) : error ? (
          <>
            {/* @ts-ignore */}
            <div>{error?.data?.message || error.error}</div>
          </>
        ) : (
          <>
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

                {product.isInStock && (
                  <div>
                    <div>Quantity:</div>
                    <div>
                      <button onClick={onMinusBtnClick}>-</button>
                      <span>ABCD</span>
                      <button onClick={onPlusBtnClick}>+</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductScreen;
