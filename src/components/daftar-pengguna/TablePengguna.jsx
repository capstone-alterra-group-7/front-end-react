// ** Import Others
import axios from "axios";
import { baseUrl } from "../../services/base";

// ** Import Components
import DataPengguna from "./DataPengguna";
import Pagination from "../../pages/daftar-pengguna/Pagination";
import { useState } from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function TablePengguna(props) {
  const { daftarPengguna, infoPaginate, changePage, setChangePage, isLoading } =
    props;

  return (
    <div className="my-7 mx-8  rounded-t-3xl flex flex-col bg-white shadow-[0_1px_3px_rgb(0,0,0,0.2)] ">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2">
          <div className="overflow-hidden">
            <table className=" text-left items-center text-[#262627] w-full">
              <thead className="border-b font-[700] text-[16px] py-4 ">
                <tr>
                  <th scope="col" className="px-6 py-6">
                    Nama Pengguna
                  </th>

                  <th scope="col" className="py-3">
                    No Hp
                  </th>

                  <th scope="col" className=" py-4 text-center">
                    Tanggal Mendaftar
                  </th>

                  <th scope="col" className="px-6 py-4 text-center">
                    Umur Akun
                  </th>

                  <th scope="col" className="px-2 py-4 text-center">
                    Status Akun
                  </th>
                </tr>
              </thead>

              {daftarPengguna?.data?.map((pengguna, index) => (
                <DataPengguna data={pengguna} index={index} key={index} />
              ))}
            </table>
          </div>
          <Pagination
            changePage={changePage}
            setChangePage={setChangePage}
            isLoading={isLoading}
            infoPaginate={infoPaginate}
          />
        </div>
      </div>
    </div>
  );
}
