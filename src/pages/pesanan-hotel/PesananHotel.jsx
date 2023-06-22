// Import React
import React, { useState } from "react";

// Import Components
import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";
import BarPesananHotel from "../../components/pesanan-hotel/barPesananHotel";
import LoaderPages from "../../globals/LoaderPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import Pagination from "../daftar-KA/Pagination";
import ModalFilterPesananHotel from "../../components/pesanan-hotel/ModalFilterPesananHotel";

// ** Import Assets
import { baseUrl } from "../../services/base";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PesananHotel = () => {
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [saveFilterClass, setSaveFilterClass] = useState("");

  const {
    data: daftarHotel,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/order/hotel?page=${changePage}&limit=20&search=${searchVal}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}&rating_class=${saveFilterClass}`
    ),
    fetcher
  );

  const infoPaginate = daftarHotel?.meta;

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <BarPesananHotel
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
      />

      {daftarHotel?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          <CardContainerPesananHotel daftarHotel={daftarHotel} />

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
        <ModalFilterPesananHotel
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          setSaveFilterClass={setSaveFilterClass}
        />
      )}
    </div>
  );
};

export default PesananHotel;
