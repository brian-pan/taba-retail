// make async call to BE with thunk middleware
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

// boilerplate
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Product", "Order"], //cache
  endpoints: (builder) => ({}),
});
