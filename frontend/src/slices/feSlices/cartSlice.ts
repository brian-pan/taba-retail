import { createSlice } from "@reduxjs/toolkit";

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

      let isItemExisted = false;
      if (state.cartItems.forEach((cartItem) => cartItem._id === item._id)) {
        isItemExisted = true;
      }

      if (isItemExisted) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem._id === item._id ? item : cartItem
        );
      } else {
        state.cartItems = [...state.cartItem, item];
      }

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
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice.toFixed(2)));

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
