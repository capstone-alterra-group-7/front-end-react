import React from "react";
import AddFasilitasKamar from "./AddFasilitasKamar";
import ImageAddKamar from "./ImageAddKamar";

const FormInformasiKamar = (props) => {
  const { fasilitas, setFasilitas, imageUrl, setImageUrl, dataKamar, setDataKamar } = props;
  return (
    <div className="p-8">
      <ImageAddKamar imageUrl={imageUrl} setImageUrl={setImageUrl} setDataKamar={setDataKamar} />

      {/* Input Nama */}
      <div className="flex flex-col mb-6">
        <label htmlFor="" className="font-semibold text-sm mb-2">
          Nama Kamar
        </label>
        <input
          type="text"
          placeholder="Masukan nama kamar"
          className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]"
          value={dataKamar?.name || ""}
          onChange={(e) => setDataKamar((prev) => ({ ...prev, name: e.target.value }))}
        />
      </div>

      {/* Input Ukuran Kamar & Jumlah Kamar */}
      <div className="w-1/2 grid grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col">
          <label htmlFor="ukuranKamar" className="font-semibold text-sm mb-2">
            Ukuran Kamar
          </label>
          <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
            <h1 className="px-3 py-[0.625rem] border">
              m<sup>2</sup>
            </h1>
            <input
              type="number"
              className="px-3 py-[0.625rem] w-full rounded-lg"
              placeholder="cth:15"
              value={dataKamar?.size_of_room}
              onChange={(e) => {
                setDataKamar((prev) => ({ ...prev, size_of_room: e.target.value }));
              }}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="jumlahKamar" className="font-semibold text-sm mb-2">
            Jumlah Kamar
          </label>
          <input
            type="text"
            placeholder="cth: 12"
            className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]"
            value={dataKamar?.quantity_of_room}
            onChange={(e) => {
              setDataKamar((prev) => ({ ...prev, quantity_of_room: e.target.value }));
            }}
          />
        </div>
      </div>

      {/* Input Deskripsi Kamar */}
      <div className="flex flex-col mb-16">
        <label htmlFor="" className="font-semibold text-sm mb-2">
          Deskripsi Kamar
        </label>
        <textarea
          type="text"
          rows="2"
          placeholder="Masukan Deskripsi Disini"
          className="h-48 px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] duration-100 focus:outline-blue-500"
          maxLength={2100}
          value={dataKamar?.description}
          onChange={(e) => setDataKamar((prev) => ({ ...prev, description: e.target.value }))}
        ></textarea>
        <span className="text-[#96989C] mt-1">Batas Huruf ({dataKamar?.description?.length}/2100)</span>
      </div>

      <AddFasilitasKamar fasilitas={fasilitas} setFasilitas={setFasilitas} setDataKamar={setDataKamar} />
    </div>
  );
};

export default FormInformasiKamar;
