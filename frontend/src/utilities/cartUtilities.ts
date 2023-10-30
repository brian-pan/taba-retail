export const addDecimals = (num: number) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

// state type req.
// @ts-ignore
export const calcPrice = (state) => {
  // Calc item price
  state.itemsPrice = addDecimals(
    state.cartItems.reduce(
      // item type required
      // @ts-ignore
      (acc: number, cartItem) => acc + cartItem.price * cartItem.qty,
      0
    )
  );
  // deliver fee - over 100 free, over 50 8$, less 50 10$
  if (state.itemsPrice >= 100) {
    state.deliverPrice = 0;
  } else if (state.itemsPrice > 50) {
    state.deliverPrice = 6;
  } else {
    state.deliverPrice = 10;
  }

  // Montreal tax price - 15%
  state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)));

  // Total
  state.totalPrice = (
    Number(state.itemsPrice) +
    Number(state.deliverPrice) +
    Number(state.taxPrice)
  ).toFixed(2);

  // save to localStorage
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
