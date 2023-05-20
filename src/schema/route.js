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

export const routes = [
  { path: "/", element: Home },

  // ** DashBoard
  { path: "/dashboard", element: Dashboard },

  // ** DataBase
  { path: "/daftar-ka", element: DaftarKA },
  { path: "/daftar-ka/tambah-ka", element: TambahKa },
  { path: "/detail-ka", element: DetailKA },
  { path: "/daftar-hotel", element: DaftarHotel },
  { path: "/daftar-pengguna", element: DaftarPengguna },
  { path: "/daftar-promo", element: DaftarPromo },
  { path: "/daftar-carousel", element: DaftarCarousel },
  { path: "/daftar-berita", element: DaftarBerita },

  // ** Transaksi
  { path: "/pesanan-ka", element: PesananKA },
  { path: "/pesanan-hotel", element: PesananHotel },
  { path: "/refund", element: Refund },

  // ** Laporan Penjualan
  { path: "/laporan-penjualan", element: LaporanPenjualan },
  { path: "/auth", element: Auth },
];
