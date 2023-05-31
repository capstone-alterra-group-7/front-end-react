import React from 'react'
import assets from '../../assets/assets'

export default function Pagination() {
  return (
    <div className="pagination">
        <div className='grid grid-cols-5 p-5'>
            <div className='flex w-[140px] rounded-lg items-center text-[#262627] font-[600] p-3 ms-4 bg-[#F9FAFB] border border-[#D2D7E0]'>
                <img src={assets.Prev} alt="prev" className='me-2' />
                <p>Previous</p>  
            </div>

            <div className="flex col-span-3">

            </div>

            <div className='relative flex w-[110px] text-center rounded-lg items-center ps-3 text-[#262627] font-[600] p-3 ms-4 bg-[#F9FAFB] border border-[#D2D7E0]'>
                <p className='ps-3'>Next</p> 
                <img src={assets.Next} alt="prev" className='absolute right-5' />
            </div>
        </div>
    </div>
  )
}
