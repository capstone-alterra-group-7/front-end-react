const NavTambahHotel = ({ nav, setNav }) => {
  return (
    <div className="navbar pt-4">
      <div className="grid grid-cols-3 border-b border-[#D2D7E0]">
        <div className="w-full space-y-4 cursor-pointer" onClick={() => setNav("informasi")}>
          <button className={`flex items-center mx-auto ${nav === "informasi" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>Informasi Hotel</button>

          {nav === "informasi" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>

        <div className="w-full space-y-4 cursor-pointer" onClick={() => setNav("kebijakanHotel")}>
          <button onClick={() => setNav("kebijakanHotel")} className={`flex items-center mx-auto ${nav === "kebijakanHotel" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            Kebijakan Hotel
          </button>

          {nav === "kebijakanHotel" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>

        <div className="w-full space-y-4 cursor-pointer" onClick={() => setNav("daftarKamar")}>
          <button onClick={() => setNav("daftarKamar")} className={`flex items-center mx-auto ${nav === "daftarKamar" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            Daftar Kamar
          </button>

          {nav === "daftarKamar" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>
      </div>
    </div>
  );
};

export default NavTambahHotel;
