import React from 'react'
import assets from '../../assets/assets'
import "./StyleCardPenggunaBaru.css"

const CardPenggunaBaru = () => {
    return (
        <div className="col-span-2 rounded-[16px] bg-[#FFFFFF] p-6 border-2 border-[#E1E4EA] mr-[32px] mb-[24px] overflow-y-scroll no-scrollbar" >
            <h1 className="font-bold text-xl mb-4">Pengguna Baru</h1>

            <div className="border border-[#D2D7E0] rounded-xl">
                {[...Array(9)].map((data, i) => {
                    return (
                        <>
                            <div className="flex px-6 py-3">
                                <img src={assets.profiledetail} alt="" className="w-12 h-12 mr-3" />
                                <div className="flex flex-col w-full">
                                    <h1 className="font-bold">Aldi Dwi Kusuma</h1>
                                    <div className="flex justify-between items-center">
                                        <h1>123456789</h1>
                                        <h1 className="font-medium text-sm">12:45 WIB</h1>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default CardPenggunaBaru