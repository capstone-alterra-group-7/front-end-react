import { createSlice } from "@reduxjs/toolkit"


const initialState = [
    {
        id: 1,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        noTelp: "089630073199",
        password: "rahasianegara124",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
    {
        id: 2,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        password: "rahasianegara124",
        noTelp: "089630073199",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
    {
        id: 3,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        password: "rahasianegara124",
        noTelp: "089630073199",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Tidak Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
    {
        id: 4,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        password: "rahasianegara124",
        noTelp: "089630073199",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
    {
        id: 5,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        noTelp: "089630073199",
        password: "rahasianegara124",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
    {
        id: 6,
        nama: "Aldi Dwikusuma",
        email: "aldikusuma@gmail.com",
        noTelp: "089630073199",
        password: "rahasianegara124",
        tanggalDaftar: "12-01-2023",
        umurAkun: "21 Hari",
        statusAkun: "Tidak Aktif",
        tanggalLahir: "21-05-2001",
        umurPengguna: "22 Tahun",
    },
]

const daftarPenggunaSlices = createSlice({
    name: "daftarPengguna",
    initialState,
    reducers: {
        tambahPengguna: (state, action) => {
            state.push(action.payload)
        },
        hapusPengguna: (state, action) => {
            return state.filter((pengguna) => pengguna.id !== action.payload)
        }
    }
})

export const { tambahPengguna, hapusPengguna } = daftarPenggunaSlices.actions

export default daftarPenggunaSlices.reducer