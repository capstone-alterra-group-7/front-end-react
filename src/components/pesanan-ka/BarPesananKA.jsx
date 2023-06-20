import { useState } from "react";
import assets from "../../assets/assets";

export default function BarPesananKa(props) {
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
      <div className=" px-[32px] py-[16px]">
        <div className="title">
          <h1 className="text-[32px] font-[700]">Pesanan Kereta Api</h1>
        </div>
      </div>

      <div className="flex justify-between items-center gap-7 px-[32px] py-[16px]">
        <div className="relative flex-1">
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

        <div className="flex gap-5 w-[42rem]">
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
              <div className="w-full px-12 py-[9.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px]  cursor-pointer">
                <p className="-ml-4">Sort</p>
              </div>

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

            {showUrutkan ? (
              <div className="absolute mt-2 -ml-1 bg-white w-[256px] h-[105px] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl space-y-4">
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
            <button
              onClick={() => setShowFilter(true)}
              className="appearance-none w-full px-11 text-left py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[500] text-[16px] focus:outline-none"
            >
              <p className="-ml-4">Filter</p>
            </button>

            <img
              src={assets.iconFilterDaftarKa}
              className="absolute top-[15px] right-5"
              alt="urutkan"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
