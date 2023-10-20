// Endpoints to work with BE
import { apiSlice } from "../apiSlice";
const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  //inject to builder in apiSLice
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}`,
        method: "POST",
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/authorize`,
        method: "POST",
        body: userData,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  usersApiSlice;
