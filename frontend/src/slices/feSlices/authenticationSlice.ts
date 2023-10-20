import { createSlice } from "@reduxjs/toolkit";

// Get user from localStorage attempt
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    // state logics (fe/local)

    // set user info to local storage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },

    // logout
    clearCredentials: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, clearCredentials } = authenticationSlice.actions;

export default authenticationSlice.reducer;
