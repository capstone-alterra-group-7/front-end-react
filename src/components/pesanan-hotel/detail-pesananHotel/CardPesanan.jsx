import React from "react";
import assets from "../../../assets/assets";

const CardPesanan = ({ data }) => {
  return (
    <div>
      <div className="h-[368px] bg-[#FFFFFF]  my-[10px] py-1 cursor-pointer px-[32px]">
        <h1 className="font-[600] text-[20px] leading-[30px] py-2">Pesanan</h1>

        <div className="flex mto-5 gap-3">
          <img
            src={
              data.hotel.hotel_room.hotel_room_image === null
                ? ""
                : data.hotel.hotel_room.hotel_room_image[0].image_url
            }
            alt=""
            className="rounded-[32px] w-[256px] h-[256px] mr-8"
          />

          <div className="space-y-5">
            <h1 className="font-[600] text-[20px]">
              (x{data.hotel.hotel_room.quantity_of_room}){" "}
              <span className="pl-[8px]">{data.hotel.hotel_room.name}</span>
            </h1>

            <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan1}
                alt=""
                className=" w-[24px] h-[24px]"
              />

              <h1 className="text-[16px] leading-[24px] font-[600] flex">
                <div className="w-full flex">
                  <h1>{data.hotel.hotel_room.size_of_room}</h1>
                </div>
              </h1>
            </div>

            <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan2}
                alt=""
                className=" w-[24px] h-[24px]"
              />
              <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627]">
                <div className="w-full flex">
                  <h1>{data.hotel.hotel_room.number_of_guest} Tamu</h1>
                </div>
              </h1>
            </div>

            <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan3}
                alt=""
                className=" w-[24px] h-[24px]"
              />
              <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627]">
                <div className="w-full flex">
                  <h1>{data.hotel.hotel_room.number_of_mattress} King</h1>
                </div>
              </h1>
            </div>

            {/* <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan4}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627]">
                <div className="w-full flex">
                  <h1>Sarapan (2 pax)</h1>
                </div>
              </h1>
            </div>

            <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan5}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627]">
                <div className="w-full flex">
                  <h1>Gratis Wifi</h1>
                </div>
              </h1>
            </div>

            <div className="flex gap-3">
              <img
                src={assets.iconCardPesanan6}
                alt=""
                className="w-[24px] h-[24px]"
              />
              <h1 className="text-[16px] leading-[24px] font-[600] flex text-[#262627]">
                <div className="w-full flex">
                  <h1>Boleh merokok di kamar</h1>
                </div>
              </h1>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPesanan;
