import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-7">
        <h1 className="text-[34px] font-bold">Laporan Penjualan Mei 2023</h1>
      </div>
      <div className="px-8 flex justify-end gap-6">
        <select className="w-[154px] ps-4 py-[10px] flex justify-center font-medium rounded-lg border border-[#D2D7E0] appearance-none focus:border-[#0080FF] focus:ring-[#0080FF]">
          <option value="US">Mei 2023</option>
          <option value="US">Juni 2023</option>
          <option value="US">Januari 2023</option>
          <option value="US">Desember 2023</option>
        </select>
        <div className="bg-[#0080FF] rounded-lg h-11 w-36"></div>
      </div>
    </>
  );
};

export default Header;
