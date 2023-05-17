// ** Import React
import React, { useState } from "react";

// ** Import Components
import InputTambahKa from "../../../components/daftar-ka/tambah-ka/InputTambahKa";
import InputDropdownTambahKa from "../../../components/daftar-ka/tambah-ka/InputDropdownTambahKa";
import ModalDaftarKa from "../../../components/daftar-ka/detail-kursi/ModalDaftarKa";

// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tambahKa } from "../../../redux/daftar-ka/daftarKaSlices";

const TambahKa = () => {
  // ** Local State
  const [input, setInput] = useState({
    status: false,
    noKa: "",
    namaKa: "",
    harga: "",
    kelasKa: "",
    stasiunAsal: "",
    waktuBerangkat: "",
    stasiunTujuan: "",
    waktuTiba: "",
    rute: "",
  });
  const [nav, setNav] = useState("informasi");

  const handleOnChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate =
    input.noKa === "" ||
    input.namaKa === "" ||
    input.harga === "" ||
    input.kelasKa === "" ||
    input.stasiunAsal === "" ||
    input.waktuBerangkat === "" ||
    input.stasiunTujuan === "" ||
    input.waktuTiba === "" ||
    input.rute === "";

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTambahKa = () => {
    dispatch(tambahKa({ id: Math.random(), ...input }));
    navigate("/daftar-ka");
  };

  return (
    <div className="absolute left-0 right-0 bg-[#F5F6F8] h-[999px]">
      <div className="space-y-6 bg-white py-7 px-8 shadow-md">
        <h1 className="text-[34px] font-[700] text-[#262627]">Tambah KA</h1>

        <div className="flex items-center justify-between">
          <Link to="/daftar-ka" className="flex items-center gap-2 ml-2">
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </Link>

          <button
            data-te-toggle="modal"
            disabled={validate}
            data-te-target="#modal-daftar-ka"
            className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg"
          >
            <h1 className="mt-[1.2px]">Tambah KA</h1>
            <img src={assets.iconButtonDaftarKa} alt="button" />
          </button>
        </div>
      </div>

      <div className="w-[1142px] h-[810px] mt-[64px] mx-auto bg-white rounded-3xl shadow-[0_1px_10px_rgb(0,0,0,0.2)]">
        <div className="grid grid-cols-2 border-b  border-[#D2D7E0]">
          <div className="w-full space-y-4 mt-4">
            <button
              onClick={() => setNav("informasi")}
              className="flex items-center mx-auto text-[16px] text-[#96989C] font-[600]"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-3"
              >
                <path
                  d="M14 18H15V14H14V18ZM14.5 13C14.6333 13 14.75 12.95 14.85 12.85C14.95 12.75 15 12.6333 15 12.5C15 12.3667 14.95 12.25 14.85 12.15C14.75 12.05 14.6333 12 14.5 12C14.3667 12 14.25 12.05 14.15 12.15C14.05 12.25 14 12.3667 14 12.5C14 12.6333 14.05 12.75 14.15 12.85C14.25 12.95 14.3667 13 14.5 13ZM4.5 12H8.175C8.35833 11.6167 8.57083 11.2583 8.8125 10.925C9.05417 10.5917 9.325 10.2833 9.625 10H4.5V12ZM4.5 16H7.575C7.525 15.6667 7.5 15.3333 7.5 15C7.5 14.6667 7.525 14.3333 7.575 14H4.5V16ZM2.5 20C1.95 20 1.47917 19.8042 1.0875 19.4125C0.695833 19.0208 0.5 18.55 0.5 18V2C0.5 1.45 0.695833 0.979167 1.0875 0.5875C1.47917 0.195833 1.95 0 2.5 0H10.5L16.5 6V8.3C16.1833 8.2 15.8583 8.125 15.525 8.075C15.1917 8.025 14.85 8 14.5 8V7H9.5V2H2.5V18H8.175C8.35833 18.3833 8.57083 18.7417 8.8125 19.075C9.05417 19.4083 9.325 19.7167 9.625 20H2.5ZM14.5 10C15.8833 10 17.0625 10.4875 18.0375 11.4625C19.0125 12.4375 19.5 13.6167 19.5 15C19.5 16.3833 19.0125 17.5625 18.0375 18.5375C17.0625 19.5125 15.8833 20 14.5 20C13.1167 20 11.9375 19.5125 10.9625 18.5375C9.9875 17.5625 9.5 16.3833 9.5 15C9.5 13.6167 9.9875 12.4375 10.9625 11.4625C11.9375 10.4875 13.1167 10 14.5 10Z"
                  fill="#717275"
                />
              </svg>
              Informasi KA
            </button>

            {nav === "informasi" && (
              <div className="bg-[#0080FF] px-24 rounded-t-lg py-[2px]"></div>
            )}
          </div>

          <div className="w-full space-y-4 mt-4">
            <button
              onClick={() => setNav("kursi")}
              className="flex items-center mx-auto text-[#96989C] text-[16px] font-[600]"
            >
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-3"
              >
                <path
                  d="M5.5 4C4.95 4 4.47917 3.80417 4.0875 3.4125C3.69583 3.02083 3.5 2.55 3.5 2C3.5 1.45 3.69583 0.979167 4.0875 0.5875C4.47917 0.195833 4.95 0 5.5 0C6.05 0 6.52083 0.195833 6.9125 0.5875C7.30417 0.979167 7.5 1.45 7.5 2C7.5 2.55 7.30417 3.02083 6.9125 3.4125C6.52083 3.80417 6.05 4 5.5 4ZM11 18H4.55C4 18 3.49583 17.8042 3.0375 17.4125C2.57917 17.0208 2.29167 16.55 2.175 16L0 5H2.05L4.25 16H11V18ZM16.5 20L13.6 15H6.65C6.16667 15 5.74583 14.8542 5.3875 14.5625C5.02917 14.2708 4.8 13.8833 4.7 13.4L3.6 8.05C3.41667 7.25 3.60417 6.54167 4.1625 5.925C4.72083 5.30833 5.4 5 6.2 5C6.78333 5 7.3125 5.175 7.7875 5.525C8.2625 5.875 8.56667 6.35 8.7 6.95L9.8 12H13.05C13.4 12 13.725 12.0917 14.025 12.275C14.325 12.4583 14.5667 12.7 14.75 13L18.25 19L16.5 20Z"
                  fill="#717275"
                />
              </svg>
              Kursi
            </button>

            {nav === "kursi" && (
              <div className="bg-[#0080FF] px-24 rounded-t-lg py-[2px]"></div>
            )}
          </div>
        </div>

        <div className="px-10 py-12 space-y-8">
          <div className="space-y-5">
            <div className="flex items-center gap-5">
              <h1 className="text-[20px] font-[600] text-[#262627]">
                Status KA
              </h1>
              <input
                onChange={(e) =>
                  setInput({ ...input, status: e.target.checked })
                }
                value={input.status}
                name="status"
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#0080FF] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#0080FF] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-#0080FF checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] shadow-md"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault01"
              />
            </div>

            <p className="text-[16px] text-slate-900/50 font-[400]">
              {input.status ? "Ka Aktif" : "KA Tidak Aktif"}
            </p>
          </div>

          <div className="flex gap-6">
            <div className="w-[23rem]">
              <InputTambahKa
                value={input.noKa}
                onChange={handleOnChangeInput}
                label="Nomor Kereta Api"
                name="noKa"
                type="number"
                placeholder="cth: 123456"
              />
            </div>

            <div className="flex-1">
              <InputTambahKa
                value={input.namaKa}
                onChange={handleOnChangeInput}
                name="namaKa"
                label="Nama Kereta Api"
                type="text"
                placeholder="Masukkan Nama Kereta Api"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InputTambahKa
              value={input.harga}
              onChange={handleOnChangeInput}
              label="Harga Kereta Api"
              name="harga"
              type="number"
              placeholder="cth: 34.000"
            />

            <InputDropdownTambahKa
              value={input.kelasKa}
              onChange={handleOnChangeInput}
              title="Kelas Kereta Api"
              defaultTitle="Pilih Kelas"
              name="kelasKa"
            >
              <option value="ekonomi">Ekonomi</option>
              <option value="bussiness">Bussiness</option>
            </InputDropdownTambahKa>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InputDropdownTambahKa
              value={input.stasiunAsal}
              onChange={handleOnChangeInput}
              title="Stasiun Asal"
              defaultTitle="Pilih Stasiun"
              name="stasiunAsal"
            >
              <option value="Cikarang">Cikarang</option>
              <option value="Bekasi">Bekasi</option>
            </InputDropdownTambahKa>

            <InputTambahKa
              value={input.waktuBerangkat}
              onChange={handleOnChangeInput}
              label="Waktu Berangkat"
              name="waktuBerangkat"
              type="text"
              placeholder="123@gmail.com"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <InputDropdownTambahKa
              value={input.stasiunTujuan}
              onChange={handleOnChangeInput}
              title="Stasiun Tujuan"
              defaultTitle="Pilih Stasiun"
              name="stasiunTujuan"
            >
              <option value="Jakarta Kota">Jakarta Kota</option>
              <option value="Priuk">Priuk</option>
            </InputDropdownTambahKa>

            <InputTambahKa
              value={input.waktuTiba}
              onChange={handleOnChangeInput}
              label="Waktu Tiba"
              name="waktuTiba"
              type="text"
              placeholder="123@gmail.com"
            />
          </div>

          <InputTambahKa
            value={input.rute}
            onChange={handleOnChangeInput}
            label="Rute Perjalanan"
            name="rute"
            type="text"
            placeholder="Nama Kota (Kode Stasiun)"
          />

          <div className="mb-9"></div>
        </div>
      </div>

      <ModalDaftarKa
        title="Ingin Menyimpan?"
        subTitle="This blog post has been published. Team members will be able to edit this post and republish changes."
        titleButton="Iya, Simpan"
        handleAdd={handleTambahKa}
      />
    </div>
  );
};

export default TambahKa;
