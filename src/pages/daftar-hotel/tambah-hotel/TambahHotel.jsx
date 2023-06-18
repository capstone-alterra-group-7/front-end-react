import React, { useState } from "react";

// ** Import Component
import HeaderTambahHotel from "../../../components/daftar-hotel/tambah-hotel/HeaderTambahHotel";
import NavTambahHotel from "../../../components/daftar-hotel/tambah-hotel/NavTambahHotel";
import InformasiTambahHotel from "../../../components/daftar-hotel/tambah-hotel/InformasiTambahHotel";
import KebijakanKamar from "../../../components/daftar-hotel/tambah-hotel/KebijakanKamar";
import DaftarTambahKamar from "../../../components/daftar-hotel/tambah-hotel/DaftarTambahKamar";
import ModalConfirmHotel from "../../../components/daftar-hotel/ModalConfirmHotel";
import { useNavigate } from "react-router-dom";

const TambahHotel = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState({ back: false, add: false });
  // state for add kamar
  const [addingRoom, setAddingRoom] = useState(false);

  // input data
  const [dataInput, setDataInput] = useState({
    name: "",
    class: 0,
    description: "",
    phone_number: "",
    email: "",
    address: "",
    hotel_facilities: [],
    hotel_image: [],
    hotel_policy: [
      {
        is_breakfast: false,
        is_check_in_check_out: false,
        is_check_in_early: false,
        is_check_out_overdue: false,
        is_pet: false,
        is_policy_canceled: false,
        is_policy_minimum_age: false,
        is_smoking: false,
        policy_minimum_age: 0,
        time_breakfast_end: "",
        time_breakfast_start: "",
        time_check_in: "",
        time_check_out: "",
      },
    ],
  });
  // Data daftar kamar
  const [dataRooms, setDataRooms] = useState([]);

  const validate = dataRooms?.length < 1;

  console.log("data Rooms : ", dataRooms);

  const handleOnChangeInput = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };

  // console.log(dataInput);

  return (
    <div className={`bg-[#FFFFFF] fixed left-0 right-0 h-full ${addingRoom ? "overflow-y-hidden" : "overflow-y-auto"}`}>
      <HeaderTambahHotel setModal={setModal} validate={validate} />

      <NavTambahHotel nav={nav} setNav={setNav} />

      {nav === "informasi" ? (
        <InformasiTambahHotel
          dataInput={dataInput}
          setDataInput={setDataInput}
          handleOnChangeInput={handleOnChangeInput}
        />
      ) : nav === "kebijakanHotel" ? (
        <KebijakanKamar dataInput={dataInput} setDataInput={setDataInput} />
      ) : (
        <DaftarTambahKamar
          dataRooms={dataRooms}
          setDataRooms={setDataRooms}
          addingRoom={addingRoom}
          setAddingRoom={setAddingRoom}
        />
      )}

      {modal.back && (
        <ModalConfirmHotel
          title="Batal Menambahkan Data Hotel"
          desc="Anda akan membatalkan penambahan data hotel .Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#DB2D24]"
          cancel="Tutup"
          confirm="Batalkan"
          name="back"
          setModal={setModal}
          handle={() => navigate("/daftar-hotel")}
        />
      )}
      {modal.add && (
        <ModalConfirmHotel
          title="Simpan Data Hotel"
          desc="Anda akan menyimpan data hotel baru. Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#0080FF]"
          cancel="Batal"
          confirm="Simpan"
          name="add"
          setModal={setModal}
          handle={() => navigate("/daftar-hotel/tambah-hotel")}
        />
      )}
    </div>
  );
};

export default TambahHotel;
