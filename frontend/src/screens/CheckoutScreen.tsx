import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import ShippingForm from "../components/ShippingForm";
import UserInfoForm from "../components/UserInfoForm";
import { setDeliverMethod } from "../slices/feSlices/cartSlice";
import "../assets/styles/screens/CheckoutScreen.scss";

interface CheckoutScreenProps {}

const CheckoutScreen: React.FunctionComponent<CheckoutScreenProps> = () => {
  // @ts-ignore
  const { cartOrderInfo } = useSelector((state) => state.cart);
  const { isPickUp } = cartOrderInfo;

  const dispatch = useDispatch();

  return (
    <div className="checkout-screen-wrapper">
      <div className="checkout-screen__heading-wrapper">
        <Link className="checkout-screen__heading-cta" to="/cart">
          Back
        </Link>
        <h1 className="checkout-screen__heading">Checkout</h1>
      </div>
      <div className="checkout-screen__content-wrapper">
        <div className="checkout-screen__switchers">
          <button
            className={`checkout-screen__switcher ${
              isPickUp && "checkout-screen__switcher--active"
            }`}
            onClick={() => dispatch(setDeliverMethod(true))}
          >
            Pick Up
          </button>
          <button
            className={`checkout-screen__switcher ${
              !isPickUp && "checkout-screen__switcher--active"
            }`}
            onClick={() => dispatch(setDeliverMethod(false))}
          >
            Deliver
          </button>
        </div>
        <br />
        {!isPickUp && <ShippingForm />}
        <br />
        <UserInfoForm />
      </div>
      <div className="checkout-screen__cta-wrapper">
        <Link className="checkout-screen__cta" to="/payment">
          Save & Continue
        </Link>
      </div>
    </div>
  );
};

export default CheckoutScreen;
