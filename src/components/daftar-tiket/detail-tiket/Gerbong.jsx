import React from "react";
import NavigationTiket from "./NavigationTiket";
import assets from "../../../assets/assets";

export default function Gerbong({ data }) {
  return (
    <div className="mt-2 bg-white">
      <div className="flex justify-between items-center p-[32px]">
        <NavigationTiket sebelumnya />

        <h1 className="text-[#262627] text-[20px] font-[600]">
          {data.train.train_carriage}
        </h1>

        <NavigationTiket selanjutnya />
      </div>
      <div className="justify-center px-[181px] pt-[70px]">
        <img src={assets.kursi} alt="DetailKursi" />

        <div className="pt-[32px] pb-[32px]">
          <p className="text-[#262627] text-[12px] font-[700]">Keterangan</p>

          <div className="flex">
            <div className="flex items-center me-[33px] pt-[16px] font-[600]">
              <img
                src={assets.kursiKosong}
                alt="kursiKosong"
                className="max-w-[32px] pe-2 "
              />
              <p className="text-[#262627] text-[16px]">Kosong</p>
            </div>

            <div className="flex items-center pt-[16px]">
              <img
                src={assets.kursiTerisi}
                alt="kursiKosong"
                className="max-w-[32px] pe-2 "
              />
              <p className="text-[#262627] text-[16px] font-[600]">Terisi</p>
            </div>
          </div>
        </div>

        <img src={assets.kursi} alt="DetailKursi" />

        <div className="pt-[32px] pb-[32px]">
          <p className="text-[#262627] text-[12px] font-[700]">Keterangan</p>

          <div className="flex">
            <div className="flex items-center me-[33px] pt-[16px] font-[600]">
              <img
                src={assets.kursiKosong}
                alt="kursiKosong"
                className="max-w-[32px] pe-2 "
              />
              <p className="text-[#262627] text-[16px]">Kosong</p>
            </div>

            <div className="flex items-center pt-[16px]">
              <img
                src={assets.kursiTerisi}
                alt="kursiKosong"
                className="max-w-[32px] pe-2 "
              />
              <p className="text-[#262627] text-[16px] font-[600]">Terisi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
