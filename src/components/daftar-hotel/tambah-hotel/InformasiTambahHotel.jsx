import React, { useEffect, useState } from "react";

// Initialization for ES Users
import { Select, initTE } from "tw-elements";

import assets from "../../../assets/assets";
import SectionAddFasilitas from "./informasi-kamar/SectionAddFasilitas";
import ImageSection from "./informasi-kamar/ImageSection";
import { Link } from "react-router-dom";

const InformasiTambahHotel = () => {
  const [fasilitas, setFasilitas] = useState([]);
  const [imageUrl, setImageUrl] = useState([assets.imageHotel, assets.imageKamar2]);
  console.log(imageUrl);

  useEffect(() => {
    initTE({ Select });
  }, []);

  return (
    <div className="p-8">
      <ImageSection imageUrl={imageUrl} setImageUrl={setImageUrl} />

      <div className="flex flex-col space-y-2 mb-6">
        <label className="text-[18px] font-[600] text-[#262627]">Nama Hotel</label>
        <input type="text" placeholder="Masukan Nama Hotel" className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500" />
      </div>

      <div className="flex flex-col space-y-2 mb-6 w-1/4">
        <label htmlFor="" className="text-[18px] font-[600] text-[#262627]">
          Kelas Hotel
        </label>

        <select
          data-te-select-init
          data-te-select-placeholder="Pilih Kelas Hotel"
          name="kelas"
          id=""
          className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
        >
          <option value="1">Bintang 1</option>
          <option value="2">Bintang 2</option>
          <option value="3">Bintang 3</option>
          <option value="4">Bintang 4</option>
          <option value="5">Bintang 5</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2 mb-20">
        <label className="text-[18px] font-[600] text-[#262627]">Deskripsi Hotel</label>
        <textarea
          type="text"
          rows="3"
          placeholder="Masukan Deskripsi Disini"
          className="h-52 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] duration-100 focus:outline-blue-500"
        ></textarea>
        <span className="text-[#96989C] mt-1">Batas Kata (0/400)</span>
      </div>

      <div className="mb-20">
        <h1 className="text-xl font-semibold mb-4">Informasi Umum</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col space-y-2">
            <label className="text-[18px] font-[600] text-[#262627]">Nomor Telepon</label>
            <input type="text" placeholder="nomor telepon" className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-[18px] font-[600] text-[#262627]">Email Hotel</label>
            <input type="text" placeholder="email hotel" className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500" />
          </div>
        </div>
      </div>

      <div className="rounded-[2rem] bg-[#F5F6F8] h-52 py-16 flex flex-col justify-center items-center mb-24">
        <h1 className="text-[#262627] text-2xl font-bold w-96 text-center mb-2">Belum Menambahkan Alamat Hotel</h1>
        <h1 className="mb-7">Silahkan Tambahkan Alamat Hotel</h1>

        <Link to="/daftar-hotel/tambah-hotel/tambah-alamat" className="py-3 px-6 rounded-lg text-white bg-[#0080FF]">
          Tambahkan Alamat
        </Link>
      </div>

      <SectionAddFasilitas fasilitas={fasilitas} setFasilitas={setFasilitas} />
    </div>
  );
};

export default InformasiTambahHotel;
