import React from "react";

// ** Import Components
import ButtonDetailHotel from "../detail-hotel/ButtonDetailHotel";
import CardTambahKamar from "./daftar-kamar/CardTambahKamar";

// ** Import Other
import assets from "../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const DaftarTambahKamar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/daftar-hotel/tambah-hotel/tambah-kamar");
  };

  return (
    <div className="bg-[#EBEDF1] px-36 py-12">
      {/* Card kamar */}
      <CardTambahKamar />
      <CardTambahKamar />

      <div className="bg-white rounded-[2rem] h-[32rem] 2xl:h-[40rem] flex flex-col items-center justify-center">
        <img src={assets.iconAddKamar} alt="" className="mb-8 h-64 2xl:h-80" />
        <h1 className="text-2xl font-semibold mb-2">Belum Menambahkan Kereta</h1>
        <h1 className="font-thin text-[#717275] mb-8">Silahkan Masukkan Data Kamar Lainnya</h1>
        <button className="bg-[#0080FF] py-3 px-6 text-white font-medium rounded-lg" onClick={handleNavigate}>
          Tambah Kamar
        </button>
      </div>
    </div>
  );
};

export default DaftarTambahKamar;
