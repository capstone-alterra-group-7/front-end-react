// ** Import React
import React from 'react'

// ** Import Assets
import assets from '../../assets/assets'

// ** Import Others
import { Link, useNavigate } from 'react-router-dom'

export default function CardPesananKA({ data }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/detail-pesananKa' , {
      state: {
        data,
      }
    })
  }
  return (
    <div className='bg-white rounded-xl m-[32px] shadow-md border border-[#D2D7E0]'>
      <div 
        className="grid grid-cols-4 p-[24px] cursor-pointer"
        onClick={handleClick}>
        <div className="text-[#262627]">

            <img src={assets.logoKAI} alt="logoKAI" />
            <p className='font-[700] text-[16px] pt-4'>{data.train_name}</p>
            <p className='font-[400] text-[14px]'>{data.class}</p>
            <p className='text-[#717275] text-[14px] pt-4'>{data.time}</p>

        </div>

        <div className="">

            <p className='text-[#0080FF] font-[600]'>{data.order_code}</p>
            <p className='text-[#262627] font-[700] mt-4'>{data.person_name}</p>
            <p className='text-[#717275] text-[14px] font-[400] mt-2'>{data.email}</p>
            <p className='text-[#717275] text-[14px] font-[400] mt-2'>{data.phone}</p>

        </div>

        <div className="flex">

            <div className="flex flex-col mr-4 pt-1">
              <h1 className="mb-20 text-sm font-semibold">
                {data.departure_time}
              </h1>
              <h1 className="text-sm font-semibold">{data.arrives_time}</h1>
            </div>

            <div className="mt-2 mr-2">
              <img src={assets.stepper} alt="strepper" />
            </div>

            <div>
              <div className="mb-14">
                <h1 className="mb-1 text-[15px] font-semibold">{data.origin_station}</h1>
                <h1 className="text-sm">{data.origin_station}</h1>
              </div>

              <div>
                <h1 className="mb-1 text-[15px] font-semibold">{data.destination_stasion}</h1>
                <h1 className="text-sm">{data.destination_stasion}</h1>
              </div>
            </div>

        </div>

        <div className="flex flex-col justify-between ms-8">

            <div className="justify-end text-end">

                <button className='px-[36px] py-[8px] bg-[#CCE5FF] rounded-2xl text-[#0066CC] border border-[#0066CC] font-[600] '>
                   {data.status}
                </button>

            </div>

            <div className="mt-[20px]">
    
                <p className='text-[#262627] font-[400] '>Total Harga</p>
                <p className='text-[32px] font-[700] text-[#0080FF]'>Rp {data.price}</p>

            </div>

        </div>
      </div>
    </div>
  )
}
