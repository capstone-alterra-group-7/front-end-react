import React, { useState } from "react";

// ** Import Other
import assets from "../../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";

// ** Import Component
import ButtonDetailHotel from "../../detail-hotel/ButtonDetailHotel";
import CardPenawaranAddHotel from "./CardPenawaranAddHotel";
import { rupiah } from "../../../../helpers/libs";
import ModalConfirmHotel from "../../ModalConfirmHotel";

const CardTambahKamar = (props) => {
  const { data, nomor, setDataRooms, validate } = props;
  // console.log("Data dari card tambah kamar : ", data);
  console.log("Nomor : ", nomor, "data: ", data?.name);
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate("/detail-hotel/detail-kamar");
  };

  const [modal, setModal] = useState({ edit: false, delete: false });

  const handleDeleteCardKamar = (e) => {
    setModal((prev) => ({ ...prev, delete: false }));
    setDataRooms((prev) => [...prev.slice(0, nomor), ...prev.slice(nomor + 1)]);
  };

  return (
    <div className="p-8 bg-white rounded-[2rem] mb-7">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Kamar {nomor + 1}</h1>
        <ButtonDetailHotel title="Kamar" setModal={setModal} validate={validate} />
      </div>
      <div className="p-7 grid grid-cols-7">
        <div className="h-[21rem] mr-8 col-span-2">
          <img src={URL.createObjectURL(data?.hotel_room_image[0].imageFile)} alt="" className="w-64 object-cover" />
          {data?.hotel_room_image?.length > 1 ? (
            <div className="mt-4 flex gap-2">
              {data?.hotel_room_image?.slice(1, data?.hotel_room_image?.length).map((data, idx) => (
                <img src={URL.createObjectURL(data?.imageFile)} alt="" className="w-[3.75rem] object-cover" />
              ))}
            </div>
          ) : null}
        </div>

        <div className="col-span-5">
          <h1 className="text-[32px] font-bold mb-1">{data?.name}</h1>
          <h1 className="text-[#0080FF] text-xl font-semibold">#{nomor}</h1>
          <h1 className="mt-4 mb-3">
            <img src={assets.iconSeat} alt="" className="inline mr-1" /> {data?.size_of_room} m<sup>2</sup>
          </h1>
          <h1 className="mb-8">
            Total Kamar: <span className="font-semibold">{data?.quantity_of_room} Kamar</span>
          </h1>
          <h1 className="mb-8">{data?.description?.substring(0, 250)}...</h1>
          <button className="p-3 border border-[#D2D7E0] w-full text-[#4B4C4E]" onClick={handleNavigate}>
            Lihat Detail Kamar
          </button>
        </div>
      </div>

      <div className="flex flex-col h-full mt-10">
        <div className="flex">
          <h1 className="px-2 py-1 bg-[#DBF8D3] text-[#45C521] rounded-lg mr-3 mb-3">-{data?.discount}%</h1>
          <h1 className="text-[#96989C] text-2xl line-through">{rupiah(data?.normal_price)}</h1>
        </div>

        <h1 className="text-5xl font-bold text-[#0080FF] mb-1">
          {rupiah((data?.normal_price * (100 - data?.discount)) / 100)}
        </h1>
        <h1 className="text-[#96989C] text-xl mb-1">/ kamar / malam</h1>
        <h1 className="text-[#FF7300] text-xl mb-6">Termasuk Pajak</h1>
      </div>

      <div className="mt-5 grid grid-cols-2 w-1/5 gap-x-5 gap-y-2">
        {data?.hotel_room_facility?.map((data, idx) => {
          return (
            <div className="flex">
              <img src={assets.iconSpoonFork} alt="" className="mr-4" />
              <h1>{data?.name}</h1>
            </div>
          );
        })}
      </div>

      {modal.delete && (
        <ModalConfirmHotel
          title="Menghapus Data Kamar"
          desc="Anda akan menghapus data kamar ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."
          bg="bg-[#DB2D24]"
          cancel="Batal"
          confirm="Hapus"
          name="delete"
          setModal={setModal}
          handle={handleDeleteCardKamar}
        />
      )}
    </div>
  );
};

export default CardTambahKamar;
