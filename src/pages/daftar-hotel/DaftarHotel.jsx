// Import React
import React, { useState } from "react";

// Import Components
import HeaderHotel from "../../components/daftar-hotel/Header";
import CardContainerHotel from "../../components/daftar-hotel/CardContainerHotel";

const DaftarHotel = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative">
      <div className=" bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Hotel</h1>
        <HeaderHotel setModal={setModal} />
      </div>

      <CardContainerHotel />
    </div>
  );
};

export default DaftarHotel;
