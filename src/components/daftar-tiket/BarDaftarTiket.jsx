import { useState } from "react";
import assets from "../../assets/assets";

export default function BarDaftarTiket(props) {
  const {
    setSearchVal,
    setEndDate,
    setStartDate,
    urutkan,
    setUrutkan,
    setShowFilter,
  } = props;

  const [showUrutkan, setShowUrutkan] = useState(false);

  return (
    <div className="bg-white text-[#262627]">
      <div className="grid grid-cols-3 gap-3 px-[32px] py-[16px]">
        <div className="title">
          <h1 className="text-[32px] font-[700]">Daftar Tiket</h1>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 px-[32px] py-[16px]">
        <div className="relative col-span-2">
          <input
            onChange={(e) => setSearchVal(e.target.value)}
            type="text"
            placeholder="Cari data tiket kereta api"
            className="border w-full border-[#D2D7E0] py-2 px-11  rounded-lg focus:outline-none text-[16px] placeholder:text-[#96989C] placeholder:font-[400]"
          />

          <img
            src={assets.search}
            alt="search"
            className="absolute top-3 left-3"
          />
        </div>

        <div className="flex items-center">
          <input
            type="date"
            name="dari"
            onChange={(e) => setStartDate(e.target.value)}
            id="dari"
            className="bg-[#F9FAFB] py-2 px-3 border border-[#D2D7E0] rounded-lg"
          />
        </div>

        <div className="flex items-center">
          <p className="text-[14px] me-2">Hingga</p>

          <input
            type="date"
            name="dari"
            onChange={(e) => setEndDate(e.target.value)}
            id="dari"
            className="bg-[#F9FAFB] py-2 px-3 border border-[#D2D7E0] rounded-lg"
          />
        </div>

        <div className="relative">
          <div
            onClick={() => setShowUrutkan((prev) => !prev)}
            className="relative"
          >
            <div className="w-full px-4 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]  cursor-pointer">
              sort
            </div>

            <img
              src={assets.iconUrutkanDaftarKa}
              className="absolute top-[22px] right-5"
              alt="urutkan"
            />
          </div>

          {showUrutkan ? (
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

        <div className="relative">
          <div
            onClick={() => setShowFilter(true)}
            className="appearance-none w-full px-4 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[16px] focus:outline-none"
          >
            Filter
          </div>

          <img
            src={assets.iconFilterDaftarKa}
            className="absolute top-[15px] right-5"
            alt="urutkan"
          />
        </div>
      </div>
    </div>
  );
}
