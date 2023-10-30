import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import { useGetProductDetailsQuery } from "../slices/apiSlices/productsApiSlice";
import { addToCart, updateCart } from "../slices/feSlices/cartSlice";

interface ProductScreenProps {}

const ProductScreen: React.FunctionComponent<ProductScreenProps> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const productId = useParams().id;
  const { id: productId } = useParams();

  const cart = useSelector((state: any) => state.cart);

  const [qty, setQty] = useState<number>(0);

  // Get prod dtls data from db
  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productId);

  const onMinusBtnClick = () => {
    if (qty > 0) {
      setQty(qty - 1);
      dispatch(updateCart({ ...product, qty: qty }));
    }
  };

  const onPlusBtnClick = () => {
    if (product.numberInStock) {
      if (qty < product.numberInStock) {
        setQty(qty + 1);
      }
    } else {
      setQty(qty + 1);
    }
    dispatch(updateCart({ ...product, qty: qty }));
  };

  const handleAddToCart = () => {
    console.log(cart);

    if (qty === 0) {
      setQty(1);
      dispatch(addToCart({ ...product, qty: qty }));
    }

    navigate(`/products/${productId}`); // change to /cart required
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
                {qty > 0 ? (
                  <>
                    {product.isInStock && (
                      <div>
                        <div>Quantity:</div>
                        <div>
                          <button onClick={onMinusBtnClick}>-</button>
                          <span>{qty}</span>
                          <button onClick={onPlusBtnClick}>+</button>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <button
                      disabled={!product?.isInStock}
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
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
