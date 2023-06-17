import React, { useEffect, useState } from "react";

// ** Import Component
import Policy from "./kebijakan-kamar/Policy";

const KebijakanHotel = ({ dataInput, setDataInput }) => {
  const [clicked, setClicked] = useState(dataInput?.hotel_policy[0]);
  console.log(clicked);

  useEffect(() => {
    setDataInput((prev) => {
      return { ...prev, hotel_policy: [clicked] };
    });
  }, [clicked]);

  console.log("data input disini ", dataInput);

  return (
    <div className="p-8">
      <h1 className="font-bold text-2xl mb-8">Kebijakan Hotel</h1>

      <div>
        {/* Kebijakan Waktu Check in/out */}
        <Policy clicked={clicked} setClicked={setClicked} title={"Waktu Check-in/Check-out"} desc={"Waktu Check-in/Check-out"} name={"is_check_in_check_out"} nameVal={"time_check_in time_check_out"}>
          <div className="flex gap-4 mb-12">
            <div className="w-1/4">
              <label htmlFor="waktuMulai" className={`text-sm ${clicked?.is_check_in_check_out ? null : "opacity-50"}`}>
                Mulai
              </label>
              <div className={`relative  ${clicked?.is_check_in_check_out ? null : "opacity-50"}`}>
                <input
                  type="time"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="06.00"
                  disabled={!clicked?.is_check_in_check_out}
                  value={clicked?.time_check_in}
                  onChange={(e) =>
                    setClicked((prev) => {
                      return { ...prev, time_check_in: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="waktuAkhir" className={`text-sm ${clicked?.is_check_in_check_out ? null : "opacity-50"}`}>
                Hingga
              </label>
              <div className={`relative  ${clicked?.is_check_in_check_out ? null : "opacity-50"}`}>
                <input
                  type="time"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="10.00"
                  disabled={!clicked?.is_check_in_check_out}
                  value={clicked?.time_check_out}
                  onChange={(e) =>
                    setClicked((prev) => {
                      return { ...prev, time_check_out: e.target.value };
                    })
                  }
                />
              </div>
            </div>
          </div>
        </Policy>

        {/* Kebijakan Pembatalan */}
        <Policy clicked={clicked} setClicked={setClicked} title={"Kebijakan Pembatalan"} desc={"Tidak ada biaya pembatalan 48 jam sebelum tanggal check-in"} name={"is_policy_canceled"}>
          <div className="mb-12"></div>
        </Policy>

        {/* Kebijakan Minimum Umur */}
        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Kebijakan Usia Minimum"}
          desc={"Usia minimum untuk check-in adalah 17. Anak-anak harus didampingi orang dewasa saat check-in"}
          name={"is_policy_minimum_age"}
          nameVal={"policy_minimum_age"}
        >
          <div className="mb-12">
            <label htmlFor="usia" className={`text-sm ${clicked.is_policy_minimum_age ? null : "opacity-50"}`}>
              Batas Usia
            </label>
            <div className={`flex mt-2 h-11 w-1/5 rounded-lg border border-[#D2D7E0] ${clicked.is_policy_minimum_age ? null : "opacity-50"}`}>
              <input
                type="number"
                value={clicked?.policy_minimum_age}
                className="px-3 py-[0.625rem] w-full rounded-lg"
                placeholder="cth: 17"
                disabled={!clicked.is_policy_minimum_age}
                onChange={(e) => {
                  setClicked((prev) => {
                    return { ...prev, policy_minimum_age: parseInt(e.target.value) };
                  });
                }}
              />
            </div>
          </div>
        </Policy>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        {/* Kebijakan Check in Lebih Awal */}
        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Check-in Lebih Awal"}
          desc={"Pemesan diperbolehkan check-in lebih awal. Pemesan dapat menghubungi akomodasi jika ingin check-in lebih awal. Pemesan akan dikenakan biaya tambahan"}
          name={"is_check_in_early"}
        >
          <div className="mb-12"></div>
        </Policy>

        {/* Kebijakan Check out telat */}
        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Check-out Telat"}
          desc={"Pemesan diperbolehkan check-out telat. Pemesan dapat menghubungi akomodasi jika ingin check-out telat. Pemesan akan dikenakan biaya tambahan"}
          name={"is_check_out_overdue"}
        >
          <div className="mb-12"></div>
        </Policy>

        {/* Kebijakan Waktu Sarapan */}
        <Policy
          clicked={clicked}
          setClicked={setClicked}
          title={"Sarapan"}
          desc={"Sarapan di hotel tersedia pukul 06:00 - 10:00"}
          name={"is_breakfast"}
          nameVal={"time_breakfast_start time_breakfast_end"}
        >
          <div className="flex gap-4 mb-12">
            <div className="w-1/4">
              <label htmlFor="waktuMulai" className={`text-sm ${clicked.is_breakfast ? null : "opacity-50"}`}>
                Mulai
              </label>
              <div className={`relative  ${clicked.is_breakfast ? null : "opacity-50"}`}>
                <input
                  type="time"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="06.00"
                  disabled={!clicked.is_breakfast}
                  value={clicked?.time_breakfast_start}
                  onChange={(e) =>
                    setClicked((prev) => {
                      return { ...prev, time_breakfast_start: e.target.value };
                    })
                  }
                />
              </div>
            </div>
            <div className="w-1/4">
              <label htmlFor="waktuAkhir" className={`text-sm ${clicked.is_breakfast ? null : "opacity-50"}`}>
                Hingga
              </label>
              <div className={`relative  ${clicked.is_breakfast ? null : "opacity-50"}`}>
                <input
                  type="time"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  placeholder="10.00"
                  disabled={!clicked.is_breakfast}
                  value={clicked?.time_breakfast_end}
                  onChange={(e) =>
                    setClicked((prev) => {
                      return { ...prev, time_breakfast_end: e.target.value };
                    })
                  }
                />
              </div>
            </div>
          </div>
        </Policy>

        {/* Kebijakan Merokok */}
        <Policy clicked={clicked} setClicked={setClicked} title={"Merokok"} desc={"Merokok di akomodasi diperbolehkan"} name={"is_smoking"}>
          <div className="mb-12"></div>
        </Policy>

        {/* Kebijakan Membawa Pet */}
        <Policy clicked={clicked} setClicked={setClicked} title={"Hewan Peliharaan"} desc={"Hewan peliharaan diperbolehkan berada di akomodasi"} name={"is_pet"}></Policy>
      </div>
    </div>
  );
};

export default KebijakanHotel;
