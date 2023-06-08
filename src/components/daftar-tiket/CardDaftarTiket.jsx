import React from 'react'
import assets from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

export default function CardDaftarTiket({  }) {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/detail-tiket")
    }

  return (
    <div 
        className='bg-white m-[32px] rounded-3xl cursor-pointer shadow-md border border-[#D2D7E0]'
        onClick={handleClick}>
        <div className=" flex justify-between    p-[24px]">

            <div className="">

                <img src={assets.logoKai} alt="logoKAI" />
                <p className='text-[#262627] font-[700] text-[20px] pt-[24px]'>Putri Deli</p>
                <p className='pt-[8px] text-[#0080FF] text-[20px] font-[600]'>#ASf124</p>
                <p className='text-[#0080FF] font-[600] text-[32px] pt-[50px]'>Rp. 120.000</p>
                <p className='text-[#262627] text-[20px] font-[400] pt-[12px]'>Sisa 64 Kursi</p>

            </div>

            <div className="">

                <p className='bg-[#DBF8D3] border border-[#45C521] w-[192px] py-[8px] text-center rounded-full items-center text-[#45C521] text-[16px] font-[700]'>
                    Akan Datang
                </p>
                <p className='pt-[48px] text-[#0080FF] font-[600] justify-end text-end'>12 Mei 2023</p>
                <div className="flex pt-[16px]">

                    <div className="flex flex-col mr-4 pt-1">
                        <h1 className="mb-20 text-sm font-semibold">
                            07.00
                        </h1>
                        <h1 className="text-sm font-semibold">08.25</h1>
                    </div>

                    <div className="mt-2 mr-2">
                        <img src={assets.stepper} alt="strepper" />
                    </div>

                    <div>
                        <div className="mb-14">
                            <h1 className="mb-1 text-[15px] font-semibold">Medan</h1>
                            <h1 className="text-sm">Medan</h1>
                        </div>

                        <div>
                            <h1 className="mb-1 text-[15px] font-semibold">Tebing Tinggi</h1>
                            <h1 className="text-sm">Tebing Tinggi</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
      
    </div>
  )
}
