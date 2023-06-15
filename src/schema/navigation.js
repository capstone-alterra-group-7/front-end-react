// ** Import Assets
import assets from "../assets/assets";

export const dashboard = {
  icon: assets.iconNav,
  active: assets.dashboardActive,
  name: "Dashboard",
  link: "/dashboard",
};

export const databases = [
  {
    icon: assets.iconStasiun,
    active: assets.stasiunActive,
    name: "Stasiun",
    link: "/daftar-stasiun",
  },
  {
    icon: assets.iconKeretaSide,
    active: assets.keretaActive,
    name: "Kereta Api",
    link: "/daftar-ka",
  },
  {
    icon: assets.iconTiket,
    active: assets.tiketActive,
    name: "Tiket Kereta Api",
    link: "/daftar-tiket",
  },
  {
    icon: assets.iconHotel,
    active: assets.hotelActive,
    name: "Hotel",
    link: "/daftar-hotel",
  },
  {
    icon: assets.iconPenggunaSide,
    active: assets.penggunaActive,
    name: "Pengguna",
    link: "/daftar-pengguna",
  },
];

export const transactions = [
  {
    icon: assets.iconPesananKa,
    active: assets.pesananKaActive,
    name: "Pesanan KA",
    link: "/pesanan-ka",
  },
  {
    icon: assets.iconPesananHotel,
    active: assets.pesananHotelActive,
    name: "Pesanan Hotel",
    link: "/pesanan-hotel",
  },
];

export const laporan = [
  {
    icon: assets.iconNav,
    name: "Laporan Penjualan",
    link: "/laporan-penjualan",
  },
];
