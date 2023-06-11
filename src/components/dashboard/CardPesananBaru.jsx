import moment from "moment";

const CardPesananBaru = ({ dataPesananBaru }) => {
  console.log(dataPesananBaru);
  return (
    <div className="px-[32px] pb-[24px] col-span-4">
      <div className="pb-[24px] rounded-[16px] bg-[#FFFFFF] px-[32px] flex border-2 border-[#E1E4EA] ">
        <div className="flex justify-between">
          <div className=" text-left ">
            <div className="">
              <h1 className="font-[600] text-[20px] mt-[24px] mb-[16px]">
                Pesanan Baru
              </h1>
            </div>

            <div className="rounded-xl border border-[#D2D7E0]">
              <table className="w-full text-left table-fixed">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-[20px] font-bold w-14">
                      No
                    </th>
                    <th scope="col" className="px-6 py-[20px] font-bold w-52">
                      Pesanan
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-[20px] font-bold text-center"
                    >
                      Tipe
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-[20px] font-bold text-center"
                    >
                      Nomor Pesanan
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-[20px] font-bold text-center"
                    >
                      Harga
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataPesananBaru?.data?.new_order?.map((data, idx) => (
                    <tr
                      key={idx}
                      className={`border-t border-[#D2D7E0] ${
                        idx % 2 == 0 ? "bg-[#F9FAFB]" : "bg-white"
                      }`}
                    >
                      <td className="px-7 py-[8px] rounded-bl-xl">
                        {idx + 1}.
                      </td>
                      <td className="px-6 py-[8px] flex flex-col">
                        <h1 className="font-semibold mb-1">
                          {data.order_name}
                        </h1>
                        <h1 className="text-sm">
                          {moment(data.created_at).format("D MMM YYYY")}{" "}
                          <span className="ml-2">
                            {new Date(data.created_at).toLocaleTimeString(
                              "id",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}{" "}
                          </span>
                          WIB
                        </h1>
                      </td>
                      <td className=" py-[8px]  font-medium">
                        <div
                          className={`py-[6px] text-center font-semibold px-6 rounded-[24px] ${
                            idx % 2 == 0
                              ? "bg-[#FFF1E5] text-[#FF7300]"
                              : "bg-[#E5F2FF] text-[#0080FF]"
                          }`}
                        >
                          {data.type}
                        </div>
                      </td>
                      <td className="px-2 py-[8px] text-center font-[500]">
                        {data.booking_number.substring(16, 24)}
                      </td>
                      <td className="px-1 py-[8px] rounded-br-xl text-center font-[500] 2xl:text-base text-sm">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(data.price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {dataPesananBaru?.data?.new_order ? (
              ""
            ) : (
              <h1 className="text-bold text-gray-600 text-[26px] text-center mt-6">
                No Data
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardPesananBaru;
