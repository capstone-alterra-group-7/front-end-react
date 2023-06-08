import React from "react";

const ModalAvailableKamar = ({ setShowModal }) => {
  return (
    <div className="p-8 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] absolute bg-white left-1/3 -top-8 w-[28rem] h-[16.6rem]">
      <h1 className="font-semibold text-2xl mb-3">Tanggal Ketersediaan</h1>
      <input type="text" placeholder={"12/06/2023"} disabled className="mb-8 border border-slate-200 px-4 py-3" />

      <div className="grid grid-cols-2">
        <h1 className="text-[#717275] text-center text-xl">
          <span className="block mb-2">12</span>
          <span className="block">Kamar Kosong</span>
        </h1>
        <h1 className="text-[#45C521] text-center text-xl">
          <span className="block mb-2">8</span>
          <span className="block">Kamar Terisi</span>
        </h1>
      </div>
    </div>
  );
};

export default ModalAvailableKamar;
