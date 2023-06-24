// ** Import React
import { useState } from "react";

// ** Import Components
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import TableDaftarKa from "../../components/daftar-ka/TableDaftarKa";
import HeaderPages from "../../globals/HeaderPages";
import Pagination from "../../globals/Pagination";
import FilterItemKeaktifan from "../../globals/FilterItemKeaktifan";
import ModalFilter from "../../globals/ModalFilter";
import SortItemAsc from "../../globals/SortItemAsc";
import ModalConfirm from "../../globals/ModalConfirm";
import TitlePage from "../../globals/TitlePage";

// ** import Other
import { useNavigate } from "react-router-dom";
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { useDebounce } from "use-debounce";
import { fetcherGet } from "../../services/fetcher/fetcher";

const DaftarKA = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const [searchDebounce] = useDebounce(searchVal, 500);

  const {
    data: daftarKa,
    isLoading,
    error,
  } = useSWR(
    baseUrl(`/admin/train?page=${changePage}&limit=20&search=${searchDebounce}&sort_by=${urutkan}&filter=${saveFilter}
    `),
    fetcherGet,
    { refreshInterval: 1000 }
  );

  const infoPaginate = daftarKa?.meta;

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/daftar-ka/tambah-ka");
  };

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full ">
      <TitlePage title="Kereta Api" />

      <HeaderPages
        title="Daftar Kereta Api"
        placeholderSearch="Cari data kereta api"
        textButton="Tambah KA"
        setSearchVal={setSearchVal}
        setModal={setModal}
        urutkan={urutkan}
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

      {daftarKa?.data === null ? (
        <NotFoundSearch />
      ) : (
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

          {daftarKa?.data?.map((ka, index) => (
            <TableDaftarKa key={ka.train_id} data={ka} index={index} />
          ))}
          <Pagination
            changePage={changePage}
            setChangePage={setChangePage}
            isLoading={isLoading}
            infoPaginate={infoPaginate}
          />
        </div>
      )}

      {isLoading && <LoaderPages />}

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
          contentFilter={
            <FilterItemKeaktifan filter={filter} setFilter={setFilter} />
          }
        />
      )}
    </div>
  );
};

export default DaftarKA;
