import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import store from "./store.ts";
import { Provider } from "react-redux";

import App from "./App.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import HomeScreen from "./screens/HomeScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
import ProductScreen from "./screens/ProductScreen.tsx";
import CartScreen from "./screens/CartScreen.tsx";
import CheckoutScreen from "./screens/CheckoutScreen.tsx";
import PaymentScreen from "./screens/PaymentScreen.tsx";
import "./assets/styles/index.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/styles/bootstrap.custom.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/products/:id" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      {/* Private Routes: */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
