import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token_jwt: "",
  isLogin: false,
};

const tokenSlices = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token_jwt = action.payload;
    },
    addLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { addToken, addLogin } = tokenSlices.actions;

export default tokenSlices.reducer;
