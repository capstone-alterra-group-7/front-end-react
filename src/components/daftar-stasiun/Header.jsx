import React from "react";

// ** Import other
import assets from "../../assets/assets";

const Header = ({ setModal }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="relative col-span-2">
        <input type="text" placeholder="Search" className="border w-full border-[#D2D7E0] py-2 px-11  rounded-lg focus:outline-none text-[20px] placeholder:text-[#96989C] placeholder:font-[400]" />

        <img src={assets.iconSearchDaftarKa} alt="search" className="absolute top-3 left-3" />
      </div>

      <div className="relative">
        <select className="appearance-none  w-full px-4 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px] focus:outline-none">
          <option value="">Urutkan</option>
          <option value="2">2</option>
        </select>

        <img src={assets.iconUrutkanDaftarKa} className="absolute top-[22px] right-5" alt="urutkan" />
      </div>

      <div className="relative">
        <select className="appearance-none w-full px-4 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[18px] focus:outline-none">
          <option value="">Filter</option>
          <option value="2">2</option>
        </select>

        <img src={assets.iconFilterDaftarKa} className="absolute top-[15px] right-5" alt="urutkan" />
      </div>

      <button onClick={() => setModal(true)} className="bg-[#0080FF] px-5  py-2 text-white rounded-lg flex items-center justify-center gap-2">
        <h1 className=" text-[18px] font-[500]">Tambah Stasiun</h1>
        <img src={assets.iconTambahKaDaftarKa} alt="tambah" />
      </button>
    </div>
  );
};

export default Header;
