import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        train_name: "Putri Deli",
        carriage: "1/1A",
        class: "Bisnis",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
        time: "16 Apr 2023 07:21 WIB",
        order_code: "#AXSANI213",
        passenger_category: "Dewasa",
        person_name: "Michael Yang",
        email : "michaelyang12@gmail.com",
        phone: "0896789124",
        account_id: "9731010",
        ktp : "327701032856",
        status: "Selesai",
        price: "120.000",
        service_fee: "Gratis",
        insurance: "10.000",
        ticket_price: "110.000"
    },

]

const pesananKaSlices = createSlice({
    name: "pesananKa",
    initialState,
    reducers: {
        tambahPesananKa: (state, action) => {
          state.push(action.payload);
        },
        deletePesananKa: (state, action) => {
          return state.filter((ka) => ka.id !== action.payload);
        },
      },
})

export const { tambahPesananKa, deletePesananKa } = pesananKaSlices.actions;

export default pesananKaSlices.reducer;