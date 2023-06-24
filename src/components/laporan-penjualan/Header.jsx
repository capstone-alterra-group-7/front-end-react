import React from "react";
import assets from "../../assets/assets";

const Header = ({ month, setMonth }) => {
  // Example export csv
  // const headers = [
  //   { label: "First Name", key: "firstname" },
  //   { label: "Last Name", key: "lastname" },
  //   { label: "Email", key: "email" },
  // ];

  // const data = [
  //   { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //   { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //   { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  // ];

  return (
    <>
      <div className="px-7">
        <h1 className="text-[34px] font-bold">Laporan Penjualan {month}</h1>
      </div>
      <div className="px-8 flex justify-end gap-6">
        <div className="relative">
          <img
            src={assets.iconCalendar}
            alt=""
            className="absolute top-[10px] left-3"
          />
          <select
            className="w-36 h-11 ps-11 py-[10px] flex justify-center font-medium rounded-lg border border-[#D2D7E0] focus:border-[#0080FF] focus:ring-[#0080FF]"
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="Jan 2023">Jan 2023</option>
            <option value="Mei 2023">Mei 2023</option>
            <option value="Jun 2023">Jun 2023</option>
            <option value="Jul 2023">Jul 2023</option>
            <option value="Des 2023">Des 2023</option>
          </select>
        </div>
        {/* <CSVLink data={data} headers={headers} className="bg-[#0080FF] rounded-lg h-11 px-4 font-medium py-[10px] text-white flex items-center gap-2">
          <img src={assets.iconFileExport} alt="" className="w-4 h-4" />
          <h1>Export CSV</h1>
        </CSVLink> */}
      </div>
    </>
  );
};

export default Header;
