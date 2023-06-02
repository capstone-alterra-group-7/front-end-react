// ** Import Assets
import { useNavigate } from "react-router-dom"
import assets from "../../../assets/assets"

export default function BarDetailPesananKa() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/pesanan-ka')
    }
  return (
    <div className='bg-white text-[#262627] px-[32px] py-[16px]'>
      <h1 className='text-[32px] font-[700]'>Detail Pesanan Kereta Api</h1>

      <button 
            className="flex items-center pt-[32px]"
            onClick={handleClick}>
            <img src={assets.iconBackDaftarKa} alt="back" />
            <span className="ms-2 text-[#0080FF]">Kembali</span>
        </button>

    </div>
  )
}
