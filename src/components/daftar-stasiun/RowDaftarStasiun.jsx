import React from "react";

const RowDaftarStasiun = ({ data, index, setModalDetail }) => {
  return (
    <tr
      className={`font-[400] text-[#262627] ${index % 2 === 0 ? "bg-[#FFFFFF]" : "bg-[#F9FAFB]"}`}
      onClick={() =>
        setModalDetail((prev) => {
          return { is_show: true, data };
        })
      }
    >
      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {data.station_name}
      </th>
      <td className="font-[400] text-[#262627] px-5 py-4 text-center">{data.code}</td>
      <td className="font-[400] text-[#262627] px-6 py-4 text-center">{data.station_number}</td>
      <td className="font-[400] text-[#262627] flex justify-center py-4 text-center">
        {data.is_active ? (
          <div className="bg-[#4CDB24] rounded-xl py-2 text-center text-white font-semibold w-48">Aktif</div>
        ) : (
          <div className="bg-[#DB2D24] rounded-xl py-2 text-center text-white font-semibold w-48">Non Aktif</div>
        )}
      </td>
    </tr>
    // flex items-center justify-between py-5 px-10
  );
};

export default RowDaftarStasiun;
