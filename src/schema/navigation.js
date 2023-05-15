// ** Import Assets
import assets from "../assets/assets";

export const dashboard = {
  icon: assets.iconNav,
  name: "Dashboard",
  link: "/dashboard",
};

export const databases = [
  { icon: assets.iconNav, name: "Daftar KA", link: "/daftar-ka" },
  { icon: assets.iconNav, name: "Daftar Hotel", link: "/daftar-hotel" },
  { icon: assets.iconNav, name: "Daftar Pengguna", link: "/daftar-pengguna" },
  { icon: assets.iconNav, name: "Daftar Promo", link: "/daftar-promo" },
  { icon: assets.iconNav, name: "Daftar Carousel", link: "/daftar-carousel" },
  { icon: assets.iconNav, name: "Daftar Berita", link: "/daftar-berita" },
];

export const transactions = [
  { icon: assets.iconNav, name: "Pesanan KA", link: "/pesanan-ka" },
  { icon: assets.iconNav, name: "Pesanan Hotel", link: "/pesanan-hotel" },
  { icon: assets.iconNav, name: "Refund", link: "refund" },
];

export const laporan = [
  {
    icon: assets.iconNav,
    name: "Laporan Penjualan",
    link: "/laporan-penjualan",
  },
];
