import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";

interface CartScreenProps {}

const CartScreen: React.FunctionComponent<CartScreenProps> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return <div>cart screen</div>;
};

export default CartScreen;
