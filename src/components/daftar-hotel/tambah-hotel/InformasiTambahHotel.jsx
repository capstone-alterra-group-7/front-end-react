import React, { useEffect, useState } from "react";

// Initialization for ES Users
import { Select, initTE } from "tw-elements";

import assets from "../../../assets/assets";
import SectionAddFasilitas from "./informasi-kamar/SectionAddFasilitas";
import ImageSection from "./informasi-kamar/ImageSection";
import { Link } from "react-router-dom";

const InformasiTambahHotel = (props) => {
  const { dataInput, setDataInput, handleOnChangeInput } = props;
  console.log(dataInput);

  // console.log("ini Data fasilitas dari InformasiTambahHotel", dataInput?.hotel_facilities);
  const [fasilitas, setFasilitas] = useState(dataInput?.hotel_facilities);
  const [imageUrl, setImageUrl] = useState(dataInput?.hotel_image);

  useEffect(() => {
    initTE({ Select });
  }, []);

  return (
    <div className="p-8">
      <ImageSection imageUrl={imageUrl} setImageUrl={setImageUrl} setDataInput={setDataInput} />

      {/* Input Hotel Name */}
      <div className="flex flex-col space-y-2 mb-6">
        <label className="text-[18px] font-[600] text-[#262627]">Nama Hotel</label>
        <input
          type="text"
          name="name"
          placeholder="Masukan nama hotel"
          className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
          value={dataInput?.name}
          onChange={handleOnChangeInput}
        />
      </div>

      {/* Input Class Hotel */}
      <div className="flex flex-col space-y-2 mb-6 w-1/4">
        <label htmlFor="" className="text-[18px] font-[600] text-[#262627]">
          Kelas Hotel
        </label>

        <select
          data-te-select-init
          data-te-select-placeholder="Pilih kelas hotel"
          name="class"
          className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
          onChange={handleOnChangeInput}
          value={dataInput?.class}
        >
          <option value="" hidden></option>
          <option value={1}>Bintang 1</option>
          <option value={2}>Bintang 2</option>
          <option value={3}>Bintang 3</option>
          <option value={4}>Bintang 4</option>
          <option value={5}>Bintang 5</option>
        </select>
      </div>

      {/* Input Hotel Description */}
      <div className="flex flex-col space-y-2 mb-20">
        <label className="text-[18px] font-[600] text-[#262627]">Deskripsi Hotel</label>
        <textarea
          type="text"
          rows="3"
          placeholder="Masukan deskripsi disini"
          className="h-52 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] duration-100 focus:outline-blue-500"
          name="description"
          value={dataInput?.description}
          onChange={handleOnChangeInput}
          maxLength={2100}
        ></textarea>
        <span className="text-[#96989C] mt-1">
          Batas Huruf ({dataInput?.description.length}
          /2100)
        </span>
      </div>

      {/* Input Email & No Telp */}
      <div className="mb-20">
        <h1 className="text-xl font-semibold mb-4">Informasi Umum</h1>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col space-y-2">
            <label className="text-[18px] font-[600] text-[#262627]">Nomor Telepon</label>
            <input
              type="text"
              placeholder="nomor telepon"
              className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
              name="phone_number"
              value={dataInput?.phone_number}
              onChange={handleOnChangeInput}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label className="text-[18px] font-[600] text-[#262627]">Email Hotel</label>
            <input
              type="text"
              placeholder="email hotel"
              className="h-11 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
              name="email"
              value={dataInput?.email}
              onChange={handleOnChangeInput}
            />
          </div>
        </div>
      </div>

      {/* Input Alamat Hotel */}
      <div className="mb-20">
        <h1 className="text-xl font-semibold mb-4">Alamat Hotel</h1>
        <textarea
          type="text"
          rows="3"
          placeholder="Masukan alamat hotel"
          className="h-32 w-1/2 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
          name="address"
          value={dataInput?.address}
          onChange={handleOnChangeInput}
        ></textarea>
      </div>

      <SectionAddFasilitas fasilitas={fasilitas} setFasilitas={setFasilitas} setDataInput={setDataInput} />
    </div>
  );
};

export default InformasiTambahHotel;
