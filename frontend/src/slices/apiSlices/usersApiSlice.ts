// Endpoints to work with BE
import { apiSlice } from "../apiSlice";
const USERS_URL = "/api/users";

export const usersApiSlice = apiSlice.injectEndpoints({
  //inject to builder in apiSLice
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/authorize`,
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation } = usersApiSlice;