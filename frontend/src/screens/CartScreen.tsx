import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";
import { cartItemType } from "../types";

interface CartScreenProps {}

const CartScreen: React.FunctionComponent<CartScreenProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get global cart state
  // @ts-ignore
  const cartState = useSelector((state) => state.cart);
  const { cartItems } = cartState;

  // Define booleans
  const isCartEmpty = cartItems.length === 0;

  return (
    <div className="cart-screen-wrapper">
      <h1 className="cart-screen__heading">Shopping Cart</h1>
      <div className="cart-screen__body-wrapper">
        {isCartEmpty ? (
          <>
            <p className="cart-screen__text--is-empty">
              Your cart is empty. <Link to="/">Go Back</Link>
            </p>
          </>
        ) : (
          <>
            <div className="cart-screen__items">
              {cartItems.map((cartItem: cartItemType) => (
                <div className="cart-screen__item">
                  <img
                    className="cart-screen__item-image"
                    src={cartItem.image}
                    alt={cartItem.name}
                  />

                  <Link
                    className="cart-screen__item-name"
                    to={`/products/${cartItem._id}`}
                  >
                    {cartItem.name}
                  </Link>

                  <p className="cart-screen__item-price">${cartItem.price}</p>

                  <div className="cart-screen__item-qty-wrapper">
                    <div className="cart-screen__item-qty__label">
                      Quantity:
                    </div>
                    <div className="cart-screen__item-qty__btns">
                      <button
                        className="cart-screen__item-qty__btn cart-screen__item-qty__btn--minus"
                        disabled={false}
                      >
                        -
                      </button>
                      <span className="cart-screen__item-qty__btn-label">
                        {cartItem.qty}
                      </span>
                      <button className="cart-screen__item-qty__btn cart-screen__item-qty__btn--plus">
                        +
                      </button>
                    </div>
                  </div>

                  <button className="cart-screen__item-btn">
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
