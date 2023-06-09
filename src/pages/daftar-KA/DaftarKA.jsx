// ** Import React
import { useState } from "react";

// ** Import Components
import Bar from "../../components/daftar-ka/Bar";
import ModalConfirm from "../../components/daftar-stasiun/ModalConfirm";
import ModalFilter from "./ModalFilter";

// ** import Other
import { useNavigate } from "react-router-dom";
import TableDaftarKa from "../../components/daftar-ka/TableDaftarKa";
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import axios from "axios";
import Pagination from "./Pagination";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarKA = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const { data: daftarKa, isLoading } = useSWR(
    baseUrl(`/admin/train?page=${changePage}&limit=20&search=${searchVal}&sort_by=${urutkan}&filter=${saveFilter}
    `),
    fetcher
  );

  const infoPaginate = daftarKa?.meta;

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-ka/tambah-ka");
  };

  return (
    <div className="relative h-full">
      <div className=" bg-white pl-3 pr-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Kereta Api</h1>

        <Bar
          setSearchVal={setSearchVal}
          setModal={setModal}
          urutkan={urutkan}
          setUrutkan={setUrutkan}
          setShowFilter={setShowFilter}
          saveFilter={saveFilter}
        />
      </div>

      {daftarKa?.data === null && (
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

      {daftarKa?.data !== null && (
        <div className=" mt-8 pt-8  mx-7 shadow-[0_1px_3px_rgb(0,0,0,0.2)] bg-white rounded-t-3xl mb-8">
          <div className="flex justify-between border-b-2 pb-5 px-10">
            <h1 className="text-[16px] font-[600] text-[#262627]">
              Nama Kereta Api
            </h1>
            <h1 className="text-[16px] font-[600] text-[#262627]">
              Nomor Kereta Api
            </h1>
            <h1 className="mr-[32px] text-[16px] font-[600] text-[#262627]">
              Status keaktifan
            </h1>
          </div>

          {isLoading && <p className="text-center mt-6">loading....</p>}
          {daftarKa?.data?.map((ka, index) => (
            <TableDaftarKa key={ka.train_id} data={ka} index={index} />
          ))}
          <Pagination
            changePage={changePage}
            setChangePage={setChangePage}
            isLoading={isLoading}
            entries={daftarKa?.data?.length}
            infoPaginate={infoPaginate}
          />
        </div>
      )}

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Tambahkan Data Kereta Api"}
          desc={
            "Anda akan menambahkan data kereta api baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan Stasiun"}
        />
      )}

      {showFilter && (
        <ModalFilter
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
        />
      )}
    </div>
  );
};

export default DaftarKA;
