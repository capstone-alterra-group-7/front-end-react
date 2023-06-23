import React, { useState } from "react";
import axios from "axios";

// ** Import Other
import { useLocation, useNavigate } from "react-router-dom";
import assets from "../../../assets/assets";
import { baseUrl } from "../../../services/base";

// ** Import Component
import FormAddKamar from "./FormAddKamar";
import ModalConfirmAddKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/ModalConfirmAddKamar";
import { customAlert } from "../../../helpers/customAlert";
import { fetcherPut } from "../../../services/fetcher/fetcher";

const fetcherTambahGambar = (url, payload) =>
  axios
    .post(url, payload, { headers: { "Content-Type": "multipart/form-data" } })
    .then((res) => res.data);

const TambahKamar = (props) => {
  const { setAddingRoom, setDataRooms, name, dataEdit, index } = props;
  let { state } = useLocation();
  const navigate = useNavigate();

  if (name === "edit" && dataEdit !== undefined) {
    state = { data: dataEdit };
  } else if (name === "add") {
    // make state undefined when add new data hotel
    state = undefined;
  }

  const [modal, setModal] = useState({ back: false, add: false });
  const [loading, setLoading] = useState(false);

  // state for clicked kebijakan kamar
  const [clicked, setClicked] = useState({
    discount: state ? (state?.data?.discount > 0 ? true : false) : false,
  });

  const [dataKamar, setDataKamar] = useState({
    discount: state ? state?.data?.discount : 0,
    name: state ? state?.data?.name : "",
    description: state ? state?.data?.description : "",
    hotel_room_facility:
      state && state?.data?.hotel_room_facility !== null
        ? state?.data?.hotel_room_facility?.map((x, idx) => ({
            id: idx,
            name: x.name,
          }))
        : [],
    hotel_room_image: dataEdit
      ? dataEdit.hotel_room_image
      : state && state?.data?.hotel_room_image !== null
      ? state?.data?.hotel_room_image?.map((x, idx) => ({
          id: idx,
          imageFile: x.image_url,
        }))
      : [],
    normal_price: state ? state?.data?.normal_price : "",
    number_of_guest: state ? state?.data?.number_of_guest : "",
    number_of_mattress: state ? state?.data?.number_of_mattress : "",
    quantity_of_room: state ? state?.data?.quantity_of_room : "",
    size_of_room: state ? state?.data?.size_of_room : "",
    mattress_size: state ? state?.data?.mattress_size : "",
  });

  const handleAddKamar = () => {
    setDataRooms((prev) => [...prev, dataKamar]);
    setAddingRoom(false);
  };

  // Function for Edit Kamar PUT API
  const handleEditKamar = async () => {
    setLoading(true);

    //1. Post Foto Kamar
    const imageUploadedKamar = [];

    for (const image of dataKamar?.hotel_room_image) {
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
    }

    // 2. Mapping Data string to int if it's required
    const dataEdited = {
      ...dataKamar,
      hotel_id: parseInt(state?.data?.hotel_id),
      discount: parseInt(dataKamar?.discount),
      normal_price: parseInt(dataKamar?.normal_price),
      number_of_mattress: parseInt(dataKamar?.number_of_mattress),
      quantity_of_room: parseInt(dataKamar?.quantity_of_room),
      size_of_room: parseInt(dataKamar?.size_of_room),
      hotel_room_image: imageUploadedKamar,
      hotel_room_facility: dataKamar?.hotel_room_facility?.map((x) => ({
        name: x.name,
      })),
    };

    // 3. Put Data Edited
    fetcherPut(
      baseUrl(`/admin/hotel-room/${state?.data?.hotel_room_id}`),
      dataEdited
    )
      .then((res) => {
        const {
          data: { name },
        } = res;

        navigate(`/detail-hotel/${state?.data?.hotel_id}`);

        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan Tersimpan",
          `Perubahan pada data kamar hotel ${name} telah berhasil disimpan.`
        );

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setModal((prev) => ({ ...prev, add: false }));
        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan Gagal Tersimpan",
          `Perubahan data kamar hotel gagal disimpan`
        );
        console.log(err);
      });
  };

  // Function for edit kamar from array DataRooms
  // Data will inputed after all data collected
  const handleEditKamarWithArray = () => {
    setDataRooms((prev) => {
      prev[index] = { ...prev[index], ...dataKamar };
      return prev;
    });
    setAddingRoom(false);
  };

  const validate =
    dataKamar.name === "" ||
    dataKamar.normal_price === "" ||
    dataKamar.number_of_guest === 0 ||
    dataKamar.quantity_of_room === "" ||
    dataKamar.size_of_room === "" ||
    dataKamar.mattress_size === "" ||
    dataKamar.hotel_room_image?.length < 1;

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
            <h1 className="mt-[1.2px]">
              {name === "edit" ? "Ubah" : "Tambah"} Data Kamar
            </h1>
            <img src={assets.iconSaveHotel} alt="button" />
          </button>
        </div>

        {modal.back && (
          <ModalConfirmAddKamar
            title={
              name === "add"
                ? "Batal Menambahkan Data Kamar"
                : "Batal Mengubah Data Kamar"
            }
            desc={`Anda akan membatalkan ${
              name === "add" ? "penambahan" : "perubahan"
            } data kamar .Apakah Anda yakin ingin melanjutkan?`}
            bg="bg-[#DB2D24]"
            cancel="Tutup"
            confirm="Batalkan"
            handleCancel={() => setModal((prev) => ({ ...prev, back: false }))}
            handleConfirm={
              name === "add" || (state !== null && name === "edit")
                ? () => setAddingRoom(false)
                : () => navigate(-1)
            }
          />
        )}

        {modal.add && (
          <ModalConfirmAddKamar
            title={
              name === "add"
                ? "Simpan Data Kamar"
                : "Simpan Perubahan Data Kamar"
            }
            desc={`Anda akan menyimpan ${
              name === "add" ? "data kamar baru" : "perubahan pada data kamar"
            } . Apakah Anda yakin ingin melanjutkan?`}
            bg="bg-[#0080FF]"
            cancel="Batal"
            loading={loading}
            confirm="Simpan"
            handleCancel={() => setModal((prev) => ({ ...prev, add: false }))}
            handleConfirm={
              name === "add"
                ? handleAddKamar
                : name === "edit" || dataEdit !== undefined
                ? handleEditKamarWithArray
                : handleEditKamar
            }
          />
        )}
      </div>

      <FormAddKamar
        dataKamar={dataKamar}
        setDataKamar={setDataKamar}
        clicked={clicked}
        setClicked={setClicked}
      />
    </div>
  );
};

export default TambahKamar;
