import React from "react";
import { Link } from "react-router-dom";
import assets from "../../../assets/assets";

const TambahAlamat = () => {
  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="space-y-6 bg-white pt-7 pb-4 px-8">
        <h1 className="text-[34px] font-[700] text-[#262627]">Tambah Alamat</h1>

        <Link to="/daftar-hotel/tambah-hotel" className="flex items-center gap-2 ml-2">
          <img src={assets.iconKembaliDaftarKa} alt="back" />

          <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
        </Link>
      </div>
    </div>
  );
};

export default TambahAlamat;
