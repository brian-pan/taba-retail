import * as React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDeliverMethod } from "../slices/feSlices/cartSlice";
import "../assets/styles/screens/CheckoutScreen.scss";

interface CheckoutScreenProps {}

const CheckoutScreen: React.FunctionComponent<CheckoutScreenProps> = () => {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  // @ts-ignore
  const { isPickUp } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div className="checkout-screen-wrapper">
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
    </div>
  );
};

export default CheckoutScreen;
