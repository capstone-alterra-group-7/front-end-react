// Import React
import React, { useState } from "react";

// Import Components
import HeaderPesananHotel from "../../components/pesanan-hotel/Header";
import BackDetailHotel from "../../components/pesanan-hotel/detail-pesananHotel/BackDetailHotel";
import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";

// ** Import Assets
import { baseUrl } from "../../services/base";
import axios from "axios";
import useSWR from "swr";
import Pagination from "../daftar-KA/Pagination";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PesananHotel = () => {
  const [modal, setModal] = useState(false);
  const [changePage, setChangePage] = useState(1);

  const { data: daftarHotel, isLoading } = useSWR(
    baseUrl(`/admin/order/hotel?page=${changePage}`),
    fetcher
  );

  const infoPaginate = daftarHotel?.meta;

  return (
    <div className="relative">
      <div>
        <HeaderPesananHotel setModal={setModal} />
      </div>
      <CardContainerPesananHotel daftarHotel={daftarHotel} />

      <Pagination
        changePage={changePage}
        setChangePage={setChangePage}
        isLoading={isLoading}
        infoPaginate={infoPaginate}
      />
    </div>
  );
};

export default PesananHotel;
