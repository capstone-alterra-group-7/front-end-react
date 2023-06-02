// ** Import Assets
import assets from "../../../assets/assets";

const NavDetailHotel = ({ nav, setNav }) => {
  return (
    <div className="navbar pt-4">
      <div className="grid grid-cols-3 border-b border-[#D2D7E0]">
        <div className="w-full space-y-4">
          <button onClick={() => setNav("informasi")} className={`flex items-center mx-auto ${nav === "informasi" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            <img src={assets.iconReceipt} alt="informasi" />
            Informasi Hotel
          </button>

          {nav === "informasi" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>

        <div className="w-full space-y-4">
          <button onClick={() => setNav("daftarKamar")} className={`flex items-center mx-auto ${nav === "daftarKamar" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            <img src={assets.iconReceipt} alt="daftarKamar" />
            Daftar Kamar
          </button>

          {nav === "daftarKamar" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>

        <div className="w-full space-y-4">
          <button onClick={() => setNav("ulasan")} className={`flex items-center mx-auto ${nav === "ulasan" ? "text-[#0080FF]" : "text-[#717275] "}  text-[16px] gap-2`}>
            <img src={assets.iconReceipt} alt="ulasan" />
            Ulasan
          </button>

          {nav === "ulasan" && <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>}
        </div>
      </div>
    </div>
  );
};

export default NavDetailHotel;
