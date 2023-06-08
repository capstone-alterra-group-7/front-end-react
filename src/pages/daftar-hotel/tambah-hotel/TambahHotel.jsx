import React, { useState } from "react";

// ** Import Component
import HeaderTambahHotel from "../../../components/daftar-hotel/tambah-hotel/HeaderTambahHotel";
import NavTambahHotel from "../../../components/daftar-hotel/tambah-hotel/NavTambahHotel";
import InformasiTambahHotel from "../../../components/daftar-hotel/tambah-hotel/InformasiTambahHotel";
import KebijakanKamar from "../../../components/daftar-hotel/tambah-hotel/KebijakanKamar";
import DaftarTambahKamar from "../../../components/daftar-hotel/tambah-hotel/DaftarTambahKamar";

const TambahHotel = () => {
  const [nav, setNav] = useState("informasi");

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <HeaderTambahHotel />

      <NavTambahHotel nav={nav} setNav={setNav} />

      {nav === "informasi" ? <InformasiTambahHotel /> : nav === "kebijakanHotel" ? <KebijakanKamar /> : <DaftarTambahKamar />}
    </div>
  );
};

export default TambahHotel;
