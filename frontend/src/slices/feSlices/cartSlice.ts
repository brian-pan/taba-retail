import { createSlice } from "@reduxjs/toolkit";

// import { ProductType } from "../../types";
import { updateState } from "../../utilities/cartUtilities";
import { cartItemType } from "../../types";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : {
      cartItems: [],
      cartPrices: {},
      cartOrderInfo: {
        isPickUp: true,
        shippingAddress: {},
        personalInfo: {},
        paymentMethod: "PayPal",
      },
    };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Fn add, del, remove item in cart
    updateCartItem: (state, action) => {
      const item = action.payload[0];
      const numberChanged = action.payload[1];
      // Init check and remove cartItem with qty 0
      state.cartItems = state.cartItems.filter(
        (cartItem: cartItemType) => cartItem.qty > 0
      );

      // Find if product already existed in cart
      const existItem = state.cartItems.find((cartItem: cartItemType) => {
        return cartItem._id === item._id;
      });

      // Update product if existed, add to cart if not
      if (existItem) {
        state.cartItems = state.cartItems.map((cartItem: cartItemType) => {
          if (cartItem._id === existItem._id) {
            return { ...cartItem, qty: cartItem.qty + numberChanged };
          } else {
            return cartItem;
          }
        });

        // Handle decrease cart item amount to zero
        const updatedItem = state.cartItems.find(
          (cartItem: cartItemType) => cartItem._id === item._id
        );
        // Remove existed cart item if qty is 0
        if (updatedItem.qty === 0) {
          state.cartItems.splice(state.cartItems.indexOf(updatedItem), 1);
        }
      } else {
        state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
      }

      return updateState(state);
    },
    // Fn delete single item from cart
    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (cartItem: cartItemType) => cartItem._id !== action.payload
      );
      return updateState(state);
    },
    // Fn set user shipping address if applicable
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      return updateState(state);
    },
    // Fn upd bool state whether user requires deliver
    setDeliverMethod: (state, action) => {
      state.cartOrderInfo.isPickUp = action.payload;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

// export an action
export const {
  updateCartItem,
  deleteFromCart,
  saveShippingAddress,
  setDeliverMethod,
} = cartSlice.actions;

export default cartSlice.reducer;
