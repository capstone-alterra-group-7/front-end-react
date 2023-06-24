import React, { useState } from "react";
import assets from "../../../../assets/assets";
import { baseUrl } from "../../../../services/base";
import axios from "axios";
import useSWR from "swr";

// ** Import component
import CardContainerUlasan from "./CardContainerUlasan";
import LoaderPages from "../../../../globals/LoaderPages";
import ErrorPages from "../../../../globals/ErrorPages";

const fetcherGet = (url) => axios.get(url).then((res) => res.data);

const Ulasan = ({ data }) => {
  const [changePage, setChangePage] = useState(1);
  const [urutkan, setUrutkan] = useState("");
  const [showUrutan, setShowUrutan] = useState(false);

  const {
    data: dataRating,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/public/hotel/${data?.hotel_id}/rating?page=${changePage}&limit=20&filter=${urutkan}`
    ),
    fetcherGet
  );

  const infoPaginate = dataRating?.meta;
  const validate = infoPaginate === undefined ? 1 : infoPaginate?.total;
  const total = Math.ceil(isLoading ? 0 : validate / 20);

  const countPercentageRating = (i) => {
    if (dataRating?.data?.total_rating === 0) {
      return 0;
    }
    return (
      (dataRating?.data[`rating_${i}`] * 100) / dataRating?.data?.total_rating
    );
  };

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="bg-white text-[#262627] flex py-4">
      <div className="w-1/3 h-full flex flex-col items-center border-r border-slate-200 ">
        {/* Left Section */}
        <h1 className="text-xl font-semibold mb-4">Ulasan Pengguna</h1>
        <div className="flex mb-2">
          <img src={assets.iconStarRating} alt="" className="mr-2" />
          <h1 className="text-5xl font-bold">
            {dataRating?.data?.rata_rata_rating}
            <span className="text-xl font-medium ms-1">/5</span>
          </h1>
        </div>
        <h1 className="text-[#96989C]">
          {dataRating?.data?.total_rating} Rating
        </h1>
        <div className="mt-8 w-10/12 flex flex-col-reverse">
          {[...Array(5)].map((data, i) => {
            return (
              <div className="flex items-center mb-2" key={i}>
                <img src={assets.iconStarRating} alt="" className="mr-3" />
                <h1 className="font-semibold mr-3">{i + 1}</h1>
                <div className="w-full mr-4 bg-[#EBEDF1] rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-[#0080FF] h-2.5 rounded-full"
                    style={{ width: `${countPercentageRating(i + 1)}%` }}
                  ></div>
                </div>
                <h1 className="text-[#96989C] font-medium">
                  {dataRating?.data[`rating_${i + 1}`]}
                </h1>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Section */}
      {dataRating?.data?.ratings === null ? (
        <div className="w-full flex flex-col items-center relative mb-10">
          <img src={assets.imageNoData} alt="" className="" />
          <h1 className="font-bold text-2xl absolute bottom-2">
            Data rating tidak tersedia
          </h1>
        </div>
      ) : (
        <div className="px-8 pt-2 w-full">
          {/* Filter sorting */}
          <div className="w-full flex justify-end">
            <div className="relative">
              <h1 className="mb-2 font-bold">Urutkan</h1>
              <div
                onClick={() => setShowUrutan((prev) => !prev)}
                className="relative"
              >
                <button className="w-44 px-12 py-[9.5px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#262627] font-[400] text-[18px] cursor-pointer">
                  <p className="text-start -ml-8 w-32 text-gray-400">Terbaru</p>
                </button>
                <img
                  src={assets.iconUrutkanDaftarKa}
                  className={`absolute top-[20px] right-[22px] duration-300 ${
                    showUrutan ? "rotate-180" : ""
                  }`}
                  alt="urutkan"
                />
              </div>

              {showUrutan ? (
                <div className="absolute mt-2 bg-white w-[256px] h-[105px] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl space-y-4">
                  <div className="flex gap-3 items-center">
                    <input
                      type="radio"
                      onChange={(e) => setUrutkan(e.target.value)}
                      checked={urutkan === "oldest"}
                      value="oldest"
                      name="urutkan"
                    />

                    <label className="text-[#262627] font-[400] text-[16px]">
                      Oldest Rating
                    </label>
                  </div>

                  <div className="flex gap-3 items-center">
                    <input
                      onChange={(e) => setUrutkan(e.target.value)}
                      checked={urutkan === "latest"}
                      type="radio"
                      value="latest"
                      name="urutkan"
                    />

                    <label className="text-[#262627] font-[400] text-[16px]">
                      Latest Rating
                    </label>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <CardContainerUlasan dataRating={dataRating} />

          {/* Pagination */}
          <div className="mt-2 flex justify-center gap-6">
            <button
              disabled={changePage === 1 || isLoading}
              className="disabled:cursor-not-allowed disabled:text-gray-300 bg-[#F9FAFB]"
              onClick={() => setChangePage((prev) => prev - 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill={`${
                    changePage == 1 || isLoading ? "#D6DADF" : "#262627"
                  }`}
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                />
              </svg>
            </button>

            <div className="text-slate-800">
              {isLoading ? (
                "..."
              ) : (
                <div className="flex gap-1 items-center">
                  {Array(total)
                    ?.fill(0)
                    ?.map((_, index) => (
                      <div
                        key={index}
                        onClick={() => setChangePage(index + 1)}
                        className={`${
                          changePage === index + 1
                            ? "text-[#0066CC]"
                            : "text-gray-400"
                        }  px-[14px] py-[6px] rounded-[8px] cursor-pointer`}
                      >
                        {index + 1}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <button
              disabled={changePage >= total || isLoading}
              className="disabled:cursor-not-allowed disabled:text-gray-300 bg-[#F9FAFB] rotate-180"
              onClick={() => setChangePage((prev) => prev + 1)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill={`${
                    changePage >= total || isLoading ? "#D6DADF" : "#262627"
                  }`}
                  d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isLoading && <LoaderPages />}
    </div>
  );
};

export default Ulasan;
