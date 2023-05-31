// ** Import Pages
import Home from "../pages/Home";
import Auth from "../pages/auth/Auth";
import DaftarKA from "../pages/daftar-KA/DaftarKA";
import DaftarHotel from "../pages/daftar-hotel/DaftarHotel";
import Dashboard from "../pages/dashboard/Dashboard";
import LaporanPenjualan from "../pages/laporan-penjualan/LaporanPenjualan";
import DaftarPengguna from "../pages/daftar-pengguna/DaftarPengguna";
import DaftarPromo from "../pages/daftar-promo/DaftarPromo";
import DaftarCarousel from "../pages/daftar-carousel/DaftarCarousel";
import DaftarBerita from "../pages/daftar-berita/DaftarBerita";
import PesananKA from "../pages/pesanan-ka/PesananKA";
import PesananHotel from "../pages/pesanan-hotel/PesananHotel";
import Refund from "../pages/refund/Refund";
import TambahKa from "../pages/daftar-KA/tambah-ka/TambahKa";
import DetailKA from "../pages/daftar-KA/detail-ka/DetailKA";
import DetailPengguna from "../pages/daftar-pengguna/detail-pengguna/DetailPengguna";
import TambahPengguna from "../pages/daftar-pengguna/tambah-pengguna/TambahPengguna";
import EditPengguna from "../pages/daftar-pengguna/edit-pengguna/EditPengguna";
import DetailPesananKa from "../pages/pesanan-ka/detail-pesananKa/DetailPesananKa";
import DetailPesananHotel from "../pages/pesanan-hotel/detail-pesananHotel/DetailPesananHotel";

export const routeLogin = { path: "/", element: Auth };

export const routes = [
  // ** DashBoard
  { path: "/dashboard", element: Dashboard },

  // ** DataBase
  { path: "/daftar-ka", element: DaftarKA },
  { path: "/daftar-ka/tambah-ka", element: TambahKa },
  { path: "/detail-ka", element: DetailKA },
  { path: "/daftar-hotel", element: DaftarHotel },
  { path: "/daftar-pengguna", element: DaftarPengguna },
  { path: "/detail-pengguna", element: DetailPengguna },
  { path: "/tambah-pengguna", element: TambahPengguna },
  { path: "/edit-pengguna", element: EditPengguna },
  { path: "/daftar-promo", element: DaftarPromo },
  { path: "/daftar-carousel", element: DaftarCarousel },
  { path: "/daftar-berita", element: DaftarBerita },
  { path: "/detail-pesanan-hotel", element: DetailPesananHotel },

  // ** Transaksi
  { path: "/pesanan-ka", element: PesananKA },
  { path: "/detail-pesananKa", element: DetailPesananKa },
  { path: "/pesanan-hotel", element: PesananHotel },
  { path: "/refund", element: Refund },

  // ** Laporan Penjualan
  { path: "/laporan-penjualan", element: LaporanPenjualan },
  { path: "/auth", element: Auth },
];
