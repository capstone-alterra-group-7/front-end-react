// ** Import React
import React from "react";

// ** Import Assets
import assets from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function PessangerDetail({ data }) {
  const navigate = useNavigate();

  const handleNavigatePengguna = () => {
    navigate("/detail-pengguna", {
      state: { data: { id: data.user.user_id } },
    });
  };

  return (
    <div>
      <div className="mt-2 bg-white px-[32px] py-[16px] text-[#262627]">
        <p className="font-[600] pb-[14px]">Akun Pengguna</p>
        <div className="flex items-center">
          <img
            src={
              data.user.profile_picture_url === ""
                ? "https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg"
                : data.user.profile_picture_url
            }
            alt="profile"
            className="w-12 h-12 mr-3 rounded-3xl"
          />

          <div className="flex flex-col ps-4">
            <p className="font-[700]">{data.name_order}</p>
            <p>{data.traveler_detail[0]?.id_card_number}</p>
          </div>

          <button
            onClick={handleNavigatePengguna}
            className="bg-[#0080FF] text-white font-[600] text-[14px] w-[107px] h-[32px] rounded-lg ms-[32px]"
          >
            Lihat Akun
          </button>
        </div>
      </div>

      <div className="bg-white mt-2 px-[32px] py-[16px] text-[#262627]">
        <div className="border border-[#D2D7E0] rounded-lg px-[24px] py-[12px]">
          <p className="text-[20px] font-[600]">Data Pemesan</p>
          <hr />

          <div className="flex mt-4 leading-8">
            <div className="me-4 font-[600]">
              <p>Nama Pemesan</p>
              <p>Nomor Hp</p>
              <p>Email</p>
            </div>

            <div className="">
              <p>{data.name_order}</p>
              <p>{data.phone_number_order}</p>
              <p>{data.email_order}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white mt-2 px-[32px] py-[16px]">
        <p className="text-[20px] font-[600] mb-3">Daftar Penumpang</p>

        <div className="border border-[#D2D7E0] rounded-lg p-[16px]">
          <div className="leading-8">
            {data.traveler_detail.map((user, index) => (
              <React.Fragment key={index}>
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-[700]">
                      {index + 1}. {user.full_name}
                    </p>
                    <p className="ms-4 text-[#717275] font-[600]">
                      KTP - {user.id_card_number}
                    </p>

                    <div className="flex ms-3 mt-2 mb-4">
                      <p className="bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl me-2">
                        {data.station_origin.initial}
                      </p>
                      <img src={assets.direction} alt="" />
                      <p className="bg-[#EBEDF1] py-[6px] px-[12px] rounded-3xl ms-2">
                        {data.station_destination.initial}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-center">
                    <div className="bg-[#E5F2FF] py-[6px] px-[12px] rounded-xl text-[#0080FF] font-[600] text-[14px] ">
                      {user.id_card_number >= 1 ? "Dewasa" : "Anak"}
                    </div>
                    <p className="font-[600] text-[14px] text-[#717275]">
                      {data.train.class} / {data.train.train_seat}
                    </p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
