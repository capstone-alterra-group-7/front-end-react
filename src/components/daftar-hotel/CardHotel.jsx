import React from "react";
import assets from "../../assets/assets";

const CardHotel = ({ data }) => {
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
      <div className="h-72 rounded-[32px] bg-[#FFFFFF] p-4 mx-auto mb-[1.5rem] flex border-2 border-[#E1E4EA] cursor-pointer">
        <img src={assets.imageHotel} alt="" className="rounded-3xl w-72 h-auto mr-8" />
        <div className="w-full flex justify-between">
          <div>
            <h1 className="text-[#0080FF] font-semibold text-xl mb-1">{data.id}</h1>
            <h1 className="text-[#262627] font-bold text-2xl">{data.name}</h1>
            <div className="flex items-center mt-2">
              <img src={assets.iconGpsMarker} alt="" className="mr-2" />
              <h1 className="text-xl font-medium text-[#262627]">
                {data.regency_id}, {data.province_id}
              </h1>
            </div>
            <div className="flex items-center mt-3 ">
              <img src={assets.iconStarRating} alt="" className="mr-2" />
              <h1 className="text-[#262627]">
                {data.rating}/5 <span className="text-[#717275]">(500)</span>
              </h1>
            </div>
          </div>

          <div className="w-64">
            <div className="text-end flex justify-end">
              {[...Array(5)].map((none, i) => {
                if (i <= Math.floor(data.rating) - 1) {
                  return <img src={assets.iconStarRating} alt="" />;
                }
                return <img src={assets.iconStarNotRating} alt="" />;
              })}
            </div>
            <div className="mt-28">
              <h1 className="text-[2.5rem] text-end font-bold font-sans text-[#0080FF]">{rupiah(data.price)}</h1>
              <h1 className="text-end text-[#96989C] text-xl font-semibold">/ kamar / malam</h1>
              <h1 className="text-end text-[#FF7300] text-lg">Termasuk Pajak</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHotel;