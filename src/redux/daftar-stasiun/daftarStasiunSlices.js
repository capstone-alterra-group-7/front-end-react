import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, station_name: "Binjai", code: "BJ", station_number: "00001", is_active: true },
  { id: 2, station_name: "Medan", code: "MDN", station_number: "00002", is_active: true },
  { id: 3, station_name: "Batang Kuis", code: "BTK", station_number: "00003", is_active: true },
  { id: 4, station_name: "Lubuk Pakam", code: "LBP", station_number: "00004", is_active: true },
  { id: 5, station_name: "Perbaungan", code: "PBA", station_number: "00005", is_active: true },
  { id: 6, station_name: "Rampah", code: "RPH", station_number: "00006", is_active: false },
  { id: 6, station_name: "Tebing Tinggi", code: "TBI", station_number: "00007", is_active: true },
  { id: 4, station_name: "Lubuk Pakam", code: "LBP", station_number: "00004", is_active: true },
  { id: 5, station_name: "Perbaungan", code: "PBA", station_number: "00005", is_active: true },
  { id: 6, station_name: "Rampah", code: "RPH", station_number: "00006", is_active: false },
  { id: 6, station_name: "Tebing Tinggi", code: "TBI", station_number: "00007", is_active: true },
  { id: 5, station_name: "Perbaungan", code: "PBA", station_number: "00005", is_active: true },
  { id: 6, station_name: "Rampah", code: "RPH", station_number: "00006", is_active: false },
  { id: 6, station_name: "Tebing Tinggi", code: "TBI", station_number: "00007", is_active: true },
];

const daftarStasiunSlices = createSlice({
  name: "daftarStasiun",
  initialState,
  reducers: {
    tambahStasiun: (state, action) => {
      state.push(action.payload);
    },
    deleteStasiun: (state, action) => {
      return state.filter((ka) => ka.id !== action.payload.id);
    },
    editStasiun: (state, action) => {
      const idx = state.findIndex((obj) => obj.id == action.payload.id);
      state[idx] = action.payload;
      return state;
    },
  },
});

export const { tambahStasiun, deleteStasiun, editStasiun } = daftarStasiunSlices.actions;

export default daftarStasiunSlices.reducer;
