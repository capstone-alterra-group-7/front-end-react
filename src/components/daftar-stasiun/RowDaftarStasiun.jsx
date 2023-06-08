import React from "react";

const RowDaftarStasiun = ({ data, index, setModalDetail }) => {
  return (
    <tr
      className={`font-[400] text-[#262627] cursor-pointer ${
        index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-[#FFFFF]"
      }`}
      onClick={() =>
        setModalDetail((prev) => {
          return { is_show: true, data };
        })
      }
    >
      <th
        scope="row"
        className="px-6 py-4 w-[345px] font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.name}
      </th>
      <td className="font-[400] text-[#262627] px-5 py-6 text-center">
        {data.initial}
      </td>
      <td className="font-[400] text-[#262627] px-6 py-6 text-center">
        {data.station_id}
      </td>
    </tr>
    // flex items-center justify-between py-5 px-10
  );
};

export default RowDaftarStasiun;
