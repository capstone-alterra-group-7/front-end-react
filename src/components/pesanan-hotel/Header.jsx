// ** Import Assets
import assets from "../../assets/assets";

const HeaderPesananHotel = ({ setModal }) => {
  return (
    <div className="">
      <div className="relative ">
        <input type="text" placeholder="Search" className="border w-[668px] border-[#D2D7E0] py-2 px-11 rounded-lg focus:outline-none text-[20px] placeholder:text-[#96989C] placeholder:font-[400]" />
        <img src={assets.iconSearchDaftarKa} alt="search" className="absolute top-3 left-3" />

      </div>
    </div>

  );
};

export default HeaderPesananHotel;
