import React from 'react'

export default function ListNumber({label, rute}) {
  return (
    <div className="wrapper flex py-2">
        <div className='bg-[#0080FF] rounded-full w-[24px] h-[24px] flex justify-center items-center'>
        <p className='font-medium text-white text-[16px]'>{label}</p>
        </div>
        <span className="ms-2 text-[16px]">{rute}</span>
    </div>
  )
}
