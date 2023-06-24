import { configureStore } from "@reduxjs/toolkit";
import NavItemSlices from "./sidebar/NavItemSlices";
import daftarKaSlices from "./daftar-ka/daftarKaSlices";
import tokenSlices from "./auth/tokenSlices";

export const store = configureStore({
  reducer: {
    navItem: NavItemSlices,
    daftarKa: daftarKaSlices,
    tokenAuth: tokenSlices,
  },
});
