// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { useState } from "react";
import moment from "moment";

export default function CardProfile({ data }) {

  return (
    <div className="bg-white flex flex-col flex-wrap">
      <div className="flex flex-col items-center justify-center pt-[40px]">

        <img src={data.profile_picture_url} alt="profileimage" className="max-w-[128px]" />

        <h1 className="text-[24px] mt-[24px] mb-10">{data.full_name}</h1>

      </div>

      <div className="detail-information m-6 border border-[#D2D7E0] rounded-xl p-5">
        <h1 className="text-[20px] font-semibold pb-2">Informasi Akun</h1>
        <hr />
        
        <table className='leading-9'>

            <th className='text-left font-semibold pt-4'>
                <tr>ID Akun</tr>
                <tr>Email</tr>
                <tr>Tanggal Mendaftar</tr>
                <tr>Umur Akun</tr>
                <tr>Status Akun</tr>
            </th>

            <th className='text-left font-normal ps-7 pt-4'>
                <tr>{data.id}</tr>
                <tr>{data.email}</tr>
                <tr>
                {moment(data.created_at).format("D MMM YYYY")}{" "}
                          <span className="ml-2">
                            {new Date(data.created_at).toLocaleTimeString(
                              "id",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}{" "} </span> WIB
                </tr>
                <tr>{data.umurAkun || "null"}</tr>
                <tr>
                    {data.deleted_at === "" && data.is_active === "true"
                      ? "Aktif"
                      : "Non Aktif"}
                </tr>
            </th>      
        </table>
      </div>

      <div className="detail-information m-6 border border-[#D2D7E0] rounded-xl p-5">

        <h1 className="text-[20px] font-semibold pb-2">Data Pengguna</h1>
        <hr />
        
        <table className='leading-9'>

            <th className='text-left font-semibold pt-4'>
                <tr>Tanggal Lahir</tr>
                <tr>Umur Pengguna</tr>
                <tr>Nomor Handphone</tr>
            </th>

            <th className='text-left font-normal ps-7 pt-4'>
                <tr>{data.birth_date || "null"}</tr>
                <tr>23 Tahun</tr>
                <tr>{data.phone_number}</tr>
            </th>
                    
        </table>

      </div>
    </div>
  )
}
