import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { savePaymentMethod } from "../slices/feSlices/cartSlice";

interface PaymentScreenProps {}

const PaymentScreen: React.FunctionComponent<PaymentScreenProps> = () => {
  // @ts-ignore
  const { cartOrderInfo } = useSelector((state) => state.cart);
  const { isPickUp, shippingAddress, paymentMethod } = cartOrderInfo;

  const [method, setMethod] = useState("card");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redirect to checkout page if not pickup and addr is invalid
  useEffect(() => {
    // later add shipping address validator
    if (!isPickUp && !shippingAddress) {
      navigate("/checkout");
    }
  }, [isPickUp, shippingAddress, navigate]);

  // watcher
  useEffect(() => {
    console.log("global", paymentMethod);
  }, [paymentMethod]);
  // watcher
  useEffect(() => {
    console.log("local", method);
  }, [method]);

  // Fn handle submit
  const handleSubmit = () => {
    dispatch(savePaymentMethod(method));
  };

  return (
    <div className="payment-screen-wrapper">
      <div className="payment-screen__back-cta-wrapper">
        <Link className="payment-screen__back-cta" to="/checkout">
          Back
        </Link>
      </div>
      <div className="payment-screen__body-wrapper">
        <h1 className="payment-screen__heading">Payment</h1>
        <div className="payment-screen__form-wrapper">
          <form className="payment-screen__form">
            <div className="form-group">
              <input
                className="form-input__card"
                id="formRadioCard"
                type="radio"
                name="paymentMethod"
                value="card"
                // checked
                onChange={(e) => setMethod(e.target.value)}
              />
              <label
                className="form-label form-label__card"
                htmlFor="formRadioCard"
              >
                Debit Card
              </label>
            </div>
            <div className="form-group">
              <input
                className="form-input__weChat"
                id="formRadioWeChat"
                type="radio"
                name="paymentMethod"
                value="weChat"
                onChange={(e) => setMethod(e.target.value)}
              />
              <label
                className="form-label form-label__weChat"
                htmlFor="formRadioWeChat"
              >
                WeChat Pay
              </label>
            </div>
            <div className="form-group">
              <input
                className="form-input__ali"
                id="formRadioAli"
                type="radio"
                name="paymentMethod"
                value="Ali"
                onChange={(e) => setMethod(e.target.value)}
              />
              <label
                className="form-label form-label__ali"
                htmlFor="formRadioAli"
              >
                Ali Pay
              </label>
            </div>
          </form>
        </div>
        <br />
        <div className="payment-screen__payment"></div>
      </div>
      <div className="payment-screen__next-cta-wrapper">
        <Link
          className="payment-screen__back-cta"
          to="/placeOrder"
          onClick={handleSubmit}
        >
          Save & Continue
        </Link>
      </div>
    </div>
  );
};

export default PaymentScreen;
