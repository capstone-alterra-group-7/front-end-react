import React from "react";
import assets from "./../../assets/assets";

const CardKA = () => {
  return (
    <div className="w-[1064px] h-80 rounded-[32px] bg-[#FFFFFF] p-8 mx-auto mb-8 flex justify-between border-2 border-[#E1E4EA]">
      {/* right section */}
      <div className="w-[204px]">
        <img src={assets.logoKai} alt="" />
        <h1 className="font-bold text-xl mt-8">
          Putri Deli{" "}
          <span className="font-bold text-[#96989C] text-xl">(Ekonomi)</span>
        </h1>
        <h1 className="font-bold text-[#0080FF] text-xl mt-3">#123AAUU</h1>
        <h1 className="font-bold text-[#0080FF] text-2xl mt-12">Rp 32.000</h1>
        <h1 className="text-[#262627] mt-4">150 Kursi</h1>
      </div>
      <div className="w-[216px]">
        <button className="w-48 h-10 rounded-2xl font-bold text-white bg-[#0080FF] ms-6">
          Aktif
        </button>
        {/* Direction Train */}
        <div className="h-[164px] flex mt-9">
          <div className="flex flex-col mr-4 pt-1">
            <h1 className="mb-20 text-sm font-semibold">07.00</h1>
            <h1 className="text-sm font-semibold">08.00</h1>
          </div>
          <div className="mt-2 mr-2">
            <img src={assets.stepper} alt="" />
          </div>
          <div>
            <div className="mb-14">
              <h1 className="mb-1 font-semibold">Medan (MDN)</h1>
              <h1 className="text-sm">Medan</h1>
            </div>
            <div>
              <h1 className="mb-1 font-semibold">Tebing Tinggi (TBI)</h1>
              <h1 className="text-sm">Tebing Tinggi</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKA;
