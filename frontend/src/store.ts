import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./slices/authorizeSlice";

const store = configureStore({
  reducer: { authentication: authenticationReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
