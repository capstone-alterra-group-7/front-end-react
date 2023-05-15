import { configureStore } from "@reduxjs/toolkit";
import NavItemSlices from "./sidebar/NavItemSlices";

export const store = configureStore({
  reducer: {
    navItem: NavItemSlices,
  },
});
