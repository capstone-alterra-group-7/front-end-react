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
      <div className=" bg-white h-[152px] px-[32px] pt-[18px] pb-6 pr-8 flex justify-between">
        <h1 className="text-[32px] font-bold ">Daftar Pesanan Hotel</h1>

        <HeaderPesananHotel setModal={setModal} />
      </div>

      <div className="absolute top-[100px] bottom-[31.33px]">
        <BackDetailHotel />
      </div>

      <CardContainerPesananHotel />
    </div>
  );
};

export default PesananHotel;
