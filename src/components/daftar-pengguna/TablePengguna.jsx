// ** Import Others
import { useNavigate } from "react-router-dom";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Components
import Pagination from "./Pagination";
import { useSelector } from "react-redux";
import DataPengguna from "./DataPengguna";

export default function TablePengguna() {

    const daftarPengguna = useSelector((state) => state.daftarPengguna)

    const Navigate = useNavigate()

    const handleClick = () => {
        Navigate('/detail-pengguna')
    }
  return (
    <div className="flex flex-col bg-white">
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

                            {daftarPengguna.map((pengguna, index) => (
                                <DataPengguna data={pengguna} index={index} />
                            ))}
                        
                    </table>
                </div>
            </div>
        </div>
            {/* <Pagination/> */}
  </div>
  
  )
}
