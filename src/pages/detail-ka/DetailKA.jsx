// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "./../../assets/assets";

// ** Import Components
import ListNumber from "../../components/detail-ka/ListNumber";
import { DetailKursi } from "../../components/daftar-ka/detail-kursi/DetailKursi";
import ModalDaftarKa from "../../components/daftar-ka/detail-kursi/ModalDaftarKa";

// ** Import Redux
import { useDispatch } from "react-redux";

import { deleteKa } from "../../redux/daftar-ka/daftarKaSlices";

// ** Import Other
import { Link, useLocation, useNavigate } from "react-router-dom";

const DetailKA = () => {
  // ** Local State
  const [nav, setNav] = useState("informasi");

  const {
    state: { data },
  } = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDeleteKa = () => {
    dispatch(deleteKa(data.id));

    navigate("/daftar-ka");
  };

  return (
    <div className="w-full bg-white pb-10">
      <div className="flex flex-col ">
        <div className="p-4">
          <h1 className="text-4xl font-bold w-[1064px] ">Detail KA</h1>

          <div className="row pt-8 flex justify-between items-center">
            <div className="left-content">
              <Link
                to="/daftar-ka"
                className="text-[#0080FF] flex items-center text-[16px]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-2"
                >
                  <path
                    d="M7.00016 13.6668L0.333496 7.00016L7.00016 0.333496L8.18766 1.50016L3.521 6.16683H13.6668V7.8335H3.521L8.18766 12.5002L7.00016 13.6668Z"
                    fill="#717275"
                  />
                </svg>
                Kembali
              </Link>
            </div>
            <div className="right-content flex">
              <button className="w-[132px] h-[52px] px-8 py-[13.5px] font-bold text-[#4B4C4E] border border-gray-400 bg-[#F9FAFB] me-2 flex rounded-lg hover:bg-[#D2D7E0]">
                <span className="me-2 text-[18px]">Edit</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"
                  />
                </svg>
              </button>
              <button
                data-te-toggle="modal"
                data-te-target="#modal-daftar-ka"
                className="w-[187px] h-[52px] px-8 py-[13.5px] font-bold text-white bg-[#DB2D24] flex rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"
                  />
                </svg>
                <span className="ms-2">Hapus KA</span>
              </button>
            </div>
          </div>
        </div>

        <div className="navbar pt-4 pb-8">
          <div className="grid grid-cols-2 border-b border-[#D2D7E0]">
            <div className="w-full space-y-4">
              <button
                onClick={() => setNav("informasi")}
                className="flex items-center mx-auto text-[#96989C] font-medium"
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
                <div className="bg-[#0080FF] px-24 rounded-t-lg py-[3px]"></div>
              )}
            </div>

            <div className="w-full space-y-4">
              <button
                onClick={() => setNav("kursi")}
                className="flex items-center mx-auto text-[#96989C] font-medium"
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
                <div className="bg-[#0080FF] px-24 rounded-t-lg py-[3px]"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      {nav === "informasi" ? (
        <div className="detail">
          <div className="bg-[#FFFFFF] py-2 px-8 mx-auto mb-8 flex justify-between">
            {/* right section */}
            <div className="w-[204px]">
              <img src={assets.logoKai} alt="" />
              <h1 className="font-bold text-xl mt-8">
                {data.namaKa}{" "}
                <span className="font-bold text-[#96989C] text-xl">
                  ({data.kelasKa})
                </span>
              </h1>
              <h1 className="font-bold text-[#0080FF] text-xl mt-3">
                #{data.noKa}
              </h1>
              <h1 className="font-bold text-[#0080FF] text-2xl mt-12">
                Rp {data.harga}
              </h1>
              <h1 className="text-[#262627] mt-4">150 Kursi</h1>
            </div>
            <div className="w-[216px]">
              <button className="w-48 h-10 rounded-2xl font-bold text-white bg-[#0080FF] ms-6">
                {data.status ? "Aktif" : "Tidak Aktif"}
              </button>
              {/* Direction Train */}
              <div className="h-[164px] flex mt-9">
                <div className="flex flex-col mr-4 pt-1">
                  <h1 className="mb-20 text-sm font-semibold">
                    {data.waktuBerangkat}
                  </h1>
                  <h1 className="text-sm font-semibold">{data.waktuTiba}</h1>
                </div>
                <div className="mt-2 mr-2">
                  <img src={assets.stepper} alt="" />
                </div>
                <div>
                  <div className="mb-14">
                    <h1 className="mb-1 font-semibold">{data.stasiunAsal}</h1>
                    <h1 className="text-sm">{data.stasiunAsal}</h1>
                  </div>
                  <div>
                    <h1 className="mb-1 font-semibold">{data.stasiunTujuan}</h1>
                    <h1 className="text-sm">{data.stasiunTujuan}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-[#262627] text-[24px] font-bold p-4">
            Rute Perjalanan
          </h2>
          <div className="list-rute px-4 flex flex-col">
            <ListNumber label={"1"} rute={"Medan (MDN)"} />
            <ListNumber label={"2"} rute={"Batang Kuis (BTK)"} />
            <ListNumber label={"3"} rute={"Aras Kabu (ARB)"} />
            <ListNumber label={"4"} rute={"Lubuk Pakam (LBP)"} />
            <ListNumber label={"5"} rute={"Perbaungan (PBA)"} />
            <ListNumber label={"6"} rute={"Rampah (RPH)"} />
            <ListNumber label={"7"} rute={"Bamban (BMB)"} />
            <ListNumber label={"8"} rute={"Rambutan (RMT)"} />
            <ListNumber label={"9"} rute={"Tebing Tinggi (TBI)"} />
          </div>
        </div>
      ) : (
        <DetailKursi />
      )}

      <ModalDaftarKa
        title="Ingin Menghapus Data KA?"
        subTitle="This blog post has been published. Team members will be able to edit this post and republish changes."
        titleButton="Iya, Hapus"
        bgButton
        handleAdd={handleDeleteKa}
      />
    </div>
  );
};

export default DetailKA;
