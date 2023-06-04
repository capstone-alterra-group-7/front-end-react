import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// ** Import components
import Header from "../../components/daftar-stasiun/Header";
import RowDaftarStasiun from "../../components/daftar-stasiun/RowDaftarStasiun";
import ModalDetailStasiun from "../../components/daftar-stasiun/detail-stasiun/ModalDetailStasiun";
import ModalConfirm from "../../components/daftar-stasiun/ModalConfirm";

const DaftarStasiun = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({ is_show: false, data: {} });

  const dataDaftarStasiun = useSelector((state) => state.daftarStasiun);

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-stasiun/tambah-stasiun");
  };

  return (
    <div className="relative h-full bg-white">
      <div className="bg-white pl-3 pr-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Stasiun</h1>

        <Header setModal={setModal} />

        <div className="absolute w-full left-0">
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
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
                <th scope="col" className="px-6 py-3 text-center">
                  Status Keaktifan
                </th>
              </tr>
            </thead>
            <tbody>
              {dataDaftarStasiun.map((data, i) => {
                return <RowDaftarStasiun data={data} index={i} setModalDetail={setModalDetail} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Ingin Menambahkan Data Stasiun?"}
          desc={"Apakah stasiun tersebut dipastikan belum tercantum dalam database kami?"}
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan Stasiun"}
        />
      )}

      {modalDetail.is_show && <ModalDetailStasiun data={modalDetail.data} setModalDetail={setModalDetail} />}
    </div>
  );
};

export default DaftarStasiun;
