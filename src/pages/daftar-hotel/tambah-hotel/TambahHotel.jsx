import React, { useState } from "react";

// ** Import Component
import BackButtonHotel from "../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
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
      {/* <div className="w-[1142px] min-h-full mt-[64px] mx-auto bg-white rounded-3xl shadow-[0_1px_10px_rgb(0,0,0,0.2)]">
        <h1>Tambah Hotel</h1>
      </div> */}
    </div>
  );
};

export default TambahHotel;
