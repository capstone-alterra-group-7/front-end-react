import React from "react";
import assets from "../../../../assets/assets";

import CardKamarHotel from "./CardKamarHotel";

const DaftarKamar = ({ data }) => {
  console.log("Data Kamar: ", data);
  return (
    <div className="bg-[#EBEDF1] text-[#262627] px-8 pt-8 pb-4">
      {data !== null ? (
        data?.map((data, idx) => <CardKamarHotel data={data} />)
      ) : (
        <div className="w-full flex flex-col items-center relative">
          <img src={assets.imageNoData} alt="" className="" />
          <h1 className="font-bold text-2xl absolute bottom-2">Ups! belum ada data kamar</h1>
        </div>
      )}
    </div>
  );
};

export default DaftarKamar;
