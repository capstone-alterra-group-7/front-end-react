// ** Import Pages
import Home from "../pages/Home";
import Auth from "../pages/auth/Auth";
import DaftarKA from "../pages/daftar-KA/DaftarKA";
import DaftarHotel from "../pages/daftar-hotel/DaftarHotel";
import Dashboard from "../pages/dashboard/Dashboard";
import LaporanPenjualan from "../pages/laporan-penjualan/LaporanPenjualan";
import DaftarPengguna from "../pages/daftar-pengguna/DaftarPengguna";
import DaftarPromo from "../pages/daftar-promo/DaftarPromo";
import DaftarBerita from "../pages/daftar-berita/DaftarBerita";
import PesananKA from "../pages/pesanan-ka/PesananKA";
import PesananHotel from "../pages/pesanan-hotel/PesananHotel";
import Refund from "../pages/refund/Refund";
import TambahKa from "../pages/daftar-KA/tambah-ka/TambahKa";
import DetailKA from "../pages/daftar-KA/detail-ka/DetailKA";
import DetailHotel from "../pages/daftar-hotel/detail-hotel/DetailHotel";
import DetailKamar from "../pages/daftar-hotel/detail-hotel/detail-kamar/DetailKamar";
import TambahHotel from "../pages/daftar-hotel/tambah-hotel/TambahHotel";
import DetailPengguna from "../pages/daftar-pengguna/detail-pengguna/DetailPengguna";
import TambahPengguna from "../pages/daftar-pengguna/tambah-pengguna/TambahPengguna";
import EditPengguna from "../pages/daftar-pengguna/edit-pengguna/EditPengguna";
import DetailPesananKa from "../pages/pesanan-ka/detail-pesananKa/DetailPesananKa";
import TambahKamar from "../pages/daftar-hotel/tambah-hotel/TambahKamar";
import DetailPesananHotel from "../pages/pesanan-hotel/detail-pesananHotel/DetailPesananHotel";
import DaftarStasiun from "../pages/daftar-stasiun/DaftarStasiun";
import TambahStasiun from "../pages/daftar-stasiun/tambah-stasiun/TambahStasiun";
import DaftarTiket from "../pages/daftar-tiket/DaftarTiket";
import DetailTiket from "../pages/daftar-tiket/detail-tiket/DetailTiket";

export const routeLogin = { path: "/", element: Auth };

export const routes = [
  // ** DashBoard
  { path: "/dashboard", element: Dashboard },

  // ** DataBase
  { path: "/daftar-ka", element: DaftarKA },
  { path: "/daftar-ka/tambah-ka", element: TambahKa },
  { path: "/detail-ka", element: DetailKA },
  { path: "/daftar-hotel", element: DaftarHotel },
  { path: "/detail-hotel/:id", element: DetailHotel },
  { path: "/daftar-hotel/tambah-hotel", element: TambahHotel },
  { path: "/daftar-hotel/tambah-hotel/tambah-kamar", element: TambahKamar },
  { path: "/detail-hotel/detail-kamar/:id", element: DetailKamar },
  { path: "/daftar-pengguna", element: DaftarPengguna },
  { path: "/detail-pengguna", element: DetailPengguna },
  { path: "/tambah-pengguna", element: TambahPengguna },
  { path: "/edit-pengguna", element: EditPengguna },
  { path: "/daftar-stasiun", element: DaftarStasiun },
  { path: "/daftar-stasiun/tambah-stasiun", element: TambahStasiun },
  { path: "/detail-pesanan-hotel", element: DetailPesananHotel },
  { path: "/daftar-tiket", element: DaftarTiket },
  { path: "/detail-tiket", element: DetailTiket },

  // ** Transaksi
  { path: "/pesanan-ka", element: PesananKA },
  { path: "/detail-pesananKa", element: DetailPesananKa },
  { path: "/pesanan-hotel", element: PesananHotel },

  // ** Laporan Penjualan
  { path: "/laporan-penjualan", element: LaporanPenjualan },
];
