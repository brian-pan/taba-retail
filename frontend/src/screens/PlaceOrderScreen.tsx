import * as React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toast } from "react-toastify";
import Loader from "../components/Loader";
import { useCreateOrderMutation } from "../slices/apiSlices/orderApiSlice";
import { clearCartItems } from "../slices/feSlices/cartSlice";
import { cartItemType } from "../types";

interface PlaceOrderScreenProps {}

const PlaceOrderScreen: React.FunctionComponent<PlaceOrderScreenProps> = (
  props
) => {
  //@ts-ignore
  const cart = useSelector((state) => state.cart);
  const { itemsPrice, deliverPrice, taxPrice, totalPrice } = cart.cartPrices;
  const { shippingAddress, paymentMethod } = cart.cartOrderInfo;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(cart);
  }, []);

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/checkout");
    } else if (!paymentMethod) {
      navigate("/payment");
    }
  }, [shippingAddress, paymentMethod, navigate]);

  return (
    <div className="place-order-screen-wrapper">
      <div>
        <div>
          <h2>Shipping</h2>
          <p>
            <span>Address: </span>
            {shippingAddress.address}, {shippingAddress.area},{" "}
            {shippingAddress.province} {shippingAddress.postalCode}
          </p>
        </div>
        <div>
          <h2>Payment Method</h2>
          <p>
            <span>Method:</span> {paymentMethod}
          </p>
        </div>
        <div>
          <h2>Order Items</h2>

          {cart.cartItems.length === 0 ? (
            "Your cart is empty"
          ) : (
            <>
              <div>
                {cart.cartItems.map((cartItem: cartItemType, index: number) => (
                  <div key={index}>
                    <div>
                      <img src={cartItem.image} alt={cartItem.name} />
                    </div>
                    <div>{cartItem.name}</div>
                    <div></div>
                    <div></div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        <div>
          <h2>Order Summary</h2>
          <div>
            <div>Items:</div>
            <div>
              <span>$</span>
              <span>{itemsPrice}</span>
            </div>
          </div>
          <div>
            <div>Deliver:</div>
            <div>
              <span>$</span>
              <span>{deliverPrice}</span>
            </div>
          </div>
          <div>
            <div>Tax:</div>
            <div>
              <span>$</span>
              <span>{taxPrice}</span>
            </div>
          </div>
          <div>
            <div>Total:</div>
            <div>
              <span>$</span>
              <span>{totalPrice}</span>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PlaceOrderScreen;
