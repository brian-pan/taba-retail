import { createSlice } from "@reduxjs/toolkit";

import { CartItemType, ProductType } from "../../types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : { cartItems: [] };

const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existItem = state.cartItems.find(
        (cartItem: ProductType) => cartItem._id === item._id
      );

      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: ProductType) =>
          cartItem._id === existItem._id ? item : cartItem
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      console.log("state.cartItems", state.cartItems);
      // Calc item price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce(
          (acc: number, item) => acc + item.price * item.qty,
          0
        )
      );
      // deliver fee - over 100 free, over 50 8$, less 50 10$
      switch (state.deliverPrice) {
        case state.itemsPrice >= 100:
          state.deliverPrice = 0;
          break;
        case 50 <= state.itemsPrice && state.itemsPrice < 100:
          state.deliverPrice = 8;
          break;
        case state.itemsPrice < 50:
          state.deliverPrice = 10;
          break;
      }
      // Montreal tax price - 15%
      state.taxPrice = addDecimals(
        Number((0.15 * state.itemsPrice).toFixed(2))
      );

      // Total
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.deliverPrice) +
        Number(state.taxPrice)
      ).toFixed(2);

      // save to localStorage
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// export an action
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
