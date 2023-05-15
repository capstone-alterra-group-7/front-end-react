import { createSlice } from "@reduxjs/toolkit";

const urlParams = window.location.pathname;

const initialState = {
  isActive: urlParams,
};

const NavItemSlices = createSlice({
  name: "NavItem",
  initialState,
  reducers: {
    addActive: (state, action) => {
      state.isActive = action.payload;
    },
  },
});

export const { addActive } = NavItemSlices.actions;

export default NavItemSlices.reducer;
