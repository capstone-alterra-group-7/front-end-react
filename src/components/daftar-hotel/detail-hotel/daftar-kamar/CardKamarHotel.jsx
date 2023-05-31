import React from "react";

// ** import component
import CardPenawaran from "./CardPenawaran";
import ImageSection from "../ImageSection";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";
import assets from "../../../../assets/assets";

const CardKamarHotel = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-hotel/detail-kamar");
  };

  return (
    <div className="bg-white rounded-[48px] px-8 pt-8 pb-4 mb-8">
      <div className="mb-16">
        <div className="flex">
          {/* <img src={assets.imageHotel} alt="" className="w-96 h-[356px]" /> */}
          <ImageSection />
          <div className="ms-8">
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
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Penawaran</h1>
        <CardPenawaran />
        <CardPenawaran />
      </div>
    </div>
  );
};

export default CardKamarHotel;
