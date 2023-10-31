import { createSlice, current } from "@reduxjs/toolkit";

import { ProductType } from "../../types";
import { calcPrice } from "../../utilities/cartUtilities";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") as string)
  : {
      cartItems: [],
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

        // remove existed cart item if qty is 0
        const updatedItem = state.cartItems.find(
          // @ts-ignore
          (cartItem) => cartItem._id === item._id
        );
        if (updatedItem.qty === 0) {
          state.cartItems.splice(state.cartItems.indexOf(updatedItem), 1);
        }
        console.log(state.cartItems);
      } else {
        state.cartItems = [...state.cartItems, { ...item, qty: 1 }];
      }

      return state;
    },
    // // Upd single cart item
    // updateCart: (state, action) => {
    //   const item = action.payload;
    //   console.log(item);
    //   state.cartItems = [...state.cartItems, { ...item, qty: item.qty }];
    //   // console.log(state.cartItems);
    //   calcPrice(state);
    //   localStorage.setItem("cart", JSON.stringify(state));
    //   // console.log("state.totalPrice", state.totalPrice);
    //   return state;
    // },
    // removeCartItem: () => {},
    // // Add new item to cart
    // addToCart: (state, action) => {
    //   const item = action.payload;
    //   console.log(item);
    //   item.qty = 1;
    //   console.log(item);
    //   const existItem = state.cartItems.find(
    //     (cartItem: ProductType) => cartItem._id === item._id
    //   );
    //   if (existItem) {
    //     state.cartItems = state.cartItems.map((cartItem: ProductType) =>
    //       cartItem._id === existItem._id ? item : cartItem
    //     );
    //   } else {
    //     // Set new cartItems Arr tho rest opr
    //     state.cartItems = [...state.cartItems, item];
    //   }
    //   calcPrice(state);
    //   // console.log(calcPrice(state));
    //   localStorage.setItem("cart", JSON.stringify(state));
    //   // console.log(state.cartItems);
    //   return state;
    // },
    // deleteFromCart: () => {
    //   // delete single product from cart whose qty=0
    // },
  },
});

// export an action
export const { updateCartItem } = cartSlice.actions;

export default cartSlice.reducer;
