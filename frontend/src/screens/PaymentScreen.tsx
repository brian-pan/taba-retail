import * as React from "react";
import { Link } from "react-router-dom";

interface PaymentScreenProps {}

const PaymentScreen: React.FunctionComponent<PaymentScreenProps> = () => {
  return (
    <div className="payment-screen-wrapper">
      <div className="payment-screen__back-cta-wrapper">
        <Link className="payment-screen__back-cta" to="/checkout">
          Back
        </Link>
      </div>
      <div className="payment-screen__body-wrapper">
        <h1 className="payment-screen__heading">Payment</h1>
      </div>
    </div>
  );
};

export default PaymentScreen;
