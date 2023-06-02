import React from "react";

const CardRincianHarga = () => {
    return (
        <div>
            <div className="h-[345px] bg-[#FFFFFF] cursor-pointer flex px-[32px]">
                <div className="">
                    <h1 className="font-[600] text-[20px] mt-[16px] mb-[12px]">Rincian Harga</h1>
                </div>

                <div className="absolute w-[96.3%] detail-information border border-[#D2D7E0] rounded-xl mt-[58px] left-[32px] bottom-[16px] ">
                    <div className="flex justify-between">
                        <h1 className="text-[16px] text-[#717275] font-semibold pb-2 ps-[16px] mb-[16px] mt-[16px]">Stay and Dine Package <span className="p-[8px]">x1</span></h1>
                        <th className='text-left font-[600] text-[16px] leading-[24px] ps-7 mt-[16px] mr-[16px]'>
                            <tr><h1>Rp 400.000</h1></tr>
                        </th>
                    </div>

                    <hr />
                    <div className="flex justify-between">
                        <h1 className="text-[16px] text-[#717275] font-semibold pb-2 ps-[16px] mb-[16px] mt-[16px]">Asuransi <span className="p-[8px]">x1</span></h1>
                        <th className='text-left font-[600] text-[16px] leading-[24px] ps-7 mt-[16px] mr-[16px]'>
                            <tr><h1>Rp 10.000</h1></tr>
                        </th>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h1 className="text-[16px] text-[#717275] font-semibold pb-2 ps-[16px] mb-[16px] mt-[16px]">Biaya Layanan <span className="p-[8px]">x1</span></h1>
                        <th className='text-left font-[600] text-[16px] leading-[24px] ps-7 mt-[16px] mr-[16px]'>
                            <tr><h1>Rp 10.000</h1></tr>
                        </th>
                    </div>
                    <hr />
                    <div className="flex justify-between">
                        <h1 className="text-[20px] text-[#4B4C4E] font-bold pb-2 ps-[16px] mb-[16px] mt-[16px]">Total Harga</h1>
                        <th className='text-left font-[700] text-[20px] text-[#0080FF] leading-[30px] ps-7 mt-[16px] mr-[16px]'>
                            <tr><h1>Rp 420.000</h1></tr>
                        </th>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardRincianHarga