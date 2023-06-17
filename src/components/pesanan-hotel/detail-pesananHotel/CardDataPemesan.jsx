import React from "react";

const CardDataPemesan = ({ data }) => {
  return (
    <div>
      <div className="h-[238px] bg-[#FFFFFF] flex my-[8px] cursor-pointer ">
        <div className="w-full detail-information m-6 border border-[#D2D7E0] rounded-xl py-5">
          <h1 className="text-[20px] font-semibold pb-2 ps-7">Data Pemesan</h1>
          <hr />

          <table className="leading-9">
            <th className="text-left font-semibold ps-7 pt-4">
              <tr>Nama Pemesan</tr>
              <tr>Nomor HP</tr>
              <tr>Email</tr>
            </th>

            <th className="text-left font-normal ps-7 pt-4">
              <tr>
                <h1>{data.name_order}</h1>
              </tr>
              <tr>
                <h1>{data.phone_number_order}</h1>
              </tr>
              <tr>
                <h1>{data.email_order}</h1>
              </tr>
            </th>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardDataPemesan;
