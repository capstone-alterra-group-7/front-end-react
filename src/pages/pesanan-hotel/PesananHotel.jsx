// Import React
import React, { useState } from "react";

// Import Components
import HeaderPesananHotel from "../../components/pesanan-hotel/Header";
import BackDetailHotel from "../../components/pesanan-hotel/detail-pesananHotel/BackDetailHotel";
import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";

// ** Import Assets
import assets from "../../assets/assets";
import { Link } from "react-router-dom";

const PesananHotel = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative">
      <div>
        <HeaderPesananHotel setModal={setModal} />
      </div>
      <CardContainerPesananHotel />
      <div className="w-[calc(100%_-_18rem)] fixed bottom-0 z-30">
        <div className=" bg-white h-[76px] pr-8 flex justify-between py-[16px]">
          <button
            onClick={() => setModal(true)}
            className="bg-[#F9FAFB] pl-[10px] pr-[10px] pt-[24px] pb-[20px] w-[140px] ml-[32px] text-black rounded-lg flex items-center justify-center gap-2 border-[1px] border-[#D2D7E0]"
          >
            <img src={assets.iconPrevious} alt="" />
            <h1 className=" text-[18px] font-[500] ml-[8px]">Previous</h1>
          </button>
          <div>
            <button className="rounded-[8px] bg-[#F5F6F8] w-[40px] h-[40px] text-[#0066CC]">
              1
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              2
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              3
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              ...
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              8
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              9
            </button>

            <button className="rounded-[8px] w-[40px] h-[40px]">
              10
            </button>
          </div>
          <button
            onClick={() => setModal(true)}
            className="bg-[#F9FAFB] pl-[10px] pr-[8px] pt-[24px] pb-[20px] w-[140px] ml-[24px] text-black rounded-lg flex items-center justify-center space-x-[8px] border-[1px] border-[#D2D7E0]"
          >
            <h1 className=" text-[18px] font-[500] mr-[8px]">Next</h1>
            <img src={assets.iconNext} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PesananHotel;
