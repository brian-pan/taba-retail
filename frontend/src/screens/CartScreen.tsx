import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteFromCart, updateCartItem } from "../slices/feSlices/cartSlice";
import { cartItemType } from "../types";
import { FaTrash } from "react-icons/fa";
import "../assets/styles/screens/CartScreen.scss";

interface CartScreenProps {}

const CartScreen: React.FunctionComponent<CartScreenProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get global cart state
  // @ts-ignore
  const cartState = useSelector((state) => state.cart);
  const { cartItems, cartPrices } = cartState;

  // Define booleans
  const isCartEmpty = cartItems.length === 0;

  const numItems = cartItems.reduce(
    (acc: number, item: cartItemType) => acc + item.qty,
    0
  );

  const handleAddCartItem = (cartItem: cartItemType) => {
    dispatch(updateCartItem([cartItem, 1]));
  };

  const handleRemoveCartItem = (cartItem: cartItemType) => {
    dispatch(updateCartItem([cartItem, -1]));
  };

  const handleDeleteCartItem = (id: string) => {
    dispatch(deleteFromCart(id));
  };

  const handleCheckout = () => {
    navigate("/login?redirect=/shipping");
  };
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
                <div className="cart-screen__item" key={cartItem._id}>
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
                    {/* <div className="cart-screen__item-qty__label">
                      Quantity:
                    </div> */}
                    <div className="cart-screen__item-qty__btns">
                      <button
                        className="cart-screen__item-qty__btn cart-screen__item-qty__btn--minus"
                        onClick={() => handleRemoveCartItem(cartItem)}
                        disabled={false}
                      >
                        -
                      </button>
                      <span className="cart-screen__item-qty__btn-label">
                        {cartItem.qty}
                      </span>
                      <button
                        onClick={() => handleAddCartItem(cartItem)}
                        className="cart-screen__item-qty__btn cart-screen__item-qty__btn--plus"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    className="cart-screen__item-btn"
                    onClick={() => handleDeleteCartItem(cartItem._id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-screen__totals">
              <h2>
                Subtotal of ({numItems}) item{numItems > 1 && "s"}: $
                {cartPrices.itemsPrice}
              </h2>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartScreen;
