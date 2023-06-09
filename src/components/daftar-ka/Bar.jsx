// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../assets/assets";

const Bar = (props) => {
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
    <div className="grid grid-cols-5 gap-4">
      <form className="relative col-span-2">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchVal(e.target.value)}
          className="border w-full border-[#D2D7E0] py-2 px-11  rounded-lg focus:outline-none text-[20px] placeholder:text-[#96989C] placeholder:font-[400]"
        />

        <img
          src={assets.iconSearchDaftarKa}
          alt="search"
          className="absolute top-3 left-3"
        />
      </form>

      <div className="relative">
        <div
          onClick={() => setShowUrutan((prev) => !prev)}
          className="relative"
        >
          <div className="w-full px-4 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]  cursor-pointer">
            {urutkan === ""
              ? "Urutkan"
              : urutkan === "asc"
              ? "Ascending (A-Z)"
              : "Descending (Z-A)"}
          </div>

          <img
            src={assets.iconUrutkanDaftarKa}
            className="absolute top-[22px] right-5"
            alt="urutkan"
          />
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
                Ascending (A-Z)
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
                Descending (Z-A)
              </label>
            </div>
          </div>
        ) : null}
      </div>

      <div onClick={() => setShowFilter(true)} className="relative">
        <div className="w-full px-4 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[18px] focus:outline-none cursor-pointer">
          {saveFilter === ""
            ? "Filter"
            : saveFilter === "active"
            ? "Active"
            : "Non Aktif"}
        </div>

        <img
          src={assets.iconFilterDaftarKa}
          className="absolute top-[15px] right-5"
          alt="urutkan"
        />
      </div>

      <button
        onClick={() => setModal(true)}
        className="bg-[#0080FF] px-5  py-2 text-white rounded-lg flex items-center justify-center gap-2"
      >
        <h1 className=" text-[18px] font-[500]">Tambah KA</h1>
        <img src={assets.iconTambahKaDaftarKa} alt="tambah" />
      </button>
    </div>
  );
};

export default Bar;
