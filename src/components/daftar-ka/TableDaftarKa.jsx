import React from "react";
// ** Import Other
import { useNavigate } from "react-router-dom";

const TableDaftarKa = ({ data, index }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-ka", { state: { data } });
  };

  console.log(data);

  return (
    <div
      onClick={handleNavigate}
      className={`flex items-center justify-between  ${
        index % 2 === 0 ? "bg-[#F5F6F8]" : "border-b"
      } py-5 px-10 cursor-pointer`}
    >
      <h1 className="font-[400] text-[#262627] text-[16px] w-[15rem]">
        {data.name}
      </h1>
      <h1 className="-ml-[88px] font-[400] text-[16px] text-[#262627]">
        {data.code_train}
      </h1>
      <div
        className={` ${
          data.deleted_at === "" && data.status === "available"
            ? "bg-[#DBF8D3] ring-1 ring-[#45C521] text-[#45C521]"
            : "bg-[#F8D5D3] ring-1 ring-[#C52920] text-[#C52920]"
        } py-[7px] -mr-[6px] w-[190px] text-center rounded-xl text-[16px] font-[600]`}
      >
        {data.deleted_at === "" && data.status === "available"
          ? "Aktif"
          : "Non Aktif"}
      </div>
    </div>
  );
};

export default TableDaftarKa;
