import React from "react";
import assets from "../../assets/assets";

// ** Import Others
import { useNavigate } from "react-router-dom";
import moment from "moment";

const CardPesananHotel = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-pesanan-hotel", { state: { data } });
  };

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
    <div onClick={handleNavigate}>
      <div className="h-[192px] rounded-[32px] bg-[#FFFFFF] p-4 mx-auto mb-[1.5rem] flex border-2 border-[#E1E4EA] cursor-pointer">
        <img
          src={
            data.hotel.hotel_image[0].image_url === "string"
              ? assets.imageHotel
              : data.hotel.hotel_image[0].image_url
          }
          alt=""
          className="rounded-3xl w-[144px] h-auto mr-8"
        />
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="">
              <div className="w-[20.56px] h-[20.68px] flex">
                {[...Array(5)].map((none, i) => {
                  if (i <= Math.floor(data.hotel.class) - 1) {
                    return <img src={assets.iconStarRating} alt="" />;
                  }
                  return <img src={assets.iconStarNotRating} alt="" />;
                })}
              </div>

              <h1 className="text-[#262627] font-bold text-[20px] mt-[6px]">
                {data.hotel.name.substring(0, 25)}
                {data.hotel.name.length >= 22 && "..."}
              </h1>

              <div className="flex items-center mt-[6px] -ml-[0.3rem]">
                <img src={assets.iconGpsMarker} alt="" className="mr-2" />
                <h1 className="text-[14px] font-medium flex text-[#717275]">
                  <div className="w-full flex">
                    {data.hotel.address.substring(0, 22)}
                    {data.hotel.address.length >= 22 && "..."}
                  </div>
                </h1>
              </div>
            </div>

            <div>
              <h1 className="text-[#0080FF] font-semibold text-[16px]">
                {data.ticket_order_code.substring(12, 30)}
              </h1>

              <h1 className="flex text-[#96989C] text-[14px] font-semibold">
                {moment(data.check_in_date).format("D MMMM YYYY")}
              </h1>
            </div>
          </div>

          <div>
            <h1 className="font-bold text-[16px] text-[#262627] leading-[24px]">
              {data.name_order}
            </h1>
            <h2 className="text-[#717275] font-[400] text-[14px] leading-[20px] mt-[8px]">
              {data.email_order}
            </h2>
            <h2 className="text-[#717275] font-[400] text-[14px] leading-[20px] mt-[4px]">
              {data.phone_number_order}
            </h2>
          </div>

          <div>
            <h1 className="font-[600] text-[14px] text-[#4B4C4E] leading-[20px]">
              Check-In
            </h1>
            <h2 className="text-[#0080FF] font-[700] text-[16px] leading-[24px] mt-[4px]">
              {moment(data.check_in_date).format("D MMMM YYYY")}
            </h2>
            <h1 className="font-[600] text-[14px] text-[#4B4C4E] leading-[20px] mt-[67px]">
              Check-Out
            </h1>
            <h2 className="text-[#DB2D24] font-[700] text-[16px] leading-[24px] mt-[4px]">
              {moment(data.check_out_date).format("D MMMM YYYY")}
            </h2>
          </div>

          <div>
            <div>
              <button
                onClick={() => setModal(true)}
                className={` w-[128px] h-[40px] bg-[#CCE5FF] text-[#0066CC] border border-[#0066CC] rounded-[16px] flex items-center justify-center mb-[57px] ml-[65px]  ${
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
                }`}
              >
                {data.status}
              </button>
              <h1 className="text-start text-[#262627] text-[16px] leading-[24px] font-[400]">
                Total Harga
              </h1>
              <h1 className="text-[32px] text-start font-bold font-sans text-[#0080FF]">
                {rupiah(data.total_amount)}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPesananHotel;
