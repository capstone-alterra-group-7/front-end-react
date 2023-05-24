// ** Import Others
import { Link, useNavigate } from "react-router-dom"

// ** Import Assests
import assets from "../../../assets/assets"

export default function SecondBar({ setModal }) {
    const Navigate = useNavigate("")
    const handleClick = () => {
        Navigate('/edit-pengguna')
    }
  return (
    <div className="flex justify-between items-center">
        <Link
            to="/daftar-pengguna"
            className="text-[#0080FF] flex gap-2 items-center text-[16px] ml-[5px]"
        >
        <img src={assets.iconBackDaftarKa} alt="back" />
            Kembali
        </Link>

        <div className="flex gap-3">
            <button 
                onClick={handleClick}
                className=" px-9 py-[9.5px] font-[500] text-[#4B4C4E] border border-[#D2D7E0] bg-[#F9FAFB] flex items-center rounded-lg">
                <span className="me-2 text-[18px]">Edit</span>
                <img src={assets.iconEditDaftarKa} alt="edit" />
            </button>

            <button
                className="px-8 font-[500] bg-[#DB2D24] flex items-center gap-2 rounded-lg"
                onClick={() => setModal(true)}
            >
                <span className="ms-2 text-[18px] text-white ">Hapus Pengguna</span>

                <img src={assets.iconDeleteDaftarKa} alt="delete" />
            </button>
        </div>
    </div>
  )
}
