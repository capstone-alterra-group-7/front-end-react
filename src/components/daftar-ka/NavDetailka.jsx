// ** Import Assets
import assets from "../../assets/assets";

const NavDetailka = ({ nav, setNav }) => {
  return (
    <div className="navbar pt-4 pb-8">
      <div className="grid grid-cols-2 border-b border-[#D2D7E0]">
        <div className="w-full space-y-4">
          <button
            className={`flex items-center cursor-default mx-auto ${
              nav === "informasi" ? "text-[#0080FF]" : "text-[#717275] "
            }  text-[16px] gap-2 font-[600]`}
          >
            Informasi KA
          </button>

          {nav === "informasi" && (
            <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>
          )}
        </div>

        <div className="w-full space-y-4">
          <button
            className={`flex items-center cursor-default mx-auto ${
              nav === "gerbong" ? "text-[#0080FF]" : "text-[#717275] "
            }  text-[16px] gap-2 font-[600]`}
          >
            Gerbong
          </button>

          {nav === "gerbong" && (
            <div className="bg-[#0080FF] px-24 rounded-t-3xl py-[2px]"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavDetailka;
