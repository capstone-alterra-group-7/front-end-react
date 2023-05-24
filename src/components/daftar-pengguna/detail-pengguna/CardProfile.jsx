// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function CardProfile({ data }) {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    
  return (
    <div className="bg-white flex flex-col flex-wrap">
      <div className="flex flex-col items-center justify-center pt-4">

        <img src={assets.profiledetail} alt="profileimage" />

        <h1 className="text-[24px] mt-4 mb-10">{data.nama}</h1>

      </div>

      <div className="detail-information m-6 border border-[#D2D7E0] rounded-xl p-5">
        <h1 className="text-[20px] font-semibold pb-2">Informasi Akun</h1>
        <hr />
        
        <table className='leading-9'>

            <th className='text-left font-semibold pt-4'>
                <tr>ID Akun</tr>
                <tr>Email</tr>
                <tr>Password</tr>
                <tr>Tanggal Mendaftar</tr>
                <tr>Umur Akun</tr>
                <tr>Status Akun</tr>
            </th>

            <th className='text-left font-normal ps-7 pt-4'>
                <tr>67890</tr>
                <tr>{data.email}</tr>
                <tr>
                  aldidwikusumaaa
                  <button 
                    className="ms-2"
                    onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                        <img src={assets.visiblePassword} alt="visiblepassword" />
                      ) : (
                        <img src={assets.notVisiblePassword} alt="notvisiblepassword" />
                      )}
                  </button>
                </tr>
                <tr>12 Januari 2023</tr>
                <tr>{data.umurAkun}</tr>
                <tr>{data.statusAkun}</tr>
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
                <tr>{data.tanggalLahir}</tr>
                <tr>{data.umurPengguna}</tr>
                <tr>{data.noTelp}</tr>
            </th>
                    
        </table>

      </div>
    </div>
  )
}
