import React from "react";
import assets from "../../../assets/assets";

const CardDetailAkunPengguna = () => {
    return (
        <div>
            <div className="h-[116px] bg-[#FFFFFF] flex my-[8px] cursor-pointer px-[32px]">
                <h1 className="font-[600] text-[16px] leading-[24px] mt-[13px]">Akun Pengguna</h1>
                <div className="w-[44px] h-[44px] flex items-center absolute -ml-[0.3rem] mt-[47px] mb-[18px] whitespace-nowrap">
                    <img src={assets.profile} alt="" />
                    <h1 className="text-[16px] font-[700] flex leading-[24px] ml-[12px] -mt-[1.9rem]">Aldi Dwi Kusuma</h1>
                    <div>
                        <h2 className="text-[14px] font-[400] leading-[20px] text-[#262627] -ml-[8.3rem] mt-[2rem]">123456789</h2>
                    </div>
                </div>
                <button
                    onClick={() => setModal(true)}
                    className="bg-[#0080FF] w-[107px] absolute mt-[53px] ml-[226px] h-[32px] text-white rounded-[8px] flex items-center justify-center mb-[57px] "
                >
                    <h1 className=" text-[14px] font-[600]">Lihat Akun</h1>
                </button>
            </div>
        </div>

    )
}

export default CardDetailAkunPengguna