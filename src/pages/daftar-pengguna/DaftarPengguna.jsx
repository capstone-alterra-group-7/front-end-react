// ** Import Components
import TablePengguna from "../../components/daftar-pengguna/TablePengguna";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import HeaderPages from "../../globals/HeaderPages";
import ModalFilter from "../../globals/ModalFilter";
import FilterItemKeaktifan from "../../globals/FilterItemKeaktifan";
import SortItemAsc from "../../globals/SortItemAsc";
import ModalConfirm from "../../globals/ModalConfirm";
import TitlePage from "../../globals/TitlePage";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/base";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { fetcherGet } from "../../services/fetcher/fetcher";

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
    fetcherGet
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
      <TitlePage title="Pengguna" />

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
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Ingin Menambahkan Pengguna Baru?"}
          desc={
            "Anda akan menambahkan data pengguna baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan Pengguna"}
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
