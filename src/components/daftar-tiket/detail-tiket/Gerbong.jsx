import React, { useState } from "react";

// ** Import Components
import TiketEkonomi from "../TiketEkonomi";
import TiketBisnis from "../TiketBisnis";
import TiketEksekutif from "../TiketEksekutif";
import LoaderPages from "../../../globals/LoaderPages";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../../services/base";
import moment from "moment";
import { fetcherGet } from "../../../services/fetcher/fetcher";

export default function Gerbong({ data }) {
  const findIdTrain = data.train.train_id;

  const findDate = moment(data.date).format("YYYY-MM-D");

  const [page, setPage] = useState(0);

  const { data: daftarGerbong, isLoading } = useSWR(
    baseUrl(
      `/public/train-carriage?limit=9999&date=${findDate}&train_id=${findIdTrain}`
    ),
    fetcherGet
  );

  const pickGerbong =
    daftarGerbong === null ? [] : isLoading ? [] : daftarGerbong.data[page];

  return (
    <div className="mt-2 bg-white">
      <div className="flex justify-between items-center px-8 py-10">
        <button
          disabled={page === 0}
          className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-5 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300"
          onClick={() => setPage((prev) => prev - 1)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 13.6668L0.333313 7.00016L6.99998 0.333496L8.18748 1.50016L3.52081 6.16683H13.6666V7.8335H3.52081L8.18748 12.5002L6.99998 13.6668Z"
              fill={`${page == 0 ? "#D6DADF" : "#262627"}`}
            />
          </svg>
          Sebelumnya
        </button>

        <h1 className="text-[#262627] text-[20px] font-[600]">
          {isLoading ? "..." : pickGerbong.name}
        </h1>

        <button
          disabled={page === data.gerbong.length - 1}
          className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-8 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300 font-600"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Selanjutnya{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00004 13.6668L5.81254 12.5002L10.4792 7.8335H0.333374V6.16683H10.4792L5.81254 1.50016L7.00004 0.333496L13.6667 7.00016L7.00004 13.6668Z"
              fill={`${
                page === data.gerbong.length - 1 ? "#D6DADF" : "#262627"
              }`}
            />
          </svg>
        </button>
      </div>

      <div className="flex justify-center py-[70px]">
        {pickGerbong?.train?.class === "Ekonomi" && (
          <TiketEkonomi data={pickGerbong.seat} />
        )}

        {pickGerbong?.train?.class === "Bisnis" && (
          <TiketBisnis data={pickGerbong.seat} />
        )}

        {pickGerbong?.train?.class === "Eksekutif" && (
          <TiketEksekutif data={pickGerbong.seat} />
        )}
      </div>

      {isLoading && <LoaderPages />}
    </div>
  );
}
