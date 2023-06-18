import React from "react";

const NavTambahKamar = ({ nav, setNav }) => {
  return (
    <div className="navbar pt-3">
      <div className="grid grid-cols-2 border-b border-[#D2D7E0]">
        <div className="w-full space-y-3 cursor-pointer" onClick={() => setNav("informasi")}>
          <button className={`flex items-center mx-auto ${nav === "informasi" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>Informasi Kamar</button>

          {nav === "informasi" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>

        <div className="w-full space-y-3 cursor-pointer" onClick={() => setNav("penawaranKamar")}>
          <button onClick={() => setNav("penawaranKamar")} className={`flex items-center mx-auto ${nav === "penawaranKamar" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            Penawaran Kamar
          </button>

          {nav === "penawaranKamar" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>
      </div>
    </div>
  );
};

export default NavTambahKamar;
