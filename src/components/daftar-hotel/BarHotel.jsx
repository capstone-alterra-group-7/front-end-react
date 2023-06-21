// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../assets/assets";

const BarHotel = (props) => {
  const {
    setModal,
    setSearchVal,
    urutkan,
    setUrutkan,
    setShowFilter,
    saveFilter,
  } = props;

  // ** Local State
  const [showUrutan, setShowUrutan] = useState(false);

  return (
    <div className="flex justify-between gap-7">
      <form className="relative flex-1">
        <input
          type="text"
          placeholder="Cari data kereta api"
          onChange={(e) => setSearchVal(e.target.value)}
          className="border w-full border-[#D2D7E0] py-2 px-11  rounded-lg focus:outline-none text-[20px] placeholder:text-[#96989C] placeholder:font-[400]"
        />

        <img
          src={assets.iconSearchDaftarKa}
          alt="search"
          className="absolute top-3 left-3"
        />
      </form>

      <div className="flex gap-7 w-[37rem]">
        <div className="relative">
          <div
            onClick={() => setShowUrutan((prev) => !prev)}
            className="relative"
          >
            <button className="w-full px-12 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]  cursor-pointer">
              <p className="-ml-5">Sort</p>
            </button>

            <div className="absolute top-[20px] right-[22px]">
              <svg
                width="15"
                height="11"
                viewBox="0 0 15 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10.47V8.8033H5V10.47H0ZM0 6.3033V4.63664H10V6.3033H0ZM0 2.13664V0.469971H15V2.13664H0Z"
                  fill="#717275"
                />
              </svg>
            </div>
          </div>

          {showUrutan ? (
            <div className="absolute mt-2 bg-white w-[256px] h-[105px] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl space-y-4">
              <div className="flex gap-3 items-center">
                <input
                  type="radio"
                  onChange={(e) => setUrutkan(e.target.value)}
                  checked={urutkan === "asc"}
                  value="asc"
                  name="urutkan"
                />

                <label className="text-[#262627] font-[400] text-[16px]">
                  Lowest Price
                </label>
              </div>

              <div className="flex gap-3 items-center">
                <input
                  onChange={(e) => setUrutkan(e.target.value)}
                  checked={urutkan === "desc"}
                  type="radio"
                  value="desc"
                  name="urutkan"
                />

                <label className="text-[#262627] font-[400] text-[16px]">
                  Highest Price
                </label>
              </div>
            </div>
          ) : null}
        </div>

        <div onClick={() => setShowFilter(true)} className="relative">
          <button className="w-full px-12 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[18px] focus:outline-none cursor-pointer">
            <p className="-ml-5">Filter</p>
          </button>

          <img
            src={assets.iconFilterDaftarKa}
            className="absolute top-[15px] right-5"
            alt="urutkan"
          />
        </div>

        <button
          onClick={() => setModal(true)}
          className="bg-[#0080FF] px-5 w-full py-2 text-white rounded-lg flex items-center justify-center gap-2"
        >
          <h1 className=" text-[18px] font-[500]">Tambah Hotel</h1>
          <img src={assets.iconTambahKaDaftarKa} alt="tambah" />
        </button>
      </div>
    </div>
  );
};

export default BarHotel;
