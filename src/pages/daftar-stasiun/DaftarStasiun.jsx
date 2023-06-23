// ** Import React
import { useState } from "react";

// ** Import components
import RowDaftarStasiun from "../../components/daftar-stasiun/RowDaftarStasiun";
import ModalDetailStasiun from "../../components/daftar-stasiun/detail-stasiun/ModalDetailStasiun";
import LoaderPages from "../../globals/LoaderPages";
import NotFoundSearch from "../../globals/NotFoundSearch";
import ErrorPages from "../../globals/ErrorPages";
import HeaderPages from "../../globals/HeaderPages";
import Pagination from "../../globals/Pagination";
import SortItemAsc from "../../globals/SortItemAsc";
import ModalConfirm from "../../globals/ModalConfirm";
import TitlePage from "../../globals/TitlePage";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { fetcherGet } from "../../services/fetcher/fetcher";

const DaftarStasiun = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [modalDetail, setModalDetail] = useState({ is_show: false, data: {} });
  const [changePage, setChangePage] = useState(1);
  const [searchVal, setSearchVal] = useState("");
  const [urutkan, setUrutkan] = useState("");

  const [searchDebounce] = useDebounce(searchVal, 500);

  const {
    data: dataStations,
    isLoading,
    error,
    mutate,
  } = useSWR(
    baseUrl(
      `/admin/station?page=${changePage}&limit=20&search=${searchDebounce}&sort_by=${urutkan}`
    ),
    fetcherGet
  );

  const infoPaginate = dataStations?.meta;

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/daftar-stasiun/tambah-stasiun");
  };

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative h-full">
      <TitlePage title="Stasiun" />

      <HeaderPages
        title="Daftar Stasiun"
        placeholderSearch="Cari data stasiun"
        textButton="Tambah Stasiun"
        setSearchVal={setSearchVal}
        setModal={setModal}
        sort={
          <SortItemAsc
            title1="Ascending (A-Z)"
            title2="Descending (Z-A)"
            urutkan={urutkan}
            setUrutkan={setUrutkan}
          />
        }
      />

      {dataStations?.data === null ? (
        <NotFoundSearch />
      ) : (
        <div className="px-8 py-9">
          <div className="bg-white rounded-t-3xl shadow-[0_1px_3px_rgb(0,0,0,0.2)]">
            <table className="w-full text-left">
              <thead className="text-[16px]  font-[600] text-[#262627] border-b-2 ">
                <tr>
                  <th scope="col" className="px-11 py-7">
                    Nama Stasiun
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Nomor Stasiun
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Domisili
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Kode Stasiun
                  </th>
                </tr>
              </thead>
              <tbody>
                {dataStations?.data?.map((data, i) => {
                  return (
                    <RowDaftarStasiun
                      data={data}
                      index={i}
                      setModalDetail={setModalDetail}
                      key={i}
                    />
                  );
                })}
              </tbody>
            </table>

            <Pagination
              changePage={changePage}
              setChangePage={setChangePage}
              isLoading={isLoading}
              infoPaginate={infoPaginate}
            />
          </div>
        </div>
      )}

      {isLoading && <LoaderPages />}

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          title={"Tambahkan Data Stasiun"}
          desc={
            "Anda akan menambahkan data stasiun baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Tambahkan"}
        />
      )}

      {modalDetail.is_show && (
        <ModalDetailStasiun
          data={modalDetail.data}
          mutate={mutate}
          setModalDetail={setModalDetail}
        />
      )}
    </div>
  );
};

export default DaftarStasiun;
