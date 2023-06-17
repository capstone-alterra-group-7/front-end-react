// ** Import React
import { useState } from "react";

// * Import Components
import BarDaftarTiket from "../../components/daftar-tiket/BarDaftarTiket";
import CardDaftarTiket from "../../components/daftar-tiket/CardDaftarTiket";
import Pagination from "../daftar-KA/Pagination";

// ** Import Other
import axios from "axios";
import { baseUrl } from "../../services/base";
import useSWR from "swr";
import ModalFilterTicket from "./ModalFilterTicket";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarTiket = () => {
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const { data: daftarTicket, isLoading } = useSWR(
    baseUrl(
      `/admin/order/ticket?limit=20&page=${changePage}&search=${searchVal}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}`
    ),
    fetcher
  );

  const { data: daftarGerbong } = useSWR(
    baseUrl(`/public/train-carriage?limit=9999`),
    fetcher
  );

  const manimpulateData = daftarTicket?.data?.map((data) => ({
    ...data,
    gerbong: daftarGerbong?.data?.filter(
      (gerbong) => gerbong.train.train_id === data.train.train_id
    ),
  }));

  const infoPaginate = daftarTicket?.meta;

  return (
    <div className="relative h-full">
      <BarDaftarTiket
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
      />

      {isLoading && <p className="text-center py-6">Loading...</p>}
      {manimpulateData?.map((ticket, index) => (
        <CardDaftarTiket key={index} data={ticket} />
      ))}

      {daftarTicket?.data === null && (
        <div>
          <img
            src="https://gcdnb.pbrd.co/images/YQ1ngF8DVrY9.png?o=1"
            alt="not-found"
            className="mx-auto"
          />

          <p className="text-[24px] font-[700] text-[#262627] mx-auto text-center w-[30rem] pb-9">
            Ups! Tidak ada hasil yang sesuai. Silakan coba dengan kata kunci
            lain.
          </p>
        </div>
      )}

      {daftarTicket === undefined && (
        <div>
          <img
            src="https://gcdnb.pbrd.co/images/YQ1ngF8DVrY9.png?o=1"
            alt="not-found"
            className="mx-auto"
          />

          <p className="text-[24px] font-[700] text-[#262627] mx-auto text-center w-[30rem] pb-9">
            Ups! Tidak ada hasil yang sesuai. Silakan coba dengan kata kunci
            lain.
          </p>
        </div>
      )}

      <Pagination
        changePage={changePage}
        setChangePage={setChangePage}
        isLoading={isLoading}
        infoPaginate={infoPaginate}
      />

      {showFilter && (
        <ModalFilterTicket
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
        />
      )}
    </div>
  );
};

export default DaftarTiket;
