// ** Import Components
import Bar from "../../components/daftar-pengguna/Bar";
import ModalDaftarPengguna from "../../components/daftar-pengguna/ModalDaftarPengguna";
import TablePengguna from "../../components/daftar-pengguna/TablePengguna";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import ModalFilter from "./ModalFilter";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/base";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarPengguna = () => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
  const [changePage, setChangePage] = useState(1);
  const navigate = useNavigate();

  const {
    data: daftarPengguna,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/user?sort_by=${urutkan}&search=${search}&filter=${saveFilter}&page=${changePage}&limit=20&search`
    ),
    fetcher
  );

  const infoPaginate = daftarPengguna?.meta;

  const handleAdd = () => {
    navigate("/tambah-pengguna");
  };

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative">
      <div className="bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[32px] font-bold">Daftar Pengguna</h1>

        <Bar
          setModal={setModal}
          setSearch={setSearch}
          urutkan={urutkan}
          setUrutkan={setUrutkan}
          setShowFilter={setShowFilter}
          saveFilter={saveFilter}
        />
      </div>

      {daftarPengguna?.data === null ? (
        <NotFoundSearch />
      ) : (
        <TablePengguna
          daftarPengguna={daftarPengguna}
          infoPaginate={infoPaginate}
          changePage={changePage}
          setChangePage={setChangePage}
          isLoading={isLoading}
        />
      )}

      {isLoading && <LoaderPages />}

      {modal && (
        <ModalDaftarPengguna
          title="Ingin Menambahkan Pengguna Baru?"
          description="Anda akan menambahkan data pengguna baru. Apakah Anda yakin ingin melanjutkan?"
          bgButton="bg-[#0080FF]"
          titleButton="Tambahkan Pengguna"
          setModal={setModal}
          handle={handleAdd}
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

export default DaftarPengguna;
