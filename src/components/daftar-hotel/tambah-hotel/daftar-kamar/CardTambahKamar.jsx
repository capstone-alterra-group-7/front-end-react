import React from "react";

// ** Import Other
import assets from "../../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

// ** Import Component
import ButtonDetailHotel from "../../detail-hotel/ButtonDetailHotel";
import CardPenawaranAddHotel from "./CardPenawaranAddHotel";

const CardTambahKamar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-hotel/detail-kamar");
  };
  return (
    <div className="p-8 bg-white rounded-[2rem] mb-7">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Kamar 1</h1>
        <ButtonDetailHotel title="Kamar" />
      </div>
      <div className="p-7 grid grid-cols-7">
        <div className="h-[22rem] mr-8 col-span-2">
          <img src={assets.imageHotel} alt="" className="w-64" />
          <div className="mt-4 flex gap-2">
            <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
            <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
            <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
          </div>
        </div>

        <div className="col-span-5">
          <h1 className="text-[32px] font-bold mb-1">Deluxe Room</h1>
          <h1 className="text-[#0080FF] text-xl font-semibold">#DLX001</h1>
          <h1 className="mt-4 mb-3">
            <img src={assets.iconSeat} alt="" className="inline mr-1" /> 35 m<sup>2</sup>
          </h1>
          <h1 className="mb-8">
            Total Kamar: <span className="font-semibold">50 Kamar</span>
          </h1>
          <h1 className="mb-8">
            Kamar Deluxe Room kami menawarkan kenyamanan dan gaya dengan desain modern yang elegan. Dilengkapi dengan tempat tidur King atau Twin, ruangan ini memiliki fasilitas lengkap untuk
            memastikan pengalaman menginap yang memuaskan.
          </h1>
          <button className="p-3 border border-[#D2D7E0] w-full text-[#4B4C4E]" onClick={handleNavigate}>
            Lihat Detail Kamar
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h1 className="font-semibold text-xl mb-4">Penawaran</h1>
        <CardPenawaranAddHotel />
      </div>
    </div>
  );
};

export default CardTambahKamar;
