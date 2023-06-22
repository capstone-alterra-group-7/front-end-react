import React from "react";
import "./StyleCardPenggunaBaru.css";

const CardPenggunaBaru = ({ dataPenggunaBaru }) => {
  return (
    <div className="col-span-2 rounded-[16px] bg-[#FFFFFF] p-6 border-2 border-[#E1E4EA] mr-[32px] mb-[24px] overflow-y-scroll no-scrollbar">
      <h1 className="font-bold text-xl mb-4">Pengguna Baru</h1>

      <div className="border border-[#D2D7E0] rounded-xl">
        {dataPenggunaBaru?.data?.new_user.map((data, i) => {
          return (
            <React.Fragment key={data.id}>
              <div className="flex px-6 py-3">
                <img src={data.profile_picture} alt="" className="w-12 h-12 mr-3 rounded-3xl" />
                <div className="flex flex-col w-full">
                  <h1 className="font-bold">{data.full_name}</h1>

                  <div className="flex justify-between items-center">
                    <h1>0000{i + 1}</h1>

                    <h1 className="font-medium text-sm">
                      {new Date(data.created_at).toLocaleTimeString("id", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}{" "}
                      WIB
                    </h1>
                  </div>
                </div>
              </div>
              <hr />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default CardPenggunaBaru;
