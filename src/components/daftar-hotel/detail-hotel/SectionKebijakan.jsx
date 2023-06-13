import React from "react";

// ** import assest
import assets from "../../../assets/assets";
import Kebijakan from "./Kebijakan";

const SectionKebijakan = ({ data }) => {
  return (
    <div className="p-4 pb-0 duration-500">
      {/* Kebijakan Checkout */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Waktu Check-in/Check-out</h1>
            <h1 className="font-normal">
              Check-in: <span>Dari {data?.time_check_in}</span>. Check-out: <span>Sebelum {data?.time_check_out}</span>
            </h1>
          </div>
        </div>
      </Kebijakan>

      {/* Breakfast */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Breakfast</h1>
            <h1 className="font-normal">{data?.is_breakfast ? `Terdapat breakfast dari jam ${data?.time_breakfast_start} hingga ${data?.time_breakfast_end}` : "Tidak tersedia breakfast"}</h1>
          </div>
        </div>
      </Kebijakan>

      {/* Checkin Early */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Check In Early</h1>
            <h1 className="font-normal">
              {data?.is_check_in_early
                ? "Pemesan diperbolehkan check-in lebih awa.Pemesan dapat menghubungi akomodasi jika ingin check-in lebih awal. Pemesan akan dikenakan biaya tambahan"
                : "Tidak dapat check in lebih awal"}
            </h1>
          </div>
        </div>
      </Kebijakan>

      {/* Check out overdue */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Check Out Overdue</h1>
            <h1 className="font-normal">
              {data?.is_check_out_overdue
                ? "Pemesan diperbolehkan check-out telat. Pemesan dapat menghubungi akomodasi jika ingin check-out telat. Pemesan akan dikenakan biaya tambahan"
                : "Pemesan tidak diperbolehkan check-out telat."}
            </h1>
          </div>
        </div>
      </Kebijakan>

      {/* Hewan Peliharaan */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Hewan Peliharaan</h1>
            <h1 className="font-normal">{data?.is_pet ? "Hewan peliharaan diperbolehkan berada di akomodasi" : "Hewan peliharaan tidak diperbolehkan berada di akomodasi"}</h1>
          </div>
        </div>
      </Kebijakan>

      {/* Kebijakan Batal */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Kebijakan Pembatalan</h1>
            <h1 className="font-normal">{data?.is_policy_canceled ? "Bisa melakukan pembatalan, ada biaya pembatalan 48 jam sebelum tanggal check-in" : "Tidak ada pembatalan"}</h1>
          </div>
        </div>
      </Kebijakan>

      {/* Kebijakan Usia Minimum */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Kebijakan Usia Minimum</h1>
            <h1 className="font-normal">
              {data?.is_policy_minimum_age ? `Usia minimum untuk check-in adalah ${data?.policy_minimum_age}. Anak-anak harus didampingi orang dewasa saat check-in` : "Tidak ada minimal usia"}
            </h1>
          </div>
        </div>
      </Kebijakan>

      {/* Kebijakan Merokok */}
      <Kebijakan>
        <div className="flex items-start mb-6">
          <div>
            <h1 className="mb-1 font-semibold">Merokok</h1>
            <h1 className="font-normal">{data?.is_smoking ? "Merokok di akomodasi diperbolehkan" : "Merokok di akomodasi tidak diperbolehkan"}</h1>
          </div>
        </div>
      </Kebijakan>
    </div>
  );
};

export default SectionKebijakan;
