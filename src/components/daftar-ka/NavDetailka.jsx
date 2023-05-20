// ** Import Assets
import assets from "../../assets/assets";

const NavDetailka = ({ nav, setNav }) => {
  return (
    <div className="navbar pt-4 pb-8">
      <div className="grid grid-cols-2 border-b border-[#D2D7E0]">
        <div className="w-full space-y-4">
          <button
            onClick={() => setNav("informasi")}
            className={`flex items-center mx-auto ${
              nav === "informasi" ? "text-[#0080FF]" : "text-[#717275] "
            }  text-[16px] gap-2`}
          >
            <img src={assets.iconInformasiDaftarKa} alt="informasi" />
            Informasi KA
          </button>

          {nav === "informasi" && (
            <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>
          )}
        </div>

        <div className="w-full space-y-4">
          <button
            onClick={() => setNav("kursi")}
            className={`flex items-center mx-auto ${
              nav === "kursi" ? "text-[#0080FF]" : "text-[#717275] "
            }  text-[16px] gap-2`}
          >
            <img src={assets.iconKursiDaftarKa} alt="kursi" />
            Kursi
          </button>

          {nav === "kursi" && (
            <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavDetailka;
