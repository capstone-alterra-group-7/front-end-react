// ** Import Others
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../services/base";
import useSWR from "swr";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Components
import Pagination from "./Pagination";
import DataPengguna from "./DataPengguna";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function TablePengguna() {
  const {
    data: daftarPengguna,
    isLoading,
    mutate,
  } = useSWR(baseUrl(`/admin/user`), fetcher);

  return (
    <div className="my-7 mx-3 rounded-3xl flex flex-col bg-white shadow-md">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full py-2">
          <div className="overflow-hidden">
            <table className="min-w-full text-left items-center text-[#262627]">
              <thead className="border-b font-[700] text-[16px] ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Nama Pengguna
                  </th>

                  <th scope="col" className="px-6 py-4 ">
                    No Hp
                  </th>

                  <th scope="col" className="px-6 py-4 text-center">
                    Tanggal Mendaftar
                  </th>

                  <th scope="col" className="px-6 py-4 text-center">
                    Umur Akun
                  </th>

                  <th scope="col" className="px-6 py-4 text-center">
                    Status Akun
                  </th>
                </tr>
              </thead>
              {isLoading && <p className="text-center mt-6">loading....</p>}

              {daftarPengguna?.data?.map((pengguna, index) => (
                <DataPengguna data={pengguna} key={index} />
              ))}
            </table>

            {daftarPengguna?.data === null && (
              <div>
                <img
                  src="https://gcdnb.pbrd.co/images/YQ1ngF8DVrY9.png?o=1"
                  alt="not-found"
                  className="mx-auto"
                />

                <p className="text-[24px] font-[700] text-[#262627] mx-auto text-center w-[30rem] pb-9">
                  Ups! Tidak ada hasil yang sesuai. Silakan coba dengan kata
                  kunci lain.
                </p>
              </div>
            )}

            {daftarPengguna?.data === undefined && (
              <div>
                <img
                  src="https://gcdnb.pbrd.co/images/YQ1ngF8DVrY9.png?o=1"
                  alt="not-found"
                  className="mx-auto"
                />

                <p className="text-[24px] font-[700] text-[#262627] mx-auto text-center w-[30rem] pb-9">
                  Ups! Tidak ada hasil yang sesuai. Silakan coba dengan kata
                  kunci lain.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Pagination/> */}
    </div>
  );
}
