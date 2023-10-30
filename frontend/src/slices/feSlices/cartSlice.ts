import { createSlice } from "@reduxjs/toolkit";

import { ProductType } from "../../types";
import { calcPrice } from "../../utilities/cartUtilities";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Upd single cart item
    updateCart: (state, action) => {
      const item = action.payload;
      console.log(item);

      state.cartItems = [...state.cartItems, { ...item, qty: item.qty }];

      // console.log(state.cartItems);

      calcPrice(state);

      localStorage.setItem("cart", JSON.stringify(state));
      // console.log("state.totalPrice", state.totalPrice);

      return state;
    },
    removeCartItem: () => {},
    // Add new item to cart
    addToCart: (state, action) => {
      const item = action.payload;

      console.log(item);
      item.qty = 1;
      console.log(item);

      const existItem = state.cartItems.find(
        (cartItem: ProductType) => cartItem._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: ProductType) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        // Set new cartItems Arr tho rest opr
        state.cartItems = [...state.cartItems, item];
      }

      calcPrice(state);
      // console.log(calcPrice(state));

      localStorage.setItem("cart", JSON.stringify(state));
      // console.log(state.cartItems);

      return state;
    },
    deleteFromCart: () => {
      // delete single product from cart whose qty=0
    },
  },
});

// export an action
export const { addToCart, updateCart } = cartSlice.actions;

export default cartSlice.reducer;
