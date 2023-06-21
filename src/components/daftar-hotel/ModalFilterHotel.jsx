import React from "react";
import assets from "../../assets/assets";

const ModalFilterHotel = (props) => {
  const {
    filter,
    setFilter,
    setShowFilter,
    setSaveFilter,
    filterClass,
    setFilterClass,
    setSaveFilterClass,
    filterPrice,
    setFilterPrice,
    setSaveFilterPrice,
  } = props;

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="w-[800px]  h-[530px] rounded-2xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
        <h1 className="font-[600] text-[24px] text-[#262627]">Filter</h1>

        <div className="flex justify-between items-center mt-5">
          <div
            onClick={() => setShowFilter(false)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99967 13.6668L0.333008 7.00016L6.99967 0.333496L8.18717 1.50016L3.52051 6.16683H13.6663V7.8335H3.52051L8.18717 12.5002L6.99967 13.6668Z"
                fill="#0080FF"
              />
            </svg>

            <h5 className="text-[#0080FF] font-[600] text-[16px]">Kembali</h5>
          </div>

          <div className="flex items-center gap-8">
            <h5
              onClick={() => [
                setFilter(""),
                setFilterClass(""),
                setFilterPrice({ mulai: "", sampai: "" }),
              ]}
              className="text-[#0080FF] font-[600] text-[16px] cursor-pointer"
            >
              Reset Filter
            </h5>

            <button
              onClick={() => [
                setSaveFilter(filter),
                setSaveFilterClass(filterClass),
                setSaveFilterPrice({
                  mulai: filterPrice.mulai,
                  sampai: filterPrice.sampai,
                }),
                setShowFilter(false),
              ]}
              className="py-2 px-3 bg-[#0080FF] rounded-md text-white"
            >
              Terapkan Fiter
            </button>
          </div>
        </div>

        <div className="mt-9 space-y-3">
          <h1 className="text-[#262627] font-[600] text-[16px]">Range Harga</h1>

          <div className="flex gap-14">
            <div className="flex flex-col gap-2 ">
              <label>Mulai</label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="cth: 34.000"
                  value={filterPrice.mulai}
                  onChange={(e) =>
                    setFilterPrice({ ...filterPrice, mulai: e.target.value })
                  }
                  className="focus:outline-none border bg-[#F9FAFB] py-[8px] pl-14 rounded-lg w-72"
                />
                <div className="absolute top-[1px] left-[1px] px-3 border-r bg-white border-[#D2D7E0] rounded-l-lg py-2">
                  Rp
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 ">
              <label>Sampai</label>

              <div className="relative">
                <input
                  type="number"
                  placeholder="cth: 34.000"
                  value={filterPrice.sampai}
                  onChange={(e) =>
                    setFilterPrice({ ...filterPrice, sampai: e.target.value })
                  }
                  className="focus:outline-none border bg-[#F9FAFB] py-[8px] pl-14 rounded-lg w-72"
                />
                <div className="absolute top-[1px] left-[1px] px-3 border-r bg-white border-[#D2D7E0] rounded-l-lg py-2">
                  Rp
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <h1 className="text-[#262627] font-[600] text-[16px]">
            Bintang Hotel
          </h1>

          <div className="flex items-start gap-12">
            <div className="flex flex-col gap-4 ml-2 mt-4">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  value="1"
                  onChange={(e) => setFilterClass(e.target.value)}
                  checked={filterClass === "1"}
                  name="filterClass"
                />

                <img src={assets.iconStarRating} alt="" />
              </div>

              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  value="2"
                  name="filterClass"
                  onChange={(e) => setFilterClass(e.target.value)}
                  checked={filterClass === "2"}
                />

                <div className="flex">
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  value="3"
                  name="filterClass"
                  onChange={(e) => setFilterClass(e.target.value)}
                  checked={filterClass === "3"}
                />

                <div className="flex">
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 ml-2 mt-4">
              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  value="4"
                  name="filterClass"
                  onChange={(e) => setFilterClass(e.target.value)}
                  checked={filterClass === "4"}
                />

                <div className="flex">
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <input
                  type="checkbox"
                  value="5"
                  name="filterClass"
                  onChange={(e) => setFilterClass(e.target.value)}
                  checked={filterClass === "5"}
                />

                <div className="flex">
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                  <img src={assets.iconStarRating} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilterHotel;
