import { current } from "@reduxjs/toolkit";

import { cartStateType } from "../types";

export const addDecimals = (num: number) => {
  return Number((Math.round(num * 100) / 100).toFixed(2));
};

export const calcPrice = (state: cartStateType) => {
  const prices = state.cartPrices;
  // Calc item price
  prices.itemsPrice = addDecimals(
    state.cartItems.reduce(
      (acc: number, cartItem) => acc + cartItem.price * cartItem.qty,
      0
    )
  );
  // deliver fee - over 100 free, over 50 8$, less 50 10$
  if (prices.itemsPrice >= 100) {
    prices.deliverPrice = 0;
  } else if (prices.itemsPrice > 50) {
    prices.deliverPrice = 6;
  } else {
    prices.deliverPrice = 10;
  }

  // Montreal tax price - 15%
  prices.taxPrice = addDecimals(Number((0.15 * prices.itemsPrice).toFixed(2)));

  // Total price
  prices.totalPrice = Number(
    (prices.itemsPrice + prices.deliverPrice + prices.taxPrice).toFixed(2)
  );

  return state;
};

export const updateState = (state: cartStateType) => {
  // Calculate prices
  calcPrice(state);

  // Save cart items to local storage
  localStorage.setItem("cart", JSON.stringify(state));

  // Watch state change
  console.log(current(state));

  return state;
};
