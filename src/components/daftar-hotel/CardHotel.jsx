// ** Import Assets
import { rupiah } from "../../helpers/libs";
import assets from "./../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const CardHotel = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail-hotel/${data?.hotel_id}`);
  };

  return (
    <div onClick={handleNavigate}>
      <div className="rounded-[32px] bg-[#FFFFFF] p-4 mx-auto mb-[1.5rem] flex border-2 border-[#E1E4EA] cursor-pointer">
        <div className="w-[15rem] h-[12rem] mr-8">
          <img
            src={data?.hotel_image === null ? "" : data?.hotel_image[0]?.image_url}
            alt="hotel.img"
            className="rounded-3xl object-cover w-[12rem] h-[12rem]"
          />
        </div>
        <div className="w-full grid grid-cols-5">
          <div className="col-span-3">
            <div className="flex mb-1">
              {[...Array(5)].map((none, i) => {
                if (i <= Math.floor(parseInt(data?.class)) - 1) {
                  return <img src={assets.iconStarRating} alt="" key={i} />;
                }
                return <img src={assets.iconStarNotRating} alt="" key={i} />;
              })}
            </div>
            <h1 className="text-[#262627] font-bold text-2xl mb-1">{data?.name}</h1>
            <h1 className="text-[#0080FF] font-semibold text-xl">{data?.hotel_id}</h1>

            <div className="flex items-center mt-1">
              <img src={assets.iconGpsMarker} alt="" className="mr-2 mt-[2px]" />
              <h1 className="text-sm font-medium text-[#262627]">{data?.address}</h1>
            </div>

            <div className="flex items-center mt-2">
              <img src={assets.iconStarRating} alt="" className="mr-2" />
              <h1 className="text-[#262627]">
                {data?.rating}/5 <span className="text-[#717275]">(500)</span>
              </h1>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mt-20">
              <h1 className="text-[2rem] xl:text-[2.5rem] text-end font-bold font-sans text-[#0080FF]">
                {rupiah(data?.hotel_room_start)}
              </h1>
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
