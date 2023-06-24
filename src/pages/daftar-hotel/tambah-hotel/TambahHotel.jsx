import React, { useState } from "react";
import axios from "axios";

// ** Import Component
import HeaderTambahHotel from "../../../components/daftar-hotel/tambah-hotel/HeaderTambahHotel";
import NavTambahHotel from "../../../components/daftar-hotel/tambah-hotel/NavTambahHotel";
import InformasiTambahHotel from "../../../components/daftar-hotel/tambah-hotel/InformasiTambahHotel";
import KebijakanKamar from "../../../components/daftar-hotel/tambah-hotel/KebijakanKamar";
import DaftarTambahKamar from "../../../components/daftar-hotel/tambah-hotel/DaftarTambahKamar";

// ** Import Other
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";
import ModalConfirm from "../../../globals/ModalConfirm";
import { fetcherPost, fetcherPut } from "../../../services/fetcher/fetcher";

const fetcherTambahGambar = (url, payload) =>
  axios
    .post(url, payload, { headers: { "Content-Type": "multipart/form-data" } })
    .then((res) => res.data);

const TambahHotel = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState({ back: false, add: false });
  const [loading, setLoading] = useState(false);

  // state for add kamar
  const [addingRoom, setAddingRoom] = useState(false);

  // DEFAULT DATA WITH CONDITION
  const defaultData = {
    name: state ? state?.data?.name : "",
    class: state ? state?.data?.class : 0,
    description: state ? state?.data?.description : "",
    phone_number: state ? state?.data?.phone_number : "",
    email: state ? state?.data?.email : "",
    address: state ? state?.data?.address : "",
    hotel_facilities:
      state && state?.data?.hotel_facilities !== null
        ? state?.data?.hotel_facilities?.map((x, idx) => ({
            id: idx,
            name: x.name,
          }))
        : [],
    hotel_image:
      state && state?.data?.hotel_image !== null
        ? state?.data?.hotel_image?.map((x, idx) => ({
            id: idx,
            imageFile: x.image_url,
          }))
        : [],
    hotel_policy: state
      ? [
          Object.fromEntries(
            Object.entries(state?.data?.hotel_policy).filter(
              (e) => e[0] != "hotel_id"
            )
          ),
        ]
      : [
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
  };
  // DATA HOLDER TO INPUT
  const [dataInput, setDataInput] = useState(defaultData);

  // Data daftar kamar
  const defaultRoomData = state?.data?.hotel_room?.map((x) => ({
    ...x,
    hotel_room_facility:
      x.hotel_room_facility !== null
        ? x.hotel_room_facility?.map((facility) => ({ name: facility.name }))
        : [],
    hotel_room_image:
      x.hotel_room_image !== null
        ? x.hotel_room_image?.map((img, idx) => ({
            id: idx,
            imageFile: img.image_url,
          }))
        : [],
  }));

  const [dataRooms, setDataRooms] = useState(state ? defaultRoomData : []);
  const validate =
    (JSON.stringify(dataRooms) === JSON.stringify(defaultRoomData) &&
      JSON.stringify(dataInput) === JSON.stringify(defaultData)) ||
    (!state && dataRooms?.length < 1) ||
    dataInput?.name === "" ||
    dataInput?.description === "" ||
    dataInput?.phone_number === "" ||
    dataInput?.email === "" ||
    dataInput?.class === 0;

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
      await fetcherTambahGambar(
        baseUrl("/public/cloudinary/file-upload"),
        formData
      )
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
      {
        ...dataInput?.hotel_policy[0],
        policy_minimum_age: parseInt(
          isNaN(dataInput?.hotel_policy[0].policy_minimum_age)
            ? 0
            : dataInput?.hotel_policy[0].policy_minimum_age
        ),
      },
    ];
    dataInput?.hotel_facilities?.forEach((x) => delete x.id);

    const dataHotel = {
      ...dataInput,
      class: parseInt(dataInput?.class),
      hotel_policy: hotelPolicy,
      hotel_image: imageUploadedHotel,
    };

    await fetcherPost(baseUrl("/admin/hotel"), dataHotel)
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
        await fetcherTambahGambar(
          baseUrl("/public/cloudinary/file-upload"),
          formData
        )
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

      await fetcherPost(baseUrl("/admin/hotel-room"), dataEachRoom)
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

    customAlert(
      "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
      "Data Baru Tersimpan",
      `Penambahan data hotel telah berhasil disimpan.`
    );
    navigate("/daftar-hotel");
    // setModal((prev) => ({ ...prev, add: false }));
  };

  // Function Edit Hotel
  const handleEditHotel = async (e) => {
    setLoading(true);

    // 1. Post Foto Kamar Hotel
    const imageUploadedKamarEach = [];

    for (const [index, room] of dataRooms.entries()) {
      const imageUploadedKamar = [];
      for (const image of room?.hotel_room_image) {
        // If gambar is already uploaded
        if (typeof image.imageFile === "string") {
          imageUploadedKamar.push({ image_url: image.imageFile });
          continue;
        }

        let formData = new FormData();
        formData.append("file", image.imageFile);
        await fetcherTambahGambar(
          baseUrl("/public/cloudinary/file-upload"),
          formData
        )
          .then((res) => {
            console.log(res);
            imageUploadedKamar.push({ image_url: res?.data?.url });
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
        imageUploadedKamarEach.push(imageUploadedKamar);
      }
    }

    // 2. Put Hotel or Post based on hotel_room_Id
    for (const [index, room] of dataRooms.entries()) {
      const dataEachRoom = {
        ...room,
        hotel_id: state?.data?.hotel_id,
        discount: parseInt(isNaN(room?.discount) ? 0 : room?.discount),
        normal_price: parseInt(room?.normal_price),
        number_of_mattress: parseInt(room?.number_of_mattress),
        quantity_of_room: parseInt(room?.quantity_of_room),
        size_of_room: parseInt(room?.size_of_room),
        hotel_room_image:
          imageUploadedKamarEach[index] !== undefined
            ? imageUploadedKamarEach[index]
            : [],
      };
      dataEachRoom?.hotel_room_facility?.forEach((x) => delete x.id);

      // check if hotel room is already in database, if it is true, PUT. If it's not, POST
      if (dataEachRoom["hotel_room_id"] !== undefined) {
        let dataEachRoomEdited = {
          ...dataEachRoom,
          hotel_id: state?.data?.hotel_id,
        };
        delete dataEachRoomEdited["hotel_room_id"];

        await fetcherPut(
          baseUrl(`/admin/hotel-room/${dataEachRoom?.hotel_room_id}`),
          dataEachRoom
        )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setModal((prev) => ({ ...prev, add: false }));
          });
      } else {
        await fetcherPost(baseUrl("/admin/hotel-room"), dataEachRoom)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setModal((prev) => ({ ...prev, add: false }));
          });
      }
    }

    // 3. Input Post Foto Hotel
    const imageUploadedHotel = [];

    for (const image of dataInput?.hotel_image) {
      // If gambar is already uploaded
      if (typeof image.imageFile === "string") {
        imageUploadedHotel.push({ image_url: image.imageFile });
        continue;
      }

      let formData = new FormData();
      formData.append("file", image.imageFile);
      await fetcherTambahGambar(
        baseUrl("/public/cloudinary/file-upload"),
        formData
      )
        .then((res) => {
          console.log(res);
          imageUploadedHotel.push({ image_url: res?.data?.url });
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }

    // 4. manipulate hotel_facilites & parse integer in data hotel first (minimum age & class)
    const hotelPolicy = [
      {
        ...dataInput?.hotel_policy[0],
        policy_minimum_age: parseInt(
          isNaN(dataInput?.hotel_policy[0].policy_minimum_age)
            ? 0
            : dataInput?.hotel_policy[0].policy_minimum_age
        ),
      },
    ];
    dataInput?.hotel_facilities?.forEach((x) => delete x.id);
    const dataHotel = {
      ...dataInput,
      class: parseInt(dataInput?.class),
      hotel_policy: hotelPolicy,
      hotel_image: imageUploadedHotel,
    };

    // 5. PUT data hotel
    await fetcherPut(
      baseUrl(`/admin/hotel/${state?.data?.hotel_id}`),
      dataHotel
    )
      .then((res) => {
        console.log(res);
        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan data Tersimpan",
          `Perubahan data hotel telah berhasil disimpan.`
        );
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setModal((prev) => ({ ...prev, add: false }));
      });

    setLoading(false);
    navigate(`/detail-hotel/${state?.data?.hotel_id}`);
  };

  return (
    <div
      className={`bg-[#FFFFFF] fixed left-0 right-0 h-full ${
        addingRoom ? "overflow-y-hidden" : "overflow-y-auto"
      }`}
    >
      <HeaderTambahHotel
        setModal={setModal}
        validate={validate}
        state={state}
      />

      <NavTambahHotel nav={nav} setNav={setNav} state={state} />

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
        <ModalConfirm
          title={`Batal ${state ? "Mengubah" : "Menambahkan"} Data Hotel`}
          desc={`Anda akan membatalkan ${
            state ? "pengubahan" : "penambahan"
          }  data hotel .Apakah Anda yakin ingin melanjutkan?`}
          bg="bg-[#DB2D24]"
          cancel="Tutup"
          confirm="Batalkan"
          name="back"
          setModal={setModal}
          handle={state === null ? () => navigate(-1) : () => navigate(-1)}
        />
      )}
      {modal.add && (
        <ModalConfirm
          title={`Simpan ${state ? "Perubahan" : ""} Data Hotel`}
          desc={`Anda akan menyimpan  ${
            state ? "Perubahan" : ""
          } data hotel baru. Apakah Anda yakin ingin melanjutkan?`}
          bg="bg-[#0080FF]"
          cancel="Batal"
          confirm={`Simpan ${state ? "Perubahan" : ""}`}
          name="add"
          loading={loading}
          setModal={setModal}
          handle={state ? handleEditHotel : handleAddHotel}
        />
      )}
    </div>
  );
};

export default TambahHotel;
