import { configureStore } from "@reduxjs/toolkit";
import NavItemSlices from "./sidebar/NavItemSlices";
import daftarKaSlices from "./daftar-ka/daftarKaSlices";
import daftarHotelSlices from "./daftar-hotel/daftarHotelSlices";
import daftarPenggunaSlices from "./daftar-pengguna/daftarPenggunaSlices";
import pesananKaSlices from "./pesanan-ka/pesananKaSlices";
import tokenSlices from "./auth/tokenSlices";
import daftarTiketSlices from "./daftar-tiket/daftarTiketSlices";

export const store = configureStore({
  reducer: {
    navItem: NavItemSlices,
    daftarKa: daftarKaSlices,
    daftarHotel: daftarHotelSlices,
    daftarPengguna: daftarPenggunaSlices,
    pesananKa: pesananKaSlices,
    tokenAuth: tokenSlices,
    daftarPenggunaSlices: daftarTiketSlices,
    daftarTiketSlices: daftarTiketSlices,
  },
});
