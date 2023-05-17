import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    status: true,
    noKa: "1234AUU",
    namaKa: "Argo Bromo",
    kelasKa: "Bussiness",
    harga: "32.000",
    waktuBerangkat: "07.00",
    waktuTiba: "08.00",
    stasiunAsal: "Medan (MDN)",
    stasiunTujuan: "Tebing Tinggi (TBI)",
    rutePerjalanan: "Semarang (MDN)",
  },
];

const daftarKaSlices = createSlice({
  name: "daftarKa",
  initialState,
  reducers: {
    tambahKa: (state, action) => {
      state.push(action.payload);
    },
    deleteKa: (state, action) => {
      return state.filter((ka) => ka.id !== action.payload);
    },
  },
});

export const { tambahKa, deleteKa } = daftarKaSlices.actions;

export default daftarKaSlices.reducer;
