import React, { useState } from "react";

// ** Import Other
import assets from "../../../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// ** Import Component
import ButtonDetailHotel from "../../detail-hotel/ButtonDetailHotel";
import { chooseIconFacility, rupiah } from "../../../../helpers/libs";
import ModalConfirmHotel from "../../ModalConfirmHotel";
import DetailKamar from "./detail-kamar/DetailKamar";
import TambahKamar from "../../../../pages/daftar-hotel/tambah-hotel/TambahKamar";
import { customAlert } from "../../../../helpers/customAlert";
import { baseUrl } from "../../../../services/base";

const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);

const CardTambahKamar = (props) => {
  const { data, nomor, setDataRooms, validate } = props;

  const [showDetail, setShowDetail] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState({ edit: false, delete: false });
  const [editRoom, setEditRoom] = useState(false);

  const handleDeleteCardKamar = (e) => {
    if (data?.hotel_room_id !== undefined) {
      fetcherDelete(baseUrl(`/admin/hotel-room/${data?.hotel_room_id}`))
        .then(() => {
          customAlert(
            "https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1",
            "Data Kamar Dihapus",
            `Data kamar ${data?.name} telah berhasil dihapus dari sistem.`
          );

          setLoading(false);
          setModal((prev) => ({ ...prev, delete: false }));
        })
        .catch((err) => {
          setLoading(false);

          console.log(err);
        });
      window.location.reload;
      return;
    }

    setModal((prev) => ({ ...prev, delete: false }));
    setDataRooms((prev) => [...prev.slice(0, nomor), ...prev.slice(nomor + 1)]);
  };

  const handleEditCardKamar = (e) => {
    setModal((prev) => ({ ...prev, edit: false }));
    setEditRoom(true);
  };

  return (
    <div className="p-8 bg-white rounded-[2rem] mb-7">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Kamar {nomor + 1}</h1>
        <ButtonDetailHotel title="Kamar" setModal={setModal} validate={validate} />
      </div>
      <div className="p-7 pb-2 grid grid-cols-7">
        <div className="h-[21rem] mr-8 col-span-2">
          <img
            src={
              data?.hotel_room_image?.length < 1
                ? ""
                : typeof data?.hotel_room_image[0]?.imageFile === "string"
                ? data?.hotel_room_image[0]?.imageFile
                : URL.createObjectURL(data?.hotel_room_image[0]?.imageFile)
            }
            alt=""
            className="w-64 h-52 object-cover rounded-[28px]"
          />
          {data?.hotel_room_image?.length > 1 ? (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {data?.hotel_room_image?.length < 1
                ? null
                : data?.hotel_room_image?.slice(1, 4).map((x, idx) => (
                    <div className="relative">
                      <img
                        src={typeof x.imageFile === "string" ? x?.imageFile : URL.createObjectURL(x?.imageFile)}
                        alt=""
                        className={`h-16 object-cover rounded-2xl relative`}
                        key={idx}
                      />
                      <div
                        className={`h-16 absolute w-full top-0 opacity-80 text-white flex justify-center items-center rounded-2xl ${
                          idx === 2 ? "bg-gray-700" : ""
                        } `}
                      >
                        {idx === 2 ? `+${data?.hotel_room_image?.length - 3}` : null}
                      </div>
                    </div>
                  ))}
            </div>
          ) : null}
        </div>

        <div className="col-span-5">
          <h1 className="text-[32px] font-bold mb-1">{data?.name}</h1>
          <h1 className="text-[#0080FF] text-xl font-semibold">#{data?.hotel_room_id === undefined ? nomor : data?.hotel_room_id}</h1>
          <h1 className="mt-4 mb-3">
            <img src={assets.iconSeat} alt="" className="inline mr-1" /> {data?.size_of_room} m<sup>2</sup>
          </h1>
          <h1 className="mb-8">
            Total Kamar: <span className="font-semibold">{data?.quantity_of_room} Kamar</span>
          </h1>
          <h1 className="mb-8">
            {data?.description?.substring(0, 250)}
            {data?.description?.length >= 250 ? "..." : ""}
          </h1>
          <button
            className="p-[10px] border font-[500] border-[#D2D7E0] w-full text-[#4B4C4E] rounded-lg"
            onClick={() => setShowDetail(true)}
          >
            Lihat Detail Kamar
          </button>
        </div>
      </div>

      <div className="flex flex-col h-full mt-5">
        <div className="flex">
          <h1 className="text-[#96989C] text-2xl line-through mr-3">{rupiah(data?.normal_price)}</h1>
          <h1 className="px-2 py-1 bg-[#DBF8D3] text-[#45C521] rounded-lg mb-2">-{parseInt(data?.discount)}%</h1>
        </div>

        <h1 className="text-5xl font-bold text-[#0080FF] mb-1">{rupiah((data?.normal_price * (100 - data?.discount)) / 100)}</h1>
        <h1 className="text-[#96989C] text-xl mb-1">/ kamar / malam</h1>
        <h1 className="text-[#FF7300] text-xl mb-6">Termasuk Pajak</h1>
      </div>

      <div className="mt-5 grid grid-cols-2 w-1/3 gap-x-5 gap-y-3">
        {data?.hotel_room_facility?.map((data, idx) => {
          return (
            <div className="flex h-5" key={idx}>
              <img src={chooseIconFacility(data?.name)} alt="" className="mr-3" />
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
          loading={loading}
          setModal={setModal}
          handle={handleDeleteCardKamar}
        />
      )}
      {modal.edit && (
        <ModalConfirmHotel
          title="Ubah Data Kamar"
          desc="Anda akan mengubah data kamar ini. Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#0080FF]"
          cancel="Batal"
          confirm="Ubah"
          name="edit"
          setModal={setModal}
          handle={handleEditCardKamar}
        />
      )}

      {showDetail && <DetailKamar setShowDetail={setShowDetail} data={data} />}
      {editRoom && <TambahKamar setDataRooms={setDataRooms} setAddingRoom={setEditRoom} name={"edit"} dataEdit={data} index={nomor} />}
    </div>
  );
};

export default CardTambahKamar;
