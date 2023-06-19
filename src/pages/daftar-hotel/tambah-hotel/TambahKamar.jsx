import React, { useState } from "react";

// ** Import Other
import { Link } from "react-router-dom";
import assets from "../../../assets/assets";
import FormAddKamar from "./FormAddKamar";
import ModalConfirmAddKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/ModalConfirmAddKamar";

const TambahKamar = ({ setAddingRoom, setDataRooms, name }) => {
  const [modal, setModal] = useState({ back: false, add: false });
  // state for clicked kebijakan kamar
  const [clicked, setClicked] = useState({ diskon: false, sarapan: false, wifi: false, merokok: false, refund: false });

  const [dataKamar, setDataKamar] = useState({
    discount: 0,
    name: "",
    description: "",
    hotel_room_facility: [],
    hotel_room_image: [],
    normal_price: "",
    number_of_guest: "",
    number_of_mattress: "",
    quantity_of_room: "",
    size_of_room: "",
    mattress_size: "",
  });
  console.log("Data Kamar: ", dataKamar);

  const handleAddKamar = () => {
    setDataRooms((prev) => [...prev, dataKamar]);
    setAddingRoom(false);
  };

  const handleEditKamar = () => {
    setAddingRoom(false);
  };

  const validate =
    dataKamar.name === "" ||
    dataKamar.normal_price === "" ||
    dataKamar.number_of_guest === 0 ||
    dataKamar.quantity_of_room === "" ||
    dataKamar.size_of_room === "" ||
    dataKamar.mattress_size === "" ||
    dataKamar.hotel_room_image.length < 1;

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto h-full top-0 right-0 left-0 bottom-0">
      <div className="space-y-6 bg-white pt-7 pb-4 px-8">
        <h1 className="text-[34px] font-[700] text-[#262627]">Tambah Kamar</h1>

        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-2 ml-2 cursor-pointer"
            onClick={() => {
              setModal((prev) => ({ ...prev, back: true }));
            }}
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </div>

          <button
            disabled={validate}
            onClick={() => {
              setModal((prev) => ({ ...prev, add: true }));
            }}
            className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
          >
            <h1 className="mt-[1.2px]">Tambah Data Kamar</h1>
            <img src={assets.iconSaveHotel} alt="button" />
          </button>
        </div>

        {modal.back && (
          <ModalConfirmAddKamar
            title={name === "add" ? "Batal Menambahkan Data Kamar" : "Batal Mengubah Data Kamar"}
            desc={`Anda akan membatalkan ${
              name === "add" ? "penambahan" : "perubahan"
            } data kamar .Apakah Anda yakin ingin melanjutkan?`}
            bg="bg-[#DB2D24]"
            cancel="Tutup"
            confirm="Batalkan"
            handleCancel={() => setModal((prev) => ({ ...prev, back: false }))}
            handleConfirm={() => setAddingRoom(false)}
          />
        )}

        {modal.add && (
          <ModalConfirmAddKamar
            title={name === "add" ? "Simpan Data Kamar" : "Simpan Perubahan Data Kamar"}
            desc={`Anda akan menyimpan ${
              name === "add" ? "data kamar baru" : "perubahan pada data kamar"
            } . Apakah Anda yakin ingin melanjutkan?`}
            bg="bg-[#0080FF]"
            cancel="Batal"
            confirm="Simpan"
            handleCancel={() => setModal((prev) => ({ ...prev, add: false }))}
            handleConfirm={name === "add" ? handleAddKamar : handleEditKamar}
          />
        )}
      </div>

      <FormAddKamar dataKamar={dataKamar} setDataKamar={setDataKamar} clicked={clicked} setClicked={setClicked} />
    </div>
  );
};

export default TambahKamar;
