import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// ** Import components
import Header from "../../components/daftar-stasiun/Header";
import RowDaftarStasiun from "../../components/daftar-stasiun/RowDaftarStasiun";
import ModalDetailStasiun from "../../components/daftar-stasiun/detail-stasiun/ModalDetailStasiun";
import ModalConfirm from "../../components/daftar-stasiun/ModalConfirm";
import Pagination from "../daftar-KA/Pagination";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarStasiun = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({ is_show: false, data: {} });
  const [changePage, setChangePage] = useState(1);

  const {
    data: dataStations,
    isLoading,
    mutate,
  } = useSWR(baseUrl(`/public/station?page=${changePage}&limit=20`), fetcher);

  const infoPaginate = dataStations?.meta;

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-stasiun/tambah-stasiun");
  };

  return (
    <div className="relative h-full bg-white">
      <div className="bg-white pl-3 pr-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Stasiun</h1>

        <Header setModal={setModal} />
      </div>

      <div className="left-0">
        <table className="w-full  text-left text-gray-500 dark:text-gray-400">
          <thead className="text-[16px] font-[600] text-[#262627] border-b pb-5 px-5 mb-1">
            <tr>
              <th scope="col" className="px-5 py-3">
                Nama Stasiun
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Kode Stasiun
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Nomor Stasiun
              </th>
            </tr>
          </thead>
          <tbody>
            {dataStations?.data?.map((data, i) => {
              return (
                <RowDaftarStasiun
                  data={data}
                  index={i}
                  setModalDetail={setModalDetail}
                  key={i}
                />
              );
            })}
          </tbody>
        </table>

        <Pagination
          changePage={changePage}
          setChangePage={setChangePage}
          isLoading={isLoading}
          entries={dataStations?.data?.length}
          infoPaginate={infoPaginate}
        />
      </div>

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Ingin Menambahkan Data Stasiun?"}
          desc={
            "Apakah stasiun tersebut dipastikan belum tercantum dalam database kami?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan Stasiun"}
        />
      )}

      {modalDetail.is_show && (
        <ModalDetailStasiun
          data={modalDetail.data}
          mutate={mutate}
          setModalDetail={setModalDetail}
        />
      )}
    </div>
  );
};

export default DaftarStasiun;
