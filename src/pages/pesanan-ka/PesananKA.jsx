// ** Import Components
import CardPesananKA from "../../components/pesanan-ka/CardPesananKA";
import BarPesananKa from "../../components/pesanan-ka/BarPesananKA";
import Pagination from "../daftar-KA/Pagination";
import ModalFilterTicket from "../daftar-tiket/ModalFilterTicket";
import ErrorPages from "../../globals/ErrorPages";
import LoaderPages from "../../globals/LoaderPages";
import NotFoundSearch from "../../globals/NotFoundSearch";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { useState } from "react";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PesananKA = () => {
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const {
    data: daftarPesanan,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/order/ticket?limit=20&page=${changePage}&search=${searchVal}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}`
    ),
    fetcher
  );

  const infoPaginate = daftarPesanan?.meta;

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <BarPesananKa
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
      />

      {daftarPesanan?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          {daftarPesanan?.data?.map((pesanan, index) => (
            <CardPesananKA data={pesanan} key={index} />
          ))}

          <div
            className={`${infoPaginate?.total >= 200 ? "mt-32" : "mt-20"}`}
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

export default PesananKA;
