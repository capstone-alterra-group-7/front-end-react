// ** Import React
import { useState } from "react";

// * Import Components
import CardDaftarTiket from "../../components/daftar-tiket/CardDaftarTiket";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import HeaderPagesDate from "../../globals/HeaderPagesDate";
import Pagination from "../../globals/Pagination";
import ModalFilter from "../../globals/ModalFilter";
import FilterItemStatusPesanan from "../../globals/FilterItemStatusPesanan";
import SortItemAsc from "../../globals/SortItemAsc";
import TitlePage from "../../globals/TitlePage";

// ** Import Other
import { baseUrl } from "../../services/base";
import useSWR from "swr";
import { useDebounce } from "use-debounce";
import { fetcherGet } from "../../services/fetcher/fetcher";

const DaftarTiket = () => {
  // ** Local State
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");

  const [searchDebounce] = useDebounce(searchVal, 500);

  const {
    data: daftarTicket,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/order/ticket?limit=20&page=${changePage}&search=${searchDebounce}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}`
    ),
    fetcherGet
  );

  const { data: daftarGerbong } = useSWR(
    baseUrl(`/public/train-carriage?limit=9999`),
    fetcherGet
  );

  const manimpulateData = daftarTicket?.data?.map((data) => ({
    ...data,
    gerbong: daftarGerbong?.data?.filter(
      (gerbong) => gerbong.train.train_id === data.train.train_id
    ),
  }));

  const infoPaginate = daftarTicket?.meta;

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <TitlePage title="Tiket kereta Api" />

      <HeaderPagesDate
        title="Daftar Tiket"
        placeholderSearch="Cari data tiket kereta api"
        setSearchVal={setSearchVal}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
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

      {daftarTicket?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          {manimpulateData?.map((ticket, index) => (
            <CardDaftarTiket key={index} data={ticket} />
          ))}

          <div
            className={`${infoPaginate?.total >= 200 ? "mt-36" : "mt-36"}`}
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
        <ModalFilter
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
          contentFilter={
            <FilterItemStatusPesanan filter={filter} setFilter={setFilter} />
          }
        />
      )}
    </div>
  );
};

export default DaftarTiket;
