// ** Import React
import { useState } from "react";

// * Import Components
import BarDaftarTiket from "../../components/daftar-tiket/BarDaftarTiket";
import CardDaftarTiket from "../../components/daftar-tiket/CardDaftarTiket";
import Pagination from "../daftar-KA/Pagination";
import ModalFilterTicket from "./ModalFilterTicket";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";

// ** Import Other
import axios from "axios";
import { baseUrl } from "../../services/base";
import useSWR from "swr";

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

  const {
    data: daftarTicket,
    isLoading,
    error,
  } = useSWR(
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

  if (error) {
    return <ErrorPages />;
  }

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

      {daftarTicket?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          {manimpulateData?.map((ticket, index) => (
            <CardDaftarTiket key={index} data={ticket} />
          ))}

          <div
            className={`${infoPaginate?.total >= 200 ? "mt-36" : "mt-36"}`}
          ></div>

          <div className="absolute bottom-0 w-full">
            <Pagination
              changePage={changePage}
              setChangePage={setChangePage}
              isLoading={isLoading}
              infoPaginate={infoPaginate}
            />
          </div>
        </>
      )}

      {isLoading && <LoaderPages />}

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
