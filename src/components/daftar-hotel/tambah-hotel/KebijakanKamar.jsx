import React, { useEffect, useState } from "react";

// ** Import Component
import Policy from "./kebijakan-kamar/Policy";

// Initialization for ES Users
import { Input, Timepicker, initTE } from "tw-elements";

const KebijakanHotel = () => {
  const [clicked, setClicked] = useState({
    antarJemput: false,
    waktuCheckin: false,
    pembatalan: false,
    deposit: false,
    usia: false,
    checkInAwal: false,
    checkOutTelat: false,
    sarapanTambahan: false,
    sarapan: false,
    merokok: false,
    hewanPeliharaan: false,
  });

  useEffect(() => {
    initTE({ Input, Timepicker });
  }, []);

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-8">Kebijakan Hotel</h1>

      <div>
        <Policy clicked={clicked} setClicked={setClicked} title={"Antar Jemput Bandara"} desc={"Antar jemput bandara dikenakan biaya sebesar Rp 0"} name={"antarJemput"}>
          <div className="mb-12"></div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Waktu Check-in/Check-out"} desc={"Waktu Check-in/Check-out"} name={"waktuCheckin"}>
          <div className="flex gap-4 mb-12">
            <div className="w-1/4">
              <label htmlFor="waktuMulai" className={`text-sm ${clicked.waktuCheckin ? null : "opacity-50"}`}>
                Mulai
              </label>
              <div className={`relative  ${clicked.waktuCheckin ? null : "opacity-50"}`} data-te-timepicker-init data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="06.00"
                  disabled={!clicked.waktuCheckin}
                />
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="waktuAkhir" className={`text-sm ${clicked.waktuCheckin ? null : "opacity-50"}`}>
                Hingga
              </label>
              <div className={`relative  ${clicked.waktuCheckin ? null : "opacity-50"}`} data-te-timepicker-init data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="10.00"
                  disabled={!clicked.waktuCheckin}
                />
              </div>
            </div>
          </div>
        </Policy>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <Policy clicked={clicked} setClicked={setClicked} title={"Kebijakan Pembatalan"} desc={"Tidak ada biaya pembatalan 48 jam sebelum tanggal check-in"} name={"pembatalan"}>
          <div className="mb-12"></div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Deposit"} desc={"Pemesan Tidak perlu membayar deposit saat check-in. "} name={"deposit"}>
          <div className="mb-12"></div>
        </Policy>

        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Kebijakan Usia Minimum"}
          desc={"Usia minimum untuk check-in adalah 17. Anak-anak harus didampingi orang dewasa saat check-in"}
          name={"usia"}
        >
          <div className="mb-12">
            <label htmlFor="usia" className={`text-sm ${clicked.usia ? null : "opacity-50"}`}>
              Batas Usia
            </label>
            <div className={`flex mt-2 h-11 w-1/5 rounded-lg border border-[#D2D7E0] ${clicked.usia ? null : "opacity-50"}`}>
              <input type="text" className="px-3 py-[0.625rem] w-full rounded-lg" placeholder="cth: 17" disabled={!clicked.usia} />
            </div>
          </div>
        </Policy>

        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Check-in Lebih Awal"}
          desc={"Pemesan diperbolehkan check-in lebih awa.Pemesan dapat menghubungi akomodasi jika ingin check-in lebih awal. Pemesan akan dikenakan biaya tambahan"}
          name={"checkInAwal"}
        >
          <div className="mb-12"></div>
        </Policy>

        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Check-out Telat"}
          desc={"Pemesan diperbolehkan check-out telat. Pemesan dapat menghubungi akomodasi jika ingin check-out telat. Pemesan akan dikenakan biaya tambahan"}
          name={"checkOutTelat"}
        >
          <div className="mb-12"></div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Sarapan Tambahan"} desc={"Sarapan tambahan dikenakan biaya Rp 125.000/tamu"} name={"sarapanTambahan"}>
          <div className="mb-12"></div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Sarapan"} desc={"Sarapan di hotel tersedia pukul 06:00 - 10:00"} name={"sarapan"}>
          <div className="flex gap-4 mb-12">
            <div className="w-1/4">
              <label htmlFor="waktuMulai" className={`text-sm ${clicked.sarapan ? null : "opacity-50"}`}>
                Mulai
              </label>
              <div className={`relative  ${clicked.sarapan ? null : "opacity-50"}`} data-te-timepicker-init data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="06.00"
                  disabled={!clicked.sarapan}
                />
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="waktuAkhir" className={`text-sm ${clicked.sarapan ? null : "opacity-50"}`}>
                Hingga
              </label>
              <div className={`relative  ${clicked.sarapan ? null : "opacity-50"}`} data-te-timepicker-init data-te-input-wrapper-init>
                <input
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="10.00"
                  disabled={!clicked.sarapan}
                />
              </div>
            </div>
          </div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Merokok"} desc={"Merokok di akomodasi diperbolehkan"} name={"merokok"}>
          <div className="mb-12"></div>
        </Policy>

        <Policy clicked={clicked} setClicked={setClicked} title={"Hewan Peliharaan"} desc={"Hewan peliharaan diperbolehkan berada di akomodasi"} name={"hewanPeliharaan"}></Policy>
      </div>
    </div>
  );
};

export default KebijakanHotel;
