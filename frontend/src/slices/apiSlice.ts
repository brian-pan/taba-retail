// make async call to BE with thunk middleware
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// boilerplate
const baseQuery = fetchBaseQuery({
  baseUrl: "",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Products", "Orders"], //cache
  endpoints: (builder) => ({}),
});
