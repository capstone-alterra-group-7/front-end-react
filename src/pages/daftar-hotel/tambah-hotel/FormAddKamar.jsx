import React, { useState } from "react";

//** Import Others
import assets from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

//** Import Components
import ImageAddKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/ImageAddKamar";
import AddFasilitasKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/AddFasilitasKamar";

const FormAddKamar = () => {
  const navigate = useNavigate();

  const handleNavigateFasilitas = () => {
    navigate("/daftar-hotel/tambah-hotel/tambah-kamar/tambah-penawaran");
  };

  const [fasilitas, setFasilitas] = useState([]);
  const [imageUrl, setImageUrl] = useState([assets.imageHotel, assets.imageKamar2]);

  return (
    <div className="bg-[#EBEDF1] px-36 py-12">
      <div className="p-8 bg-white rounded-[2rem] mb-7">
        <ImageAddKamar imageUrl={imageUrl} setImageUrl={setImageUrl} />

        <div className="flex flex-col mb-6">
          <label htmlFor="" className="font-semibold text-sm mb-2">
            Nama Kamar
          </label>
          <input type="text" placeholder="Masukan nama kamar" className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]" />
        </div>

        <div className="w-1/2 grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label htmlFor="ukuranKamar" className="font-semibold text-sm mb-2">
              Ukuran Kamar
            </label>
            <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
              <h1 className="px-3 py-[0.625rem] border">
                m<sup>2</sup>
              </h1>
              <input type="text" className="px-3 py-[0.625rem] w-full rounded-lg" placeholder="cth:34.000" />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="jumlahKamar" className="font-semibold text-sm mb-2">
              Jumlah Kamar
            </label>
            <input type="text" placeholder="cth: 12" className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]" />
          </div>
        </div>

        <div className="flex flex-col mb-16">
          <label htmlFor="" className="font-semibold text-sm mb-2">
            Deskripsi Kamar
          </label>
          <textarea
            type="text"
            rows="2"
            placeholder="Masukan Deskripsi Disini"
            className="h-48 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] duration-100 focus:outline-blue-500"
          ></textarea>
          <span className="text-[#96989C] mt-1">Batas Kata (0/400)</span>
        </div>

        <AddFasilitasKamar fasilitas={fasilitas} setFasilitas={setFasilitas} />

        <div>
          <h1 className="text-xl font-semibold mb-4">Penawaran</h1>
          <button className="py-[0.625rem] rounded-lg text-white w-full font-semibold bg-[#0080FF]" onClick={handleNavigateFasilitas}>
            Tambahkan Penawaran
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormAddKamar;
