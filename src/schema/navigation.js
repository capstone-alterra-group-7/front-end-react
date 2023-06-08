// ** Import Assets
import assets from "../assets/assets";

export const dashboard = {
  icon: assets.iconNav,
  name: "Dashboard",
  link: "/dashboard",
};

export const databases = [
  { icon: assets.iconNav, name: "Stasiun", link: "/daftar-stasiun" },
  { icon: assets.iconNav, name: "Kereta Api", link: "/daftar-ka" },
  { icon: assets.iconNav, name: "Tiket Kereta Api", link: "/daftar-tiket" },
  { icon: assets.iconNav, name: "Hotel", link: "/daftar-hotel" },
  { icon: assets.iconNav, name: "Pengguna", link: "/daftar-pengguna" },
];

export const transactions = [
  { icon: assets.iconNav, name: "Pesanan KA", link: "/pesanan-ka" },
  { icon: assets.iconNav, name: "Pesanan Hotel", link: "/pesanan-hotel" },
];

export const laporan = [
  {
    icon: assets.iconNav,
    name: "Laporan Penjualan",
    link: "/laporan-penjualan",
  },
];
