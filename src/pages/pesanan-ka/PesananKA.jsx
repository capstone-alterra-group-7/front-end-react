// ** Import Components
import axios from "axios";
import BarPesananKA from "../../components/pesanan-ka/BarPesananKA";
import CardPesananKA from "../../components/pesanan-ka/CardPesananKA";

import { useSelector } from "react-redux";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { useState } from "react";
import BarDaftarTiket from "../../components/daftar-tiket/BarDaftarTiket";
import BarPesananKa from "../../components/pesanan-ka/BarPesananKA";
import Pagination from "../daftar-KA/Pagination";
import ModalFilterTicket from "../daftar-tiket/ModalFilterTicket";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PesananKA = () => {
  const pesananKa = useSelector((state) => state.pesananKa);

  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const { data: daftarPesanan, isLoading } = useSWR(
    baseUrl(
      `/admin/order/ticket?limit=20&page=${changePage}&search=${searchVal}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}`
    ),
    fetcher
  );

  const infoPaginate = daftarPesanan?.meta;

  return (
    <div>
      <BarPesananKa
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
      />

      {daftarPesanan?.data?.map((pesanan, index) => (
        <CardPesananKA data={pesanan} key={index} />
      ))}

      {daftarPesanan?.data === null && (
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

      {daftarPesanan === undefined && (
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
        entries={daftarPesanan?.data?.length}
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

export default PesananKA;
