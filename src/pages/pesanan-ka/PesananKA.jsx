// ** Import Components
import CardPesananKA from "../../components/pesanan-ka/CardPesananKA";
import ErrorPages from "../../globals/ErrorPages";
import LoaderPages from "../../globals/LoaderPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import HeaderPagesDate from "../../globals/HeaderPagesDate";
import FilterItemStatusPesanan from "../../globals/FilterItemStatusPesanan";
import Pagination from "../../globals/Pagination";
import SortItemAsc from "../../globals/SortItemAsc";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { useState } from "react";
import axios from "axios";
import { useDebounce } from "use-debounce";
import ModalFilter from "../../globals/ModalFilter";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const PesananKA = () => {
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
    data: daftarPesanan,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/admin/order/ticket?limit=20&page=${changePage}&search=${searchDebounce}&date_start=${startDate}&date_end=${endDate}&order_by=${urutkan}&filter=${saveFilter}`
    ),
    fetcher
  );

  const infoPaginate = daftarPesanan?.meta;

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <HeaderPagesDate
        title="Pesanan Kereta Api"
        placeholderSearch="Cari data pesanan kereta api"
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

      {daftarPesanan?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          {daftarPesanan?.data?.map((pesanan, index) => (
            <CardPesananKA data={pesanan} key={index} />
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

export default PesananKA;
