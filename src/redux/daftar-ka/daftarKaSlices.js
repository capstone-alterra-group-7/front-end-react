import { createSlice } from "@reduxjs/toolkit";

const initialState = { train_id: 0 };

const daftarKaSlices = createSlice({
  name: "daftarKa",
  initialState,
  reducers: {
    addIdKa: (state, action) => {
      state.train_id = action.payload;
    },
  },
});

export const { addIdKa } = daftarKaSlices.actions;

export default daftarKaSlices.reducer;
