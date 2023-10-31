import { createSlice, current } from "@reduxjs/toolkit";

// import { ProductType } from "../../types";
import { calcPrice } from "../../utilities/cartUtilities";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : {
      cartItems: [],
      prices: {},
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartItem: (state, action) => {
      const item = action.payload[0];
      const numberChanged = action.payload[1];
      // Init check and remove cartItem with qty 0
      // @ts-ignore
      state.cartItems = state.cartItems.filter((el) => el.qty > 0);

      // Find if product already existed in cart
      // @ts-ignore
      const existItem = state.cartItems.find((el) => {
        return el._id === item._id;
      });

      // Update product if existed, add to cart if not
      if (existItem) {
        // @ts-ignore
        state.cartItems = state.cartItems.map((el) => {
          if (el._id === existItem._id) {
            return { ...el, qty: el.qty + numberChanged };
          } else {
            return el;
          }
        });

        // Handle decrease cart item amount to zero
        const updatedItem = state.cartItems.find(
          // @ts-ignore
          (cartItem) => cartItem._id === item._id
        );
        // Remove existed cart item if qty is 0
        if (updatedItem.qty === 0) {
          state.cartItems.splice(state.cartItems.indexOf(updatedItem), 1);
        }
      } else {
        state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
      }

      // Calculate prices
      calcPrice(state);

      // Save cart items to local storage
      localStorage.setItem("cart", JSON.stringify(state));

      // Watch state change
      console.log(current(state));

      return state;
    },
  },
});

// export an action
export const { updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
