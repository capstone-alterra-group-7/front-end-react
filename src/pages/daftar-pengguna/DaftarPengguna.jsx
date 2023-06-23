// ** Import Components
import ModalDaftarPengguna from "../../components/daftar-pengguna/ModalDaftarPengguna";
import TablePengguna from "../../components/daftar-pengguna/TablePengguna";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import HeaderPages from "../../globals/HeaderPages";
import ModalFilter from "../../globals/ModalFilter";
import FilterItemKeaktifan from "../../globals/FilterItemKeaktifan";
import SortItemAsc from "../../globals/SortItemAsc";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/base";
import axios from "axios";
import useSWR from "swr";
import { useDebounce } from "use-debounce";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarPengguna = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
  const [changePage, setChangePage] = useState(1);

  const navigate = useNavigate();

  const [searchDebounce] = useDebounce(search, 500);

  const {
    data: daftarPengguna,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/user?sort_by=${urutkan}&search=${searchDebounce}&filter=${saveFilter}&page=${changePage}&limit=20`
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
      <HeaderPages
        title="Daftar Pengguna"
        placeholderSearch="Cari data pengguna"
        textButton="Tambah Pengguna"
        setSearchVal={setSearch}
        setModal={setModal}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
        sort={
          <SortItemAsc
            title1="Ascending (A-Z)"
            title2="Descending (Z-A)"
            urutkan={urutkan}
            setUrutkan={setUrutkan}
          />
        }
      />

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
          contentFilter={
            <FilterItemKeaktifan filter={filter} setFilter={setFilter} />
          }
        />
      )}
    </div>
  );
};

export default DaftarPengguna;
