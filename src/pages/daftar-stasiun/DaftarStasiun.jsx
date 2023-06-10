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
import ModalFilter from "../daftar-KA/ModalFilter";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarStasiun = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({ is_show: false, data: {} });
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [urutkan, setUrutkan] = useState("");

  const {
    data: dataStations,
    isLoading,
    mutate,
  } = useSWR(
    baseUrl(
      `/admin/station?page=${changePage}&limit=20&search=${searchVal}&sort_by=${urutkan}`
    ),
    fetcher
  );

  const infoPaginate = dataStations?.meta;

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-stasiun/tambah-stasiun");
  };

  return (
    <div className="relative h-ful">
      <div className="bg-white pl-3 pr-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Stasiun</h1>

        <Header
          setSearchVal={setSearchVal}
          setModal={setModal}
          urutkan={urutkan}
          setUrutkan={setUrutkan}
        />
      </div>

      <div className="px-8 py-9">
        <div className="bg-white rounded-t-3xl shadow-[0_1px_3px_rgb(0,0,0,0.2)]">
          <table className="w-full text-left">
            <thead className="text-[16px]  font-[600] text-[#262627] border-b-2 ">
              <tr>
                <th scope="col" className="px-11 py-7">
                  Nama Stasiun
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Nomor Stasiun
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Domisili
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Kode Stasiun
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
      </div>

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Tambahkan Data Stasiun"}
          desc={
            "Anda akan menambahkan data stasiun baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan"}
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
