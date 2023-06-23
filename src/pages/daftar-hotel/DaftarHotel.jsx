// Import React
import React, { useState } from "react";

// Import Components
import CardContainerHotel from "../../components/daftar-hotel/CardContainerHotel";
import HeaderPages from "../../globals/HeaderPages";
import ModalFilterHotel from "../../components/daftar-hotel/ModalFilterHotel";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import Pagination from "../../globals/Pagination";
import ModalConfirm from "../../globals/ModalConfirm";
import TitlePage from "../../globals/TitlePage";

// ** import others
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/base";
import { useDebounce } from "use-debounce";
import SortItemAsc from "../../globals/SortItemAsc";
import { fetcherGet } from "../../services/fetcher/fetcher";

const DaftarHotel = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [saveFilterClass, setSaveFilterClass] = useState("");
  const [filterPrice, setFilterPrice] = useState({
    mulai: "",
    sampai: "",
  });
  const [saveFilterPrice, setSaveFilterPrice] = useState({
    mulai: "",
    sampai: "",
  });

  const [searchDebounce] = useDebounce(searchVal, 500);

  const navigate = useNavigate();

  const {
    data: dataHotel,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/public/hotel?page=${changePage}&limit=20&name=${searchDebounce}&sort_by_price=${urutkan}&rating_class=${saveFilterClass}&minimum_price=${saveFilterPrice.mulai}&maximum_price=${saveFilterPrice.sampai}`
    ),
    fetcherGet
  );

  const infoPaginate = dataHotel?.meta;

  const handleAdd = () => {
    navigate("/daftar-hotel/tambah-hotel");
  };

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <TitlePage title="Hotel" />

      <HeaderPages
        title="Daftar Hotel"
        placeholderSearch="Cari data hotel"
        textButton="Tambah Hotel"
        setSearchVal={setSearchVal}
        setModal={setModal}
        urutkan={urutkan}
        setUrutkan={setUrutkan}
        setShowFilter={setShowFilter}
        sort={
          <SortItemAsc
            title1="Lowest Price"
            title2="Highest Price"
            urutkan={urutkan}
            setUrutkan={setUrutkan}
          />
        }
      />

      {dataHotel?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          <CardContainerHotel dataHotel={dataHotel} />

          <div
            className={`${infoPaginate?.total >= 200 ? "mt-32" : "mt-20"}`}
          ></div>

          <div className="absolute bottom-0 w-full">
            <Pagination
              changePage={changePage}
              setChangePage={setChangePage}
              isLoading={isLoading}
              infoPaginate={infoPaginate}
            />
          </div>
        </>
      )}

      {isLoading && <LoaderPages />}

      {modal && (
        <ModalConfirm
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

      {showFilter && (
        <ModalFilterHotel
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          setSaveFilterClass={setSaveFilterClass}
          filterPrice={filterPrice}
          setFilterPrice={setFilterPrice}
          setSaveFilterPrice={setSaveFilterPrice}
        />
      )}
    </div>
  );
};

export default DaftarHotel;
