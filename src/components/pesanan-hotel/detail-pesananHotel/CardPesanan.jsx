import React from "react";
import assets from "../../../assets/assets";

const CardPesanan = () => {
    return (
        <div>
            <div className="h-[368px] bg-[#FFFFFF] flex my-[8px] cursor-pointer px-[32px]">
                <h1 className="font-[600] text-[20px] leading-[30px] mt-[16px]">Pesanan</h1>
                <div className="flex my-[8px] -ml-[5.1rem] py-[58px]">
                    <img src={assets.imagePesananHotel} alt="" className="rounded-[32px] w-[256px] h-[256px] mr-8" />
                    <h1 className="font-[600] text-[20px] leading-[30px] -mt-[6px] pb-2 ps-[16px] mb-[16px]">(x1) <span className="pl-[8px]">Stay and Dine Package</span></h1>
                </div>
                <img src={assets.iconCardPesanan1} alt="" className="-ml-[17rem] mt-[100px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[100px] ">
                    <div className="w-full flex">
                        <h1>65 m2</h1>
                    </div>
                </h1>

                <img src={assets.iconCardPesanan2} alt="" className="-ml-[83px] mt-[140px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[140px]">
                    <div className="w-full flex">
                        <h1>2 Tamu</h1>
                    </div>
                </h1>

                <img src={assets.iconCardPesanan3} alt="" className="-ml-[93px] mt-[180px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[180px]">
                    <div className="w-full flex">
                        <h1>1 King</h1>
                    </div>
                </h1>

                <img src={assets.iconCardPesanan4} alt="" className="-ml-[87px] mt-[220px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[220px]">
                    <div className="w-full flex">
                        <h1>Sarapan (2 pax)</h1>
                    </div>
                </h1>

                <img src={assets.iconCardPesanan5} alt="" className="-ml-[158px] mt-[260px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[260px]">
                    <div className="w-full flex">
                        <h1>Gratis Wifi</h1>
                    </div>
                </h1>

                <img src={assets.iconCardPesanan6} alt="" className="-ml-[118px] mt-[300px] mr-[14px] w-[24px] h-[24px]" />
                <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627] mt-[300px]">
                    <div className="w-full flex">
                        <h1>Boleh merokok di kamar</h1>
                    </div>
                </h1>
            </div>
        </div>

    )
}

export default CardPesanan