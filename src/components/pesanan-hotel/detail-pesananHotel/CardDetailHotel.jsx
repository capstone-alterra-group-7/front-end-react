import React from "react";
import assets from "../../../assets/assets";

const CardDetailHotel = ({ data }) => {
    const rupiah = (number) => {
        if (!number) return "Rp 0";
        else
            return new Intl.NumberFormat("id-ID", {
                style: "currency",
                maximumSignificantDigits: 4,
                currency: "IDR",
            }).format(number);
    };
    return (
        <div className="">
            <div className="h-[320px] bg-[#FFFFFF] flex my-[8px] cursor-pointer px-[32px] py-[32px]">
                <img src={assets.imageHotel} alt="" className="rounded-[16px] w-[256px] h-auto mr-8" />
                <div className="relative w-full flex justify-between">
                    <div className="relative text-left flex">
                        <div className="w-[17.56px] h-[16.68px] absolute flex">
                            {[...Array(5)].map((none, i) => {
                                if (i <= Math.floor(data?.rating || 5) - 1) {
                                    return <img src={assets.iconStarRating} alt="" />;
                                }
                                return <img src={assets.iconStarNotRating} alt="" />;
                            })}
                        </div>

                        <h1 className="text-[#262627] mt-[1.5rem] font-bold text-[20px]">{data?.name || "Grand Palace Hotel"}</h1>
                        <div className="flex items-center absolute -ml-[0.3rem] mt-[3.5rem] whitespace-nowrap">
                            <img src={assets.iconGpsMarker} alt="" className="mr-2" />
                            <h1 className="text-[14px] font-medium flex text-[#262627]">
                                <div className="w-full flex">
                                    {data?.regency_id || "Medan"}, {data?.province_id || "Sumatera Utara"}
                                </div>
                            </h1>
                        </div>
                        <h1 className="absolute text-[#0080FF] font-semibold text-[16px] mb-1 mt-[6.5rem] ">{data?.id}</h1>
                        <div className="flex items-center mt-3 ">
                        </div>
                        <h1 className="text-[#0080FF] absolute mt-[8.8rem] flex whitespace-nowrap text-[14px] font-semibold">Nomor Pesanan</h1>
                        <h1 className="absolute mt-[10.8rem] flex whitespace-nowrap text-[#96989C] text-[14px] font-semibold">24 Mei 2023 07:21 WIB</h1>

                    </div>

                    <div className="w-64">
                        <div className="ml-[40.67px]">
                            <button
                                onClick={() => setModal(true)}
                                className="bg-[#0080FF] w-[128px] h-[40px] text-white rounded-[16px] flex items-center justify-center mb-[57px] ml-[65px] "
                            >
                                <h1 className=" text-[14px] font-[700]">Selesai</h1>
                            </button>
                            <div className="-mt-[2rem] ml-[5rem]">
                                <h1 className="font-[600] text-[14px] leading-[20px] ">Check-In</h1>
                                <h2 className="text-[#0080FF] font-[700] text-[16px] leading-[24px] mt-[4px]">1 Juni 2023</h2>
                                <h1 className="font-[600] text-[14px] leading-[20px] mt-[16px]">Check-Out</h1>
                                <h2 className="text-[#DB2D24] font-[700] text-[16px] leading-[24px] mt-[4px]">5 Juni 2023</h2>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={() => setModal(true)}
                        className="bg-[#0080FF] w-full absolute -bottom-[3.6rem] h-[44px] text-white rounded-[8px] flex items-center justify-center mb-[57px] "
                    >
                        <h1 className=" text-[16px] font-[700]">Lihat Hotel</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardDetailHotel;
