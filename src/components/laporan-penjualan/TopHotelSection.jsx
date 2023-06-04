import React from "react";
import assets from "../../assets/assets";

const TopHotelSection = ({ month }) => {
  return (
    <div className="bg-white rounded-2xl p-4 mt-6">
      <h1 className="font-bold text-xl mb-4">Top 10 Hotel {month}</h1>

      <div className="rounded-xl border border-[#D2D7E0]">
        <table className="w-full text-left table-fixed">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-[20px] w-14">
                No
              </th>
              <th scope="col" className="px-6 py-[20px]">
                Nama Hotel
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
            {[...Array(7)].map((data, idx) => {
              return (
                <tr className={`border-t border-[#D2D7E0] ${idx % 2 == 0 ? "bg-[#F9FAFB]" : "bg-white"}`}>
                  <td className="px-7 py-[20px] rounded-bl-xl">{idx + 1}.</td>
                  <td className="px-6 py-[20px] flex items-center">
                    <img src={assets.imageHotel} alt="" className="w-12 h-12 mr-3" />
                    <div className="flex flex-col">
                      <h1 className="text-[#262627] font-semibold">Nama Hotel</h1>
                      <h1 className="text-sm">Medan, Sumatera Utara</h1>
                    </div>
                  </td>
                  <td className="px-6 py-[20px] text-center font-medium">1.500</td>
                  <td className="px-6 py-[20px] rounded-br-xl text-center font-medium">Rp 12.122</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopHotelSection;
