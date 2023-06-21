import React from "react";
import assets from "../../../assets/assets";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const CardDetailHotel = ({ data }) => {
  const navigate = useNavigate();

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
        <img
          src={
            data.hotel.hotel_image[0].image_url === "string"
              ? assets.imageHotel
              : data.hotel.hotel_image[0].image_url
          }
          alt=""
          className="rounded-[16px] w-[256px] h-auto mr-8"
        />
        <div className="relative w-full flex justify-between">
          <div className="relative text-left w-full flex">
            <div className="w-[20.56px] h-[20.68px] absolute flex">
              {[...Array(5)].map((none, i) => {
                if (i <= Math.floor(data.hotel.class || 5) - 1) {
                  return <img src={assets.iconStarRating} alt="" />;
                }
                return <img src={assets.iconStarNotRating} alt="" />;
              })}
            </div>

            <h1 className="text-[#262627] mt-[1.7rem] font-bold text-[24px]">
              {data.hotel.name}
            </h1>

            <div className="flex items-center absolute -ml-[0.3rem] mt-[4.2rem] whitespace-nowrap">
              <img src={assets.iconGpsMarker} alt="" className="mr-2" />
              <h1 className="text-[16px] font-medium flex text-[#262627] ">
                {data.hotel.address}
              </h1>
            </div>

            <div className="flex items-center mt-3 "></div>

            <h1 className="text-[#0080FF] absolute mt-[7.3rem] flex whitespace-nowrap text-[14px] font-semibold">
              Nomor Pesanan
            </h1>

            <h1 className="absolute text-[#0080FF] font-semibold text-[24px] mb-1 mt-[8.5rem] ">
              {data.ticket_order_code.substring(12, 30)}
            </h1>

            <h1 className="absolute mt-[10.8rem] flex whitespace-nowrap text-[#96989C] text-[14px] font-semibold">
              {moment(data.check_in_date).format("D MMMM YYYY")}
            </h1>
          </div>

          <div className="w-64">
            <div className="ml-[40.67px]">
              <button className="bg-[#0080FF] w-[128px] h-[40px] text-white rounded-[16px] flex items-center justify-center mb-[57px] ml-[65px] ">
                <h1 className=" text-[14px] font-[700]">{data.status}</h1>
              </button>

              <div className="-mt-[2rem] ml-[5rem]">
                <h1 className="font-[600] text-[14px] leading-[20px] ">
                  Check-In
                </h1>
                <h2 className="text-[#0080FF] font-[700] text-[16px] leading-[24px] mt-[4px]">
                  {moment(data.check_in_date).format("D MMMM YYYY")}
                </h2>
                <h1 className="font-[600] text-[14px] leading-[20px] mt-[16px]">
                  Check-Out
                </h1>
                <h2 className="text-[#DB2D24] font-[700] text-[16px] leading-[24px] mt-[4px]">
                  {moment(data.check_out_date).format("D MMMM YYYY")}
                </h2>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate(`/detail-hotel/${data.hotel.hotel_id}`)}
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
