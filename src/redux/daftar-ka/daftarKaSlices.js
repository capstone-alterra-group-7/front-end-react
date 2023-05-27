import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    status: "available",
    code_train: "TRAIN-60e09",
    name: "Argo Bromo",
    rute: [{ arrive_time: "10.20", name: "Cikarang (CKR)" }],
  },
  {
    id: 2,
    status: "availabel",
    code_train: "TRAIN-60e09",
    name: "Cikampek",
    rute: [{ arrive_time: "10.20", name: "Cikarang (CKR)" }],
  },
  {
    id: 3,
    status: "nonavailable",
    code_train: "TRAIN-60e09",
    name: "Sadang",
    rute: [{ arrive_time: "10.20", name: "Cikarang (CKR)" }],
  },
  {
    id: 4,
    status: "nonavailable",
    code_train: "TRAIN-60e09",
    name: "Sadang",
    rute: [{ arrive_time: "10.20", name: "Cikarang (CKR)" }],
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
