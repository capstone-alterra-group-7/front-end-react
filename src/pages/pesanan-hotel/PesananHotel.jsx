// Import React
import React, { useState } from "react";

// Import Components

import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";
import Pagination from "../daftar-KA/Pagination";
import BarPesananKa from "../../components/pesanan-ka/BarPesananKA";
import ModalFilterPesananHotel from "../../components/pesanan-hotel/ModalFilterPesananHotel";

// ** Import Assets
import { baseUrl } from "../../services/base";
import axios from "axios";
import useSWR from "swr";
import BarPesananHotel from "../../components/pesanan-hotel/barPesananHotel";

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

  return (
    <div className="relative">
      <BarPesananHotel
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
      />

      <CardContainerPesananHotel daftarHotel={daftarHotel} />

      {daftarHotel?.data === null && (
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

      {daftarHotel === undefined && (
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

      {!error && (
        <Pagination
          changePage={changePage}
          setChangePage={setChangePage}
          isLoading={isLoading}
          infoPaginate={infoPaginate}
        />
      )}

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
