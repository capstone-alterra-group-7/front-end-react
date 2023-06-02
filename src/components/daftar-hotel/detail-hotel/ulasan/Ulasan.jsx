import React from "react";
import assets from "../../../../assets/assets";
import CardContainerUlasan from "./CardContainerUlasan";

const Ulasan = ({ data }) => {
  return (
    <div className="bg-white text-[#262627] flex py-4">
      <div className="w-1/3 h-full flex flex-col items-center border-r border-slate-200 ">
        <h1 className="text-xl font-semibold mb-4">Ulasan Pengguna</h1>
        <div className="flex mb-2">
          <img src={assets.iconStarRating} alt="" className="mr-2" />
          <h1 className="text-5xl font-bold">
            {data.rating}
            <span className="text-xl font-medium ms-1">/5</span>
          </h1>
        </div>
        <h1 className="text-[#96989C]">24 Rating | 5 Ulasan</h1>
        <div className="mt-8 w-10/12 flex flex-col-reverse">
          {[...Array(5)].map((data, i) => {
            return (
              <div className="flex items-center mb-2" key={i}>
                <img src={assets.iconStarRating} alt="" className="mr-3" />
                <h1 className="font-semibold mr-3">{i + 1}</h1>
                <div className="w-full mr-4 bg-[#EBEDF1] rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-[#0080FF] h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <h1 className="text-[#96989C] font-medium">20</h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-8 w-full">
        <div className=" w-32">
          <h1 className="font-semibold text-sm mb-2">Urutkan</h1>
          <div className="relative h-11">
            <select className="appearance-none  w-full px-4 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px] focus:outline-none">
              <option value="">Urutkan</option>
              <option value="2">2</option>
            </select>
            <img src={assets.iconUrutkanDaftarKa} className="absolute top-[22px] right-5" alt="urutkan" />
          </div>
        </div>

        <CardContainerUlasan />
      </div>
    </div>
  );
};

export default Ulasan;
