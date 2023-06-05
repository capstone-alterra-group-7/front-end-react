import React from "react";
import assets from "../../assets/assets";



const CardHotel = () => {

    return (
        <div className="pt-[32px] pb-[24px]">
            <div className="rounded-[16px] bg-[#FFFFFF] px-[32px] flex border-2 border-[#E1E4EA] ">
                <div className="flex justify-between">
                    <div className=" text-left ">
                        <div className="flex mt-[24px] ">
                            <img src={assets.iconBuildingBlue} alt="" className="mr-2" />
                            <h1 className="text-[#0080FF] text-[20px] font-[600] leading-[30px]">
                                Hotel
                            </h1>
                        </div>
                        <div className="flex items-end mt-[24px] ">
                            <h1 className=" font-bold text-[32px] mb-2 leading-[40px] mr-2">125129</h1>
                            <h1 className="font-[500] text-[16px] mb-2 leading-[24px] ">Hotel</h1>
                        </div>

                        <div className="flex items-end mb-[20px]">
                            <h1 className="text-[#717275] font-[500] text-[14px] mb-2 leading-[20px] mr-2">1268</h1>
                            <h1 className="text-[#717275] font-[500] text-[14px] mb-2 leading-[20px] ">Bertambah hari ini</h1>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}
export default CardHotel;
