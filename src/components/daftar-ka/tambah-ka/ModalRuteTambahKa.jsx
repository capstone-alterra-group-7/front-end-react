// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import useSWR from "swr";
import { baseUrl } from "../../../services/base";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const ModalRuteTambahKa = (props) => {
  const { setRute, setInput, input } = props;

  // ** Local State
  const [selectStation, setSelectStation] = useState([]);

  const { data: station, isLoading } = useSWR(
    baseUrl("/public/station"),
    fetcher
  );

  const handleAddRute = () => {
    setInput({ ...input, rute: selectStation });

    setRute(false);
  };

  const handleChecked = (e, id) => {
    const { checked, value } = e.target;

    if (checked) {
      setSelectStation([
        ...selectStation,
        { name: value, arrive_time: "", station_id: id },
      ]);
    } else {
      setSelectStation(
        selectStation.filter((station) => station.name !== value)
      );
    }
  };

  return (
    <div className="fixed z-50 duration-500 -top-20 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="bg-white w-[800px] h-[550px] rounded-xl py-7 px-8 flex flex-col justify-between">
        <div className="space-y-7">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari Rute Perjalan"
              className="border border-[#D2D7E0] bg-[#F9FAFB] w-full py-2 rounded-lg px-11 placeholder:text-[#96989C] text-[20px] focus:outline-none"
            />

            <img
              src={assets.iconSearchDaftarKa}
              className="absolute top-[12px] left-4"
              alt="search"
            />
          </div>

          <div className="space-y-5 fixed h-[21rem] w-full overflow-y-auto">
            {isLoading && <p>Loading...</p>}
            {station?.data.map((station, i) => (
              <div key={i} className="flex gap-3">
                <input
                  value={station.name}
                  defaultChecked={station.check}
                  onChange={(e) => handleChecked(e, station.station_id)}
                  type="checkbox"
                  className="rounded-full"
                />
                <h5 className="text-[#262627] text-[20px] font-[300]">
                  {station.name} ({station.initial})
                </h5>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12 gap-5">
          <button
            onClick={() => setRute(false)}
            className="text-[18px] font-[500] text-white py-[11px] border border-[#D2D7E0] rounded-lg bg-[#DB2D24]"
          >
            Tidak
          </button>

          <button
            onClick={handleAddRute}
            className={`text-[18px] font-[500] py-[11px] border border-[#D2D7E0] rounded-lg bg-blue-500 text-white`}
          >
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRuteTambahKa;

export const stations = [
  { name: "Medan (MDN)" },
  { name: "Batang Kuis (BTK)" },
  { name: "Bandar Khalipah (BAP)" },
  { name: "Kuala Namu (KNM)" },
  { name: "Cikampek (CKM)" },
  { name: "Kosambi (KSM)" },
  { name: "Cikarang (CKR)" },
  { name: "Tambun (TBN)" },
  { name: "Kalender (KLD)" },
];
