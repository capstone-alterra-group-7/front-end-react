import React from "react";
// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const TableDaftarKa = ({ data, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-ka", { state: { data } });
  };

  return (
    <div
      onClick={handleNavigate}
      className={`flex items-center justify-between ${
        index % 2 === 0 ? "bg-[#F5F6F8]" : "bg-[#FFFFFF]"
      } py-5 px-10 cursor-pointer`}
    >
      <h1 className="font-[400] text-[#262627] w-[15rem]">{data.name}</h1>
      <h1 className="-ml-[88px] font-[400] text-[#262627]">
        {data.code_train}
      </h1>
      <div
        className={` ${
          data.status === "available" ? "bg-[#4CDB24]" : "bg-[#DB2D24]"
        } py-[7px] -mr-[6px] w-[190px] text-center rounded-xl text-white text-[16px] font-[600]`}
      >
        {data.status === "available" ? "Aktif" : "Non Aktif"}
      </div>
    </div>
  );
};

export default TableDaftarKa;
