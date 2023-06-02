import React from "react";

// ** Import assets
import assets from "../../../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const CardPenawaranAddHotel = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-hotel/penawaran");
  };
  return (
    <div className="border border-[#D2D7E0] p-6 mb-6 h-[23rem] rounded-[2rem] flex justify-between">
      <div>
        <h1 className="text-2xl font-bold mb-1">Early Bird Promo</h1>
        <h1 className="">
          Tanggal Berlaku <span className="text-[#0080FF] font-semibold">1 Januari 2023 - 31 Maret 2023</span>
        </h1>

        <div className="mt-10">
          <div className="flex mb-5">
            <img src={assets.iconAccount} alt="" />
            <h1 className="ms-4 font-medium">2 Tamu</h1>
          </div>
          <div className="flex">
            <img src={assets.iconBed} alt="" />
            <h1 className="ms-4 font-medium">1 King</h1>
          </div>
        </div>

        <div className="grid grid-flow-col grid-rows-3 mt-10 gap-5">
          {[...Array(5)].map((none, i) => {
            return (
              <div className="flex" key={i}>
                <img src={assets.iconSpoonFork} alt="" />
                <h1 className="font-medium ms-3">Sarapan (2 pax)</h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col h-full items-end justify-end">
        <div className="flex">
          <h1 className="px-2 py-1 bg-[#DBF8D3] text-[#45C521] rounded-lg mr-3 mb-3">-10%</h1>
          <h1 className="text-[#96989C] text-2xl line-through">Rp 1.500.000</h1>
        </div>

        <h1 className="text-5xl font-bold text-[#0080FF] mb-1">Rp 1.350.000</h1>
        <h1 className="text-[#96989C] text-xl mb-1">/ kamar / malam</h1>
        <h1 className="text-[#FF7300] text-xl mb-6">Termasuk Pajak</h1>

        <button className="text-[#0080FF] font-medium text-lg py-2 px-4 bg-white border border-[#0080FF] rounded-lg" onClick={handleNavigate}>
          Lihat Detail Penawaran
        </button>
      </div>
    </div>
  );
};

export default CardPenawaranAddHotel;
