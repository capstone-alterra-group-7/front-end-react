import React from 'react'
import assets from '../../../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function BarDetailTiket() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/daftar-tiket')
    }
  return (
    <div className='bg-white text-[#262627] px-[32px] py-[16px] '>
        <h1 className='text-[32px] font-[700]'>Detail Pesanan Kereta Api</h1>

        <div className="flex items-center justify-between">

            <div className="">
                <button 
                    className="flex items-center pt-[32px]"
                    onClick={handleClick}>
                    <img src={assets.iconBackDaftarKa} alt="back" />
                    <span className="ms-2 text-[#0080FF]">Kembali</span>
                </button>
            </div>

            <div className="flex justify-center items-center pt-[32px]">
                <p className='text-[#262627] text-[14px] font-[600] me-2'>Tanggal</p>
                <div className="flex bg-[#F9FAFB] border border-[#D2D7E0] p-2 rounded-md">
                    <p className='pe-[75px] text-[#96989C] text-[16px] font-[400]'>12 Mei 2023</p>
                    <img src={assets.calender} alt="calender" />
                </div>
            </div>
        </div>


  </div>
  )
}
