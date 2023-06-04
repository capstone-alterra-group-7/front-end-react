import React from "react";

// ** Import Component
import Header from "../../components/laporan-penjualan/Header";
import assets from "../../assets/assets";

const LaporanPenjualan = () => {
  return (
    <div className=" bg-white pt-3 space-y-6">
      <Header />

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

        <div className="bg-white rounded-2xl p-4 h-[500px] mt-6">
          <h1 className="font-bold text-xl">Statistik Penjualan Mei 2023</h1>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-6">
          <h1 className="font-bold text-xl">Top 10 Hotel Mei 2023</h1>
        </div>

        <div className="bg-white rounded-2xl p-4 mt-6">
          <h1 className="font-bold text-xl mb-4">Top 10 Stasiun Mei 2023</h1>
          <div className="rounded-xl  border border-[#D2D7E0]">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-[20px]">
                    No
                  </th>
                  <th scope="col" className="px-6 py-[20px]">
                    Nama Stasiun
                  </th>
                  <th scope="col" className="px-6 py-[20px] text-center">
                    Jumlah Pesanan
                  </th>
                  <th scope="col" className="px-6 py-[20px] text-center">
                    Total Pendapatan
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-[#D2D7E0]">
                  <td className="px-6 py-[20px]">1.</td>
                  <td className="px-6 py-[20px]">Gambir(GMBR)</td>
                  <td className="px-6 py-[20px] text-center">1.500</td>
                  <td className="px-6 py-[20px] text-center">Pendapatan</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaporanPenjualan;
