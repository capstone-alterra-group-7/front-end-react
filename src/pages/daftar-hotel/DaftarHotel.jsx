// Import React
import React, { useState } from "react";

// Import Components
import CardContainerHotel from "../../components/daftar-hotel/CardContainerHotel";
import BarHotel from "../../components/daftar-hotel/BarHotel";
import ModalFilterHotel from "../../components/daftar-hotel/ModalFilterHotel";
import ErrorPages from "../../globals/ErrorPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import LoaderPages from "../../globals/LoaderPages";
import ModalConfirmHotel from "../../components/daftar-hotel/ModalConfirmHotel";
import Pagination from "../daftar-KA/Pagination";

// ** import others
import axios from "axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../services/base";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarHotel = () => {
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

  const navigate = useNavigate();

  const {
    data: dataHotel,
    isLoading,
    error,
  } = useSWR(
    baseUrl(
      `/public/hotel?page=${changePage}&limit=20&name=${searchVal}&sort_by_price=${urutkan}&rating_class=${saveFilterClass}&minimum_price=${saveFilterPrice.mulai}&maximum_price=${saveFilterPrice.sampai}`
    ),
    fetcher
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
      <div className=" bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Hotel</h1>
        <BarHotel
          setSearchVal={setSearchVal}
          setModal={setModal}
          urutkan={urutkan}
          setUrutkan={setUrutkan}
          setShowFilter={setShowFilter}
          saveFilter={saveFilter}
        />
      </div>

      {dataHotel?.data === null ? (
        <NotFoundSearch />
      ) : (
        <>
          <CardContainerHotel dataHotel={dataHotel} />

          <div className={`${infoPaginate?.total >= 200 ? "mt-32" : "mt-20"}`}></div>

          <div className="absolute bottom-0 w-full">
            <Pagination changePage={changePage} setChangePage={setChangePage} isLoading={isLoading} infoPaginate={infoPaginate} />
          </div>
        </>
      )}

      {isLoading && <LoaderPages />}

      {modal && (
        <ModalConfirmHotel
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
