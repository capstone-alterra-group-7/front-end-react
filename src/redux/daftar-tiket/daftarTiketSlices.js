import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {
        id: 1,
        train_name: "Putri Deli",
        class : "Ekonomi",
        code: "#1213524",
        price: "Rp. 32.000",
        seats: "64",
        status: "Akan Datang",
        date: "12 Mei 2023",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
    },
    {
        id: 2,
        train_name: "Putri Deli",
        class : "Ekonomi",
        code: "#1213524",
        price: "Rp. 32.000",
        seats: "64",
        status: "Akan Datang",
        date: "12 Mei 2023",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
    },
    {
        id: 3,
        train_name: "Putri Deli",
        class : "Ekonomi",
        code: "#1213524",
        price: "Rp. 32.000",
        seats: "64",
        status: "Akan Datang",
        date: "12 Mei 2023",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
    },
    {
        id: 4,
        train_name: "Putri Deli",
        class : "Ekonomi",
        code: "#1213524",
        price: "Rp. 32.000",
        seats: "64",
        status: "Akan Datang",
        date: "12 Mei 2023",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
    },
    {
        id: 5,
        train_name: "Putri Deli",
        class : "Ekonomi",
        code: "#1213524",
        price: "Rp. 32.000",
        seats: "64",
        status: "Akan Datang",
        date: "12 Mei 2023",
        departure_time: "07.00",
        arrives_time: "08.25",
        origin_station: "Medan (MDN)",
        destination_stasion: "Tebing Tinggi (TBI)",
    },
]

const daftarTiketSlices = createSlice({
    name: "daftarTiket",
    initialState,
    reducers:  {
        tambahTiket: (state, action) => {
          state.push(action.payload);
        },
        deleteTiket: (state, action) => {
          return state.filter((tiket) => tiket.id !== action.payload);
        },
      },
})

export const { tambahTiket, deleteTiket } = daftarTiketSlices.actions
export default daftarTiketSlices.reducer