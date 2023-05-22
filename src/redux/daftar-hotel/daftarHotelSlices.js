import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "#001",
    name: "Grand Palace Hotel",
    province_id: "Sumatera Utara",
    regency_id: "Medan",
    district_id: 1,
    village_id: 88,
    postal_code: 15666,
    full_address: "Jl. Sruput Kondang 1 Blok H 18/4",
    price: 2000000,
    description: "Hotel murah segalanya ada, deket jajanan, deket pusat perbelanjaan, dan aman privasi",
    status: true,
    rating: 4.5,
  },
  {
    id: "#002",
    name: "Coastal Resort",
    province_id: "Bali",
    regency_id: "Denpasar",
    district_id: 1,
    village_id: 88,
    postal_code: 15666,
    full_address: "Jl. Mustopa Asem 3 Blok K 18/4",
    price: 2500000,
    description: "Hotel murah segalanya ada, deket jajanan, deket pusat perbelanjaan, dan aman privasi",
    status: true,
    rating: 4.8,
  },
  {
    id: "#003",
    name: "Citra Inn Hotel",
    province_id: "Jawa Timur",
    regency_id: "Surabaya",
    district_id: 1,
    village_id: 16,
    postal_code: 62554,
    full_address: "Jl. Srundeng 1 Blok B 18/4",
    price: 834520,
    description: "Hotel murah segalanya ada, deket jajanan, deket pusat perbelanjaan, dan aman privasi",
    status: true,
    rating: 3.6,
  },
  {
    id: "#004",
    name: "Harmoni Suites Hotel",
    province_id: "Jawa Barat",
    regency_id: "Bandung",
    district_id: 1,
    village_id: 5,
    postal_code: 62554,
    full_address: "Jl. Srundeng 1 Blok D 18/11",
    price: 1300000,
    description: "Hotel murah segalanya ada, deket jajanan, deket pusat perbelanjaan, dan aman privasi",
    status: false,
    rating: 5.0,
  },
];

const daftarHotelSlice = createSlice({
  name: "daftarHotel",
  initialState,
  reducers: {
    tambahHotel: (state, action) => {
      state.push(action.payload);
    },
    deleteHotel: (state, action) => {
      return state.filter((data) => data.id !== action.payload);
    },
  },
});

export const { tambahHotel, deleteHotel } = daftarHotelSlice.actions;

export default daftarHotelSlice.reducer;
