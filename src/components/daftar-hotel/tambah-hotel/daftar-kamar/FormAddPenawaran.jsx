import React, { useState } from "react";

const FormAddPenawaran = () => {
  const [clicked, setClicked] = useState({ diskon: false, sarapan: false, wifi: false, merokok: false });

  return (
    <div className="bg-[#EBEDF1] px-36 py-12">
      <div className="p-8 bg-white rounded-[2rem] mb-7">
        <h1 className="text-2xl font-bold mb-6">Informasi Penawaran</h1>

        <div className="flex flex-col mb-6">
          <label htmlFor="penawaran" className="font-semibold text-sm mb-2">
            Nama Penawaran
          </label>
          <input type="text" placeholder="Masukan nama penawaran" className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]" />
        </div>

        <div className="w-4/5 grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col">
            <label htmlFor="harga" className="font-semibold text-sm mb-4">
              Harga Kamar/ Malam
            </label>
            <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
              <h1 className="px-3 py-[0.625rem] border">Rp</h1>
              <input type="text" className="px-3 py-[0.625rem] w-full rounded-lg" placeholder="cth:34.000" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex mb-2">
              <label htmlFor="diskon" className="font-semibold text-sm mb-2 mr-4">
                Diskon
              </label>
              <div
                className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${clicked["diskon"] ? "bg-[#0080FF]" : "bg-[#D2D7E0]"}`}
                onClick={() =>
                  setClicked((prev) => {
                    return { ...prev, ["diskon"]: !prev["diskon"] };
                  })
                }
              >
                <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked["diskon"] ? "right-1" : ""}`}></div>
              </div>
            </div>
            <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
              <h1 className={`px-3 py-[0.625rem] border ${clicked.diskon ? "" : "text-[#717275]"}`}>%</h1>
              <input type="text" className="px-3 py-[0.625rem] w-full rounded-lg" placeholder="10" disabled={!clicked.diskon} />
            </div>
            <h1 className={`mt-1 ${clicked.diskon ? "" : "text-[#717275]"}`}>Terdapat potongan harga sebesar Rp 150.000 (10%)</h1>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-5 mb-6">
          <div className="flex flex-col col-span-2">
            <label htmlFor="penawaran" className="font-semibold text-sm mb-3">
              Jumlah Tamu
            </label>
            <input type="text" placeholder="Masukan nama penawaran" className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]" />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="penawaran" className="font-semibold text-sm mb-3">
              Tipe Kasur
            </label>
            <input type="text" placeholder="Masukan nama penawaran" className="h-11 py-3 px-4 rounded-lg bg-[#F9FAFB] border border-[#D2D7E0]" />
          </div>
        </div>

        <div>
          <div className="flex mb-2">
            <h1 className="font-semibold mr-4">WiFi</h1>
            <div
              className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${clicked["wifi"] ? "bg-[#0080FF]" : "bg-[#D2D7E0]"}`}
              onClick={() =>
                setClicked((prev) => {
                  return { ...prev, ["wifi"]: !prev["wifi"] };
                })
              }
            >
              <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked["wifi"] ? "right-1" : ""}`}></div>
            </div>
          </div>
          <h1>Tersedia Wifi di dalam kamar</h1>
        </div>

        <div className="mt-6">
          <div className="flex mb-2">
            <h1 className="font-semibold mr-4">Merokok</h1>
            <div
              className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${clicked["merokok"] ? "bg-[#0080FF]" : "bg-[#D2D7E0]"}`}
              onClick={() =>
                setClicked((prev) => {
                  return { ...prev, ["merokok"]: !prev["merokok"] };
                })
              }
            >
              <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked["merokok"] ? "right-1" : ""}`}></div>
            </div>
          </div>
          <h1>Tamu diperbolehkan untuk merokok didalam kamar</h1>
        </div>
      </div>
    </div>
  );
};

export default FormAddPenawaran;
