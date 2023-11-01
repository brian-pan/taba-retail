import * as React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from "../slices/apiSlices/productsApiSlice";
import { updateCartItem } from "../slices/feSlices/cartSlice";
import { cartItemType } from "../types";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get global cart state from redux
  const cartState = useSelector((state: any) => state.cart);

  // Get product id from url
  // const productId = useParams().id; //alt code syntax
  const { id: productId } = useParams();

  // Get prod dtls data from db
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  // Watch state upon loading product detail page
  useEffect(() => {
    console.log("cartState (on loading)", cartState);
  }, []);

  // Find product index in cartItems list/arr
  const cartItemIndex = () => {
    const cartItem = cartState.cartItems.find(
      (el: cartItemType) => el._id === productId
    );
    const res = cartState.cartItems.indexOf(cartItem);
    console.log("cartItemIndex:", res);

    return res;
  };

  // Watch cartItemIndex upon cartItems list length change
  useEffect(() => {
    cartItemIndex();
  }, [cartState.cartItems.length]);

  // Handle cta events
  const handleAddProduct = () => {
    dispatch(updateCartItem([product, 1]));
  };

  const handleRemoveProduct = () => {
    dispatch(updateCartItem([product, -1]));
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

                {cartState.cartItems[0] ? (
                  <>
                    {product.isInStock && (
                      <div>
                        <div>Quantity:</div>
                        <div>
                          <button
                            onClick={handleRemoveProduct}
                            disabled={cartState.cartItems[0].qty === 0}
                          >
                            -
                          </button>
                          <span>{cartState.cartItems[0].qty}</span>
                          <button onClick={handleAddProduct}>+</button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button onClick={handleAddProduct}>Add to Cart</button>
                  </>
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
