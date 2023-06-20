// Import React
import React, { useState } from "react";

// Import Components
import HeaderHotel from "../../components/daftar-hotel/Header";
import CardContainerHotel from "../../components/daftar-hotel/CardContainerHotel";

// ** import others
import axios from "axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import ModalConfirmHotel from "../../components/daftar-hotel/ModalConfirmHotel";
import Pagination from "../daftar-KA/Pagination";
import { baseUrl } from "../../services/base";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarHotel = () => {
  const [modal, setModal] = useState({ tambah: false });
  const [changePage, setChangePage] = useState(1);

  const navigate = useNavigate();

  const { data: dataHotel, isLoading, error } = useSWR(baseUrl(`/public/hotel?page=${changePage}&limit=20`), fetcher);
  const infoPaginate = dataHotel?.meta;

  const handleAdd = () => {
    navigate("/daftar-hotel/tambah-hotel");
  };

  return (
    <div className="relative">
      <div className=" bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Hotel</h1>
        <HeaderHotel setModal={setModal} />
      </div>

      <CardContainerHotel dataHotel={dataHotel} />

      {!error && (
        <Pagination
          changePage={changePage}
          setChangePage={setChangePage}
          isLoading={isLoading}
          infoPaginate={infoPaginate}
        />
      )}

      {modal.tambah && (
        <ModalConfirmHotel
          title="Tambahkan Data Hotel"
          desc="Anda akan menambahkan data hotel baru. Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#0080FF]"
          confirm="Tambahkan"
          cancel="Batal"
          name="tambah"
          setModal={setModal}
          handle={handleAdd}
        />
      )}
    </div>
  );
};

export default DaftarHotel;
