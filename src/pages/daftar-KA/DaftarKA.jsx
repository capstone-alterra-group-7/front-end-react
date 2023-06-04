// ** Import React
import { useState } from "react";

// ** Import Components
import ModalDaftarKa from "../../components/daftar-ka/ModalDaftarKa";
import Bar from "../../components/daftar-ka/Bar";

// ** import Other
import { useNavigate } from "react-router-dom";
import TableDaftarKa from "../../components/daftar-ka/TableDaftarKa";
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarKA = () => {
  // ** Local State
  const [modal, setModal] = useState(false);
  const [changePage, setChangePage] = useState(1);

  const { data: daftarKa, isLoading } = useSWR(
    baseUrl(`/public/train?page=${changePage}`),
    fetcher
  );

  const infoPaginate = daftarKa?.meta;

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-ka/tambah-ka");
  };

  return (
    <div className="relative h-full bg-white">
      <div className=" bg-white pl-3 pr-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Kereta Api</h1>

        <Bar setModal={setModal} />
      </div>

      <div className="pt-8 ">
        <div className="flex justify-between border-b pb-5 px-10 mb-1">
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

        {isLoading && <p className="text-center mt-6">loading....</p>}

        {daftarKa?.data.map((ka, index) => (
          <TableDaftarKa key={ka.train_id} data={ka} index={index} />
        ))}

        <div className="mb-[85px]"></div>

        <div className="absolute bottom-0 flex items-center justify-between px-7 border-t-2  w-full py-4 bg-white ">
          <button
            disabled={changePage === 1 || isLoading}
            className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-5 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300"
            onClick={() => setChangePage((prev) => prev - 1)}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99998 13.6668L0.333313 7.00016L6.99998 0.333496L8.18748 1.50016L3.52081 6.16683H13.6666V7.8335H3.52081L8.18748 12.5002L6.99998 13.6668Z"
                fill={`${changePage == 1 || isLoading ? "#D6DADF" : "#262627"}`}
              />
            </svg>
            Previous
          </button>

          <p className="text-slate-800 mr-5">
            {isLoading
              ? "..."
              : `Page ${infoPaginate?.current_page} - ${daftarKa?.data.length} Entries`}
          </p>

          <button
            disabled={infoPaginate?.next_page === null || isLoading}
            className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-8 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300 font-600"
            onClick={() => setChangePage((prev) => prev + 1)}
          >
            Next{" "}
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00004 13.6668L5.81254 12.5002L10.4792 7.8335H0.333374V6.16683H10.4792L5.81254 1.50016L7.00004 0.333496L13.6667 7.00016L7.00004 13.6668Z"
                fill={`${
                  infoPaginate?.next_page === null || isLoading
                    ? "#D6DADF"
                    : "#262627"
                }`}
              />
            </svg>
          </button>
        </div>
      </div>

      {modal && (
        <ModalDaftarKa
          title="Tambahkan Data Kereta Api?"
          description="Anda akan menambahkan data kereta api baru. Apakah Anda yakin ingin melanjutkan?"
          bgButton="bg-[#0080FF]"
          titleButton="Iya, Tambahkan"
          setModal={setModal}
          handle={handleAdd}
        />
      )}
    </div>
  );
};

export default DaftarKA;
