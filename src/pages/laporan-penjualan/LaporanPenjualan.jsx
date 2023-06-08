import React, { useState } from "react";

// ** Import Component
import Header from "../../components/laporan-penjualan/Header";
import assets from "../../assets/assets";
import TopStasiunSection from "../../components/laporan-penjualan/TopStasiunSection";
import TopHotelSection from "../../components/laporan-penjualan/TopHotelSection";

const LaporanPenjualan = () => {
  const [month, setMonth] = useState("Jan 2023");
  return (
    <div className=" bg-white pt-3 space-y-6">
      <Header month={month} setMonth={setMonth} />

      <div className="bg-[#EBEDF1] p-8">
        <div className="grid grid-cols-3 gap-[18.5px]">
          <div className="p-6 bg-white rounded-2xl">
            <h1 className="font-semibold text-xl text-[#4CDB24] flex gap-2">
              <img src={assets.iconScaleBalance} alt="" />
              Total Pesanan
            </h1>
            <div className="mt-6 flex items-end">
              <h1 className="font-bold text-3xl mr-2">15729</h1>
              <h1 className="font-semibold">Pesanan</h1>
            </div>
            <div className="flex mt-2">
              <img src={assets.iconTrendingUp} alt="" className="mr-1" />
              <h1 className="mr-2 text-[#4CDB24]">12%</h1>
              <h1 className="text-[#717275]">dibandingkan bulan lalu</h1>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl">
            <h1 className="font-semibold text-xl text-[#0080FF] flex gap-2">
              <img src={assets.iconBuildingBlue} alt="" />
              Pesanan Hotel
            </h1>
            <div className="mt-6 flex items-end">
              <h1 className="font-bold text-3xl mr-2">1245</h1>
              <h1 className="font-semibold">Pesanan</h1>
            </div>
            <div className="flex mt-2">
              <img src={assets.iconTrendingUp} alt="" className="mr-1" />
              <h1 className="mr-2 text-[#4CDB24]">8%</h1>
              <h1 className="text-[#717275]">dibandingkan bulan lalu</h1>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl">
            <h1 className="font-semibold text-xl text-[#FF7300] flex gap-2">
              <img src={assets.iconTrainOrange} alt="" />
              Pesanan Kereta Api
            </h1>
            <div className="mt-6 flex items-end">
              <h1 className="font-bold text-3xl mr-2">4354</h1>
              <h1 className="font-semibold">Pesanan</h1>
            </div>
            <div className="flex mt-2">
              <img src={assets.iconTrendingDown} alt="" className="mr-1" />
              <h1 className="mr-2 text-[#DB2D24]">22%</h1>
              <h1 className="text-[#717275]">dibandingkan bulan lalu</h1>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 h-[500px] mt-6">
          <h1 className="font-bold text-xl mb-6">Statistik Penjualan {month}</h1>

          <img src={assets.imageGraphPenjualan} alt="" className="h-96" />
        </div>

        <TopHotelSection month={month} />

        <TopStasiunSection month={month} />
      </div>
    </div>
  );
};

export default LaporanPenjualan;
