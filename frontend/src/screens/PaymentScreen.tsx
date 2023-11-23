import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface PaymentScreenProps {}

const PaymentScreen: React.FunctionComponent<PaymentScreenProps> = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  useEffect(() => {
    console.log(paymentMethod);
  }, [paymentMethod]);

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
                onChange={(e) => setPaymentMethod(e.target.value)}
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
                onChange={(e) => setPaymentMethod(e.target.value)}
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
                onChange={(e) => setPaymentMethod(e.target.value)}
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
      </div>
      <div className="payment-screen__next-cta-wrapper">
        <Link className="payment-screen__back-cta" to="/checkout">
          Save & Continue
        </Link>
      </div>
    </div>
  );
};

export default PaymentScreen;
