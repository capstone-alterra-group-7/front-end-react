// Import React
import { useState } from "react";

// Import Components
import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";
import LoaderPages from "../../globals/LoaderPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import ModalFilterPesananHotel from "../../components/pesanan-hotel/ModalFilterPesananHotel";
import ErrorPages from "../../globals/ErrorPages";
import HeaderPagesDate from "../../globals/HeaderPagesDate";
import Pagination from "../../globals/Pagination";
import SortItemHotel from "../../globals/SortItemHotel";
import TitlePage from "../../globals/TitlePage";

// ** Import Other
import { baseUrl } from "../../services/base";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { fetcherGet } from "../../services/fetcher/fetcher";

const PesananHotel = () => {
  // ** Local State
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [saveFilterClass, setSaveFilterClass] = useState("");

  const [searchDebounce] = useDebounce(searchVal, 500);

  const {
    data: daftarHotel,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/order/hotel?page=${changePage}&limit=20&search=${searchDebounce}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}&rating_class=${saveFilterClass}`
    ),
    fetcherGet
  );

  const infoPaginate = daftarHotel?.meta;

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <TitlePage title="Pesanan Hotel" />

      <HeaderPagesDate
        title="Daftar Pesanan Hotel"
        placeholderSearch="Cari data pesanan hotel"
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setShowFilter={setShowFilter}
        pesananHotel={true}
        sort={<SortItemHotel urutkan={urutkan} setUrutkan={setUrutkan} />}
      />

      {daftarHotel?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          <CardContainerPesananHotel daftarHotel={daftarHotel} />

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

      {showFilter && (
        <ModalFilterPesananHotel
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
          filterClass={filterClass}
          setFilterClass={setFilterClass}
          setSaveFilterClass={setSaveFilterClass}
        />
      )}
    </div>
  );
};

export default PesananHotel;
