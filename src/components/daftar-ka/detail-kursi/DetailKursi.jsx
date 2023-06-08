// ** Import React
import { useState } from "react";

// ** Import Components
import ButtonNavigation from "./ButtonNavigation";
import KursiAvailable from "./KursiAvailable";
import KursiInformation from "./KursiInformation";

// ** Import Other
import axios from "axios";
import useSWR from "swr";
import { baseUrl } from "../../../services/base";
import KelasEkonomi from "../tambah-ka/KelasEkonomi";
import KelasBisnis from "../tambah-ka/KelasBisnis";
import KelasEksekutif from "../tambah-ka/KelasEksekutif";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export const DetailKursi = ({ data }) => {
  const { data: detailGerbong, isLoading } = useSWR(
    baseUrl("/public/train-carriage?limit=9999"),
    fetcher
  );

  // ** Local State
  const [page, setPage] = useState(0);

  const findGerbong = detailGerbong?.data?.filter(
    (gerbong) => gerbong.train.train_id === data.train_id
  );

  const pickGerbong = isLoading ? [] : findGerbong[page];

  console.log(pickGerbong);

  return (
    <div className="px-14 space-y-20 pb-10">
      <div className="flex justify-between items-center">
        <ButtonNavigation disable={page === 0} setPage={setPage} sebelumnya />

        <h1 className="text-[#262627] text-[20px] font-[600]">
          {isLoading ? "..." : pickGerbong?.name}
        </h1>

        <ButtonNavigation
          disable={page === findGerbong?.length - 1}
          selanjutnya
          setPage={setPage}
        />
      </div>

      {isLoading ? <p className="text-center">Loading...</p> : null}

      {pickGerbong?.train?.class === "Ekonomi" && <KelasEkonomi />}
      {pickGerbong?.train?.class === "Bisnis" && <KelasBisnis />}
      {pickGerbong?.train?.class === "Eksekutif" && <KelasEksekutif />}
    </div>
  );
};

const dummyData = [
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
];

const dummyData2 = [
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: true },
  { dummy: false },
  { dummy: false },
  { dummy: false },
];
