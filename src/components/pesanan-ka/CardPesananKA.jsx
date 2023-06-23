// ** Import React
import React from "react";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Others
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";

export default function CardPesananKA({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail-pesananKa", {
      state: {
        data,
      },
    });
  };
  return (
    <div className="bg-white rounded-xl m-[32px] shadow-md border border-[#D2D7E0]">
      <div
        className="grid grid-cols-4 p-[24px] cursor-pointer"
        onClick={handleClick}
      >
        <div className="text-[#262627]">
          <img src={assets.logoKAI} alt="logoKAI" />
          <p className="font-[700] text-[16px] pt-4">{data.train.name}</p>
          <p className="font-[400] text-[14px]">{data.train.class}</p>
          <p className="text-[#717275] text-[14px] pt-4">
            {moment(data.date).format("D MMM YYYY")}
          </p>
        </div>

        <div className="">
          <p className="text-[#0080FF] font-[600]">
            {data.boarding_ticket_code.substring(16, 29)}
          </p>
          <p className="text-[#262627] font-[700] mt-4">{data.name_order}</p>
          <p className="text-[#717275] text-[14px] font-[400] mt-2">
            {data.email_order}
          </p>
          <p className="text-[#717275] text-[14px] font-[400] mt-2">
            {data.phone_number_order}
          </p>
        </div>

        <div className="flex">
          <div className="flex flex-col mr-4 pt-1">
            <h1 className="mb-20 text-sm font-semibold">
              {data.station_origin.arrive_time}
            </h1>
            <h1 className="text-sm font-semibold">
              {data.station_destination.arrive_time}
            </h1>
          </div>

          <div className="mt-2 mr-2">
            <img src={assets.stepper} alt="strepper" />
          </div>

          <div>
            <div className="mb-14">
              <h1 className="mb-1 text-[15px] font-semibold">
                {data.station_origin.name.length >= 5
                  ? `${data.station_origin.name.substring(0, 5)}...`
                  : data.station_origin.name}{" "}
                {""}({data.station_origin.initial})
              </h1>
              <h1 className="text-sm">{data.station_origin.origin}</h1>
            </div>

            <div>
              <h1 className="mb-1 text-[15px] font-semibold">
                {data.station_destination.name.length >= 5
                  ? `${data.station_destination.name.substring(0, 5)}...`
                  : data.station_destination.name}{" "}
                ({data.station_destination.initial})
              </h1>
              <h1 className="text-sm">{data.station_destination.origin}</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between ms-8">
          <div className="justify-end text-end">
            <button
              className={` w-[128px] h-[40px] bg-[#CCE5FF] rounded-2xl text-[#0066CC] border border-[#0066CC] font-[600] ${
                data.status === "unpaid" &&
                "bg-[#FFF3CC] text-[#E6B000] border-[#E6B000]"
              }  ${
                (data.status === "refund" &&
                  "bg-[#F8D5D3] text-[#C52920] border-[#C52920]") ||
                (data.status === "canceled" &&
                  "bg-[#F8D5D3] text-[#C52920] border-[#C52920]")
              } ${
                data.status === "paid" &&
                "bg-[#DBF8D3] text-[#45C521] border-[#45C521]"
              }
              `}
            >
              {data.status}
            </button>
          </div>

          <div className="mt-[20px]">
            <p className="text-[#262627] font-[400] ">Total Harga</p>
            <p className="text-[32px] font-[700] text-[#0080FF]">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                maximumSignificantDigits: 4,
              }).format(data.train.train_price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
