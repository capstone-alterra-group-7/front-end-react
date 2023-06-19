import React, { useState } from "react";

// ** Import Components
import ButtonDetailHotel from "../detail-hotel/ButtonDetailHotel";
import CardTambahKamar from "./daftar-kamar/CardTambahKamar";

// ** Import Other
import assets from "../../../assets/assets";
import TambahKamar from "../../../pages/daftar-hotel/tambah-hotel/TambahKamar";

const DaftarTambahKamar = (props) => {
  const { dataRooms, setDataRooms, addingRoom, setAddingRoom } = props;

  const validate = dataRooms.length < 2;

  return (
    <>
      <div className="bg-[#EBEDF1] px-36 py-12">
        {/* Card kamar */}
        {dataRooms?.map((data, idx) => {
          return <CardTambahKamar key={idx} data={data} nomor={idx} setDataRooms={setDataRooms} validate={validate} />;
        })}

        <div className="bg-white rounded-[2rem] h-[32rem] 2xl:h-[40rem] flex flex-col items-center justify-center">
          <img src={assets.iconAddKamar} alt="" className="mb-8 h-64 2xl:h-80" />
          <h1 className="text-2xl font-semibold mb-2">
            {dataRooms.length < 1 ? "Belum menambah kamar hotel" : "Tambah kamar hotel"}
          </h1>
          <h1 className="font-thin text-[#717275] mb-8">
            Silahkan Masukkan Data Kamar {dataRooms.length > 0 ? "Lainnya" : ""}
          </h1>
          <button
            className="bg-[#0080FF] py-3 px-6 text-white font-medium rounded-lg"
            onClick={() => setAddingRoom(true)}
          >
            Tambah Kamar
          </button>
        </div>
      </div>
      {addingRoom && <TambahKamar setAddingRoom={setAddingRoom} setDataRooms={setDataRooms} name={"add"} />}
    </>
  );
};

export default DaftarTambahKamar;
