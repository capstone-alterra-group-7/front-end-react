import React from "react";

const CardDaftarTamu = ({ data }) => {
  return (
    <div>
      <div className="h-[300px] bg-[#FFFFFF] flex my-[8px] cursor-pointer px-[32px]">
        <div className="">
          <h1 className="font-[600] text-[20px] mt-[16px]">Daftar Tamu</h1>
        </div>

        <div className="absolute w-[96.3%] border border-[#D2D7E0] rounded-xl mt-[58px] left-[32px]">
          {data.traveler_detail.map((user, index) => (
            <div key={index}>
              <h1 className="text-[16px] font-semibold pb-2 ps-7 mt-[16px]">
                {index + 1}. {user.full_name}
              </h1>
              <h1 className="text-[16px] text-[#717275] font-semibold pb-2 ps-[44px] mb-[16px]">
                KTP - {user.id_card_number}
              </h1>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CardDaftarTamu;
