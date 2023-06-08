import React from 'react'
import assets from '../../../assets/assets'

export default function TrainDetail() {
  return (
    <div className='bg-white flex justify-between p-[32px]'>
      <div className="flex flex-col justify-between">
        <div className="">
            <img src={assets.logoKAI} alt="" />
            <p className='text-[#262627] text-[20px] font-[700] pt-[32px]'>Putri Deli</p>
            <p className='text-[#0080FF]  text-[20px] font-[700]'>#124SFASFG</p>
        </div>

        <div className="">
            <p className='text-[#0080FF] pt-[48px] text-[32px] font-[700]'>Rp. 130.000</p>
            <p className='text-[#262627] text-[20px] font-[400]'>Sisa 64 Kursi</p>
        </div>
      </div>

      <div className="">
        <p className='bg-[#DBF8D3] border border-[#45C521] w-[192px] py-[8px] text-center rounded-full items-center text-[#45C521] text-[16px] font-[700]'>
                    Akan Datang
        </p>

        <div className="flex pt-[64px]">

            <div className="flex flex-col mr-4 pt-1">
                <h1 className="mb-20 text-sm font-[600]">
                    07.00
                </h1>
                <h1 className="text-sm font-[600]">08.25</h1>
            </div>

            <div className="mt-2 mr-2">
                <img src={assets.stepper} alt="strepper" />
            </div>

            <div>
                <div className="mb-14">
                    <h1 className="mb-1 text-[15px] font-[600]">Medan</h1>
                    <h1 className="text-sm">Medan</h1>
                </div>

                <div>
                    <h1 className="mb-1 text-[15px] font-[600]">Tebing Tinggi</h1>
                    <h1 className="text-sm">Tebing Tinggi</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
