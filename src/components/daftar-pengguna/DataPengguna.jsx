// ** Import React
import React from "react";

// ** Import Others
import { useNavigate } from "react-router-dom";
import moment from "moment";

// ** Import Components
import assets from "../../assets/assets";

const DataPengguna = ({ data, index }) => {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/detail-pengguna", {
      state: {
        data,
      },
    });
  };

  return (
    <tbody>
      <tr
        onClick={handleClick}
        className={` ${
          index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-[#FFFFFF]"
        } px-[2rem] py-[2rem] cursor-pointer border-b`}
      >
        <td className="whitespace-nowrap px-6 py-5 flex items-center text-[15px]">
          <img
            src={data.profile_picture_url}
            alt="photoprofile"
            className="max-w-[44px]"
          />

          <div className="felx ms-3 ">
            <p className="font-[600]">{data.full_name}</p>
            <p className="font-[400]">{data.email}</p>
          </div>
        </td>
        <td className="py-4">{data.phone_number}</td>
        <td className="py-4 text-center">
          {moment(data.created_at).format("D MMM YYYY")}{" "}
        </td>
        <td className="py-4 text-center">
          {moment(data.created_at).fromNow(true)}
        </td>
        <td className="whitespace-nowrap py-4 items-center">
          <p
            className={` ${
              data.deleted_at === ""
                ? "bg-[#DBF8D3] ring-1 ring-[#45C521] text-[#45C521]"
                : "bg-[#F8D5D3] ring-1 ring-[#C52920] text-[#C52920]"
            } py-[7px]  w-[190px] text-center rounded-xl text-[16px] font-[600]`}
          >
            {data.deleted_at === "" ? "Aktif" : "Non Aktif"}
          </p>
        </td>
      </tr>
    </tbody>
  );
};

export default DataPengguna;
