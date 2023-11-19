import * as React from "react";
import { Link } from "react-router-dom";

interface PaymentScreenProps {}

const PaymentScreen: React.FunctionComponent<PaymentScreenProps> = (props) => {
  return (
    <div className="payment-screen-wrapper">
      <div className="payment-screen__back-cta-wrapper">
        <Link className="payment-screen__back-cta" to="/checkout">
          Back
        </Link>
      </div>
      <div></div>
    </div>
  );
};

export default PaymentScreen;
