import React, { useState } from "react";
import axios from "axios";

// ** Import Component
import HeaderTambahHotel from "../../../components/daftar-hotel/tambah-hotel/HeaderTambahHotel";
import NavTambahHotel from "../../../components/daftar-hotel/tambah-hotel/NavTambahHotel";
import InformasiTambahHotel from "../../../components/daftar-hotel/tambah-hotel/InformasiTambahHotel";
import KebijakanKamar from "../../../components/daftar-hotel/tambah-hotel/KebijakanKamar";
import DaftarTambahKamar from "../../../components/daftar-hotel/tambah-hotel/DaftarTambahKamar";
import ModalConfirmHotel from "../../../components/daftar-hotel/ModalConfirmHotel";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";

const fetcherTambahHotel = (url, payload) => axios.post(url, payload).then((res) => res.data);
const fetcherTambahGambar = (url, payload) =>
  axios.post(url, payload, { headers: { "Content-Type": "multipart/form-data" } }).then((res) => res.data);

const TambahHotel = () => {
  const navigate = useNavigate();
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState({ back: false, add: false });
  const [loading, setLoading] = useState(false);

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
        time_breakfast_end: "-",
        time_breakfast_start: "-",
        time_check_in: "-",
        time_check_out: "-",
      },
    ],
  });
  // Data daftar kamar
  const [dataRooms, setDataRooms] = useState([]);

  const validate =
    dataRooms?.length < 1 ||
    dataInput?.name === "" ||
    dataInput?.description === "" ||
    dataInput?.phone_number === "" ||
    dataInput?.email === "" ||
    dataInput?.class === 0;

  console.log("========================");
  console.log("data Rooms : ", dataRooms);
  console.log("Data Inputan Hotel : ", dataInput);

  const handleOnChangeInput = (e) => {
    setDataInput({ ...dataInput, [e.target.name]: e.target.value });
  };

  // Function Add Hotel
  const handleAddHotel = async (e) => {
    setLoading(true);
    let hotel_id;

    // 1. Input Post Foto
    const imageUploadedHotel = [];

    for (const image of dataInput?.hotel_image) {
      let formData = new FormData();
      formData.append("file", image.imageFile);
      // console.log("FORM DATA", image);
      await fetcherTambahGambar(baseUrl("/public/cloudinary/file-upload"), formData)
        .then((res) => {
          console.log(res);
          imageUploadedHotel.push({ image_url: res?.data?.url });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }

    // 2. Post Data Hotel
    // manipulate hotel_facilites & parse integer in data hotel first (minimum age & class)
    const hotelPolicy = [
      { ...dataInput?.hotel_policy[0], policy_minimum_age: parseInt(dataInput?.hotel_policy[0].policy_minimum_age) },
    ];
    dataInput?.hotel_facilities?.forEach((x) => delete x.id);

    const dataHotel = {
      ...dataInput,
      class: parseInt(dataInput?.class),
      hotel_policy: hotelPolicy,
      hotel_image: imageUploadedHotel,
    };
    // console.log("DATA INPUT HOTEL: ", dataHotel);
    await fetcherTambahHotel(baseUrl("/admin/hotel"), dataHotel)
      .then((res) => {
        hotel_id = res.data?.hotel_id;
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });

    // 3. Input Post Foto Kamar
    const imageUploadedKamarEach = [];

    for (const [index, room] of dataRooms.entries()) {
      const imageUploadedKamar = [];
      for (const image of room?.hotel_room_image) {
        let formData = new FormData();
        formData.append("file", image.imageFile);
        await fetcherTambahGambar(baseUrl("/public/cloudinary/file-upload"), formData)
          .then((res) => {
            console.log(res);
            imageUploadedKamar.push({ image_url: res?.data?.url });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      }
      imageUploadedKamarEach.push(imageUploadedKamar);
    }

    // 4. Post Data Rooms
    for (const [index, room] of dataRooms.entries()) {
      const dataEachRoom = {
        ...room,
        hotel_id: hotel_id,
        discount: parseInt(room?.discount),
        normal_price: parseInt(room?.normal_price),
        number_of_mattress: parseInt(room?.number_of_mattress),
        quantity_of_room: parseInt(room?.quantity_of_room),
        size_of_room: parseInt(room?.size_of_room),
        hotel_room_image: imageUploadedKamarEach[index],
      };
      dataEachRoom?.hotel_room_facility?.forEach((x) => delete x.id);

      console.log("DATA EACH ROOM: ", dataEachRoom);

      await fetcherTambahHotel(baseUrl("/admin/hotel-room"), dataEachRoom)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          setModal((prev) => ({ ...prev, add: false }));
        });
    }

    console.log("Data inputed");
    setLoading(false);
    navigate("/daftar-hotel");
    // setModal((prev) => ({ ...prev, add: false }));
  };

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
          loading={loading}
          setModal={setModal}
          handle={handleAddHotel}
        />
      )}
    </div>
  );
};

export default TambahHotel;
