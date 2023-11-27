import * as React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

interface PlaceOrderScreenProps {}

const PlaceOrderScreen: React.FunctionComponent<PlaceOrderScreenProps> = (
  props
) => {
  //@ts-ignore
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod } = cart.cartOrderInfo;
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/checkout");
    } else if (!paymentMethod) {
      navigate("/payment");
    }
  }, [shippingAddress, paymentMethod, navigate]);

  return <div>Place Order</div>;
};

export default PlaceOrderScreen;
