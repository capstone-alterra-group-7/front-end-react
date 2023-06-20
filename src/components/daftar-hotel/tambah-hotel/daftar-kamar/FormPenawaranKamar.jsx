import React, { useEffect, useState } from "react";

import { rupiah } from "../../../../helpers/libs";

const FormPenawaranKamar = (props) => {
  const { setDataKamar, dataKamar, clicked, setClicked } = props;
  // console.log(clicked);

  // console.log("fasilitas: ", fasilitas);

  // const handleUpdateBreakfast = (e) => {
  //   const dataSarapan = dataKamar?.hotel_room_facility?.filter((x) => x?.name.includes("breakfast"));
  //   if (dataSarapan?.length < 1) {
  //     setDataKamar((prev) => {
  //       return [...prev, { id: 0, name: `${e.target.value} person breakfast` }];
  //     });
  //     return;
  //   }

  //   const index = dataKamar?.hotel_room_facility?.findIndex((x) => x.name.includes("breakfast"));

  //   setDataKamar((prev) => {
  //     prev.hotel_room_facility[index] = { ...prev[index], name: `${e.target.value} person breakfast` };
  //     return prev;
  //   });
  // };

  return (
    <div className="p-8">
      <div className="grid grid-cols-7 gap-6">
        {/* Input Harga Kamar */}
        <div className="flex flex-col col-span-3">
          <label htmlFor="ukuranKamar" className="font-semibold text-sm mb-2">
            Harga Kamar/Malam
          </label>
          <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
            <h1 className="px-3 py-[0.625rem] border">Rp</h1>
            <input
              type="number"
              className="px-3 py-[0.625rem] w-full rounded-lg"
              placeholder="cth:34.000"
              value={dataKamar?.normal_price}
              onChange={(e) => setDataKamar((prev) => ({ ...prev, normal_price: e.target.value }))}
            />
          </div>
        </div>

        {/* Input Jumlah Tamu */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="ukuranKamar" className="font-semibold text-sm mb-2">
            Jumlah Tamu
          </label>
          <div className="flex h-11">
            <select
              name="jumlah_tamu"
              placeholder="Pilih berapa tamu"
              className="w-full  border border-[#D2D7E0] rounded-lg px-2"
              value={dataKamar?.number_of_guest}
              onChange={(e) => setDataKamar((prev) => ({ ...prev, number_of_guest: parseInt(e.target.value) }))}
            >
              <option value="" hidden></option>
              <option value="1">1 Tamu</option>
              <option value="2">2 Tamu</option>
              <option value="4">4 Tamu</option>
            </select>
          </div>
        </div>

        {/* Input Tipe Kasur */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="ukuranKamar" className="font-semibold text-sm mb-2">
            Tipe Kasur
          </label>
          <div className="flex h-11">
            <select
              name="jumlah_tamu"
              placeholder="Pilih berapa tamu"
              className="w-full  border border-[#D2D7E0] rounded-lg px-2"
              value={`${dataKamar?.number_of_mattress} ${dataKamar?.mattress_size}`}
              onChange={(e) => {
                let [number_of_mattress, mattress_size] = [
                  e.target.value.substring(0, e.target.value.indexOf(" ")),
                  e.target.value.substring(e.target.value.indexOf(" ") + 1),
                ];
                setDataKamar((prev) => ({ ...prev, mattress_size }));
                setDataKamar((prev) => ({ ...prev, number_of_mattress }));
              }}
            >
              <option value="" hidden></option>
              <option value="1 King Bed">1 King Bed</option>
              <option value="1 Queen Bed">1 Queen Bed</option>
              <option value="1 Double Bed">1 Double Bed</option>
              <option value="1 Single Bed">1 Single Bed</option>
              <option value="2 Single Bed">2 Single Bed</option>
              <option value="2 Single Bed">2 Single Bed</option>
              <option value="3 Single Bed">3 Single Bed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8 gap-6">
        {/* Input Diskon */}
        <div className="col-span-2">
          <div className="flex mb-3">
            <h1 className="font-[600] text-xl mr-4">Diskon</h1>
            <div
              className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${
                clicked.discount ? "bg-[#0080FF]" : "bg-[#D2D7E0]"
              }`}
              onClick={(e) => {
                setClicked((prev) => ({ ...prev, discount: !prev.discount }));
                if (clicked.discount) {
                  setDataKamar((prev) => {
                    return { ...prev, discount: 0 };
                  });
                }
              }}
            >
              <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked.discount ? "right-1" : ""}`}></div>
            </div>
          </div>
          <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
            <h1 className={`px-3 py-[0.625rem] border ${!clicked.discount ? "text-[#717275]" : ""}`}>%</h1>
            <input
              type="number"
              required
              disabled={!clicked.discount}
              className={`px-3 py-[0.625rem] w-full rounded-lg ${!clicked.discount ? "text-[#717275]" : ""}`}
              placeholder="cth:34.000"
              value={dataKamar?.discount}
              onChange={(e) => {
                setDataKamar((prev) => ({ ...prev, discount: parseInt(e.target.value) }));
              }}
            />
          </div>
          {clicked.discount ? (
            <h1 className="text-[#262627]">
              Terdapat potongan harga sebesar {rupiah((dataKamar?.normal_price * dataKamar?.discount) / 100)}
            </h1>
          ) : (
            <h1 className="text-[#262627] opacity-30">Tidak terdapat diskon</h1>
          )}
        </div>

        {/* Input Kebijakan Sarapan */}
        {/* <div className="col-span-3">
          <div className="flex mb-3">
            <h1 className="font-[600] text-xl mr-4">Sarapan</h1>
            <div
              className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${clicked.sarapan ? "bg-[#0080FF]" : "bg-[#D2D7E0]"}`}
              onClick={(e) => {
                if (clicked.sarapan === false) setDataKamar((prev) => prev?.hotel_room_facility?.filter((x) => !x.name.includes("person breakfast")));
                setClicked((prev) => ({ ...prev, sarapan: !prev.sarapan }));
              }}
            >
              <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked.sarapan ? "right-1" : ""}`}></div>
            </div>
          </div>
          <div className="flex h-11 border border-[#D2D7E0] rounded-lg">
            <h1 className={`px-3 py-[0.625rem] border ${!clicked.sarapan ? "text-[#717275]" : ""}`}>PAX</h1>
            <input
              type="text"
              required
              disabled={!clicked.sarapan}
              className={`px-3 py-[0.625rem] w-full rounded-lg ${!clicked.sarapan ? "text-[#717275]" : ""}`}
              placeholder="cth:34.000"
              value={breakfastVal}
              onChange={(e) => {
                handleUpdateBreakfast(e);
                setBreakfastVal(e.target.value);
              }}
            />
          </div>
          {clicked.sarapan ? <h1 className="text-[#262627]">Terdapat sarapan untuk {breakfastVal} orang</h1> : <h1 className="text-[#262627] opacity-30">Tidak terdapat sarapan gratis untuk tamu</h1>}
        </div> */}
      </div>

      {/* Input Wifi */}
      {/* <div className="mt-10 text-[16px]">
        <div className="flex mb-3">
          <h1 className="font-[600] text-xl mr-4">Wifi</h1>
          <div
            className={`${clicked.wifi ? "bg-[#0080FF]" : "bg-[#D2D7E0]"} relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center`}
            onClick={(e) => {
              setClicked((prev) => ({ ...prev, wifi: !prev.wifi }));
              // setFasilitas((prev)=>([...prev, {id:}]))
            }}
          >
            <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked.wifi ? "right-1" : ""}`}></div>
          </div>
        </div>

        {clicked?.wifi ? <h1 className="text-[#262627]">Tidak tersedia Wifi di dalam kamar</h1> : <h1 className="text-[#262627] opacity-30">Tersedia Wifi di dalam kamar</h1>}
      </div> */}

      {/* Input Refund */}
      {/* <div className="mt-16">
        <h1 className="font-bold text-xl mb-4">Kebijakan Kamar</h1>
        <div className="text-[16px]">
          <div className="flex mb-3">
            <h1 className="font-[600] text-[19px] mr-4">Refund</h1>
            <div
              className={`${clicked.refund ? "bg-[#0080FF]" : "bg-[#D2D7E0]"} relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center`}
              onClick={(e) => {
                setClicked((prev) => ({ ...prev, refund: !prev.refund }));
                if (!clicked.refund) {
                  setDataKamar((prev) => ({ ...prev, hotel_room_facility: prev?.hotel_room_facility?.filter((x) => !x?.name?.includes("Refundable")) }));
                } else setDataKamar((prev) => ({ ...prev, hotel_room_facility: [...prev?.hotel_room_facility, { id: "0", name: "Refundable" }] }));
              }}
            >
              <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked.refund ? "right-1" : ""}`}></div>
            </div>
          </div>

          {clicked?.refund ? (
            <div>
              <h1 className="text-[#262627] mb-1 font-semibold">Bisa di-refund (Pengembalian dana)</h1>
              <ul className="list-disc px-4">
                <li>Anda dapat memperoleh pengembalian dana penuh jika pembatalan dilakukan sebelum 48 jam sebelum tanggal check-in. </li>
                <li>Jika pembatalan dilakukan dalam waktu kurang dari 48 jam sebelum tanggal check-in, biaya pembatalan sebesar 70% dari total harga pesanan akan dikenakan.</li>
              </ul>
            </div>
          ) : (
            <div className="mt-4">
              <h1 className="text-[#262627] font-semibold">Tidak bisa di-refund (Pengembalian dana)</h1>
              <h1 className="text-[#262627]">Maaf, untuk kamar ini tidak tersedia opsi pengembalian dana. Harap dicatat bahwa pembayaran untuk kamar ini bersifat non-refundable</h1>
            </div>
          )}
        </div>
      </div> */}
    </div>
  );
};

export default FormPenawaranKamar;
