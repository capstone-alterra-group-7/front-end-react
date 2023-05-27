import { configureStore } from "@reduxjs/toolkit";
import NavItemSlices from "./sidebar/NavItemSlices";
import daftarKaSlices from "./daftar-ka/daftarKaSlices";
import daftarHotelSlices from "./daftar-hotel/daftarHotelSlices";
import daftarPenggunaSlices from "./daftar-pengguna/daftarPenggunaSlices";

export const store = configureStore({
  reducer: {
    navItem: NavItemSlices,
    daftarKa: daftarKaSlices,
    daftarHotel: daftarHotelSlices,
    daftarPengguna: daftarPenggunaSlices,
  },
});
