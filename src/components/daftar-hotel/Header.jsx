// ** Import Assets
import assets from "../../assets/assets";

const HeaderHotel = ({ setModal }) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="relative col-span-3">
        <input
          type="text"
          placeholder="Cari data hotel"
          className="border w-full border-[#D2D7E0] py-2 px-11 rounded-lg focus:outline-none text-[20px] placeholder:text-[#96989C] placeholder:font-[400]"
        />

        <img src={assets.iconSearchDaftarKa} alt="search" className="absolute top-3 left-3" />
      </div>

      <div className="flex justify-center items-center cursor-pointer rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]">
        <h1>Sort</h1>
        <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-3">
          <path d="M0 10V8.33333H5V10H0ZM0 5.83333V4.16667H10V5.83333H0ZM0 1.66667V0H15V1.66667H0Z" fill="#717275" />
        </svg>
      </div>

      <div className="flex justify-center items-center cursor-pointer rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]">
        <h1>Filter</h1>
        <img src={assets.iconFilterDaftarKa} className="w-5 ml-3" alt="urutkan" />
      </div>

      <button onClick={() => setModal({ tambah: true })} className="bg-[#0080FF] px-5 py-2 col-span-2 text-white rounded-lg flex items-center justify-center gap-2">
        <h1 className="text-[18px] font-[500]">Tambah Hotel</h1>
        <img src={assets.iconTambahKaDaftarKa} alt="tambah" />
      </button>
    </div>
  );
};

export default HeaderHotel;
