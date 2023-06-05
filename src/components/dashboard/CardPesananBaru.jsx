import React from "react";
import assets from "../../assets/assets";



const CardPesananBaru = () => {

    return (
        <div className="px-[32px] pb-[24px] col-span-4">
            <div className="pb-[24px] rounded-[16px] bg-[#FFFFFF] px-[32px] flex border-2 border-[#E1E4EA] ">
                <div className="flex justify-between">
                    <div className=" text-left ">
                        <div className="">
                            <h1 className="font-[600] text-[20px] mt-[24px] mb-[16px]">Pesanan Baru</h1>
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
                                        <th scope="col" className="px-6 py-[20px] font-bold text-center">
                                            Tipe
                                        </th>
                                        <th scope="col" className="px-2 py-[20px] font-bold text-center">
                                            Nomor Pesanan
                                        </th>
                                        <th scope="col" className="px-3 py-[20px] font-bold text-center">
                                            Harga
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(10)].map((data, idx) => {
                                        return (
                                            <tr className={`border-t border-[#D2D7E0] ${idx % 2 == 0 ? "bg-[#F9FAFB]" : "bg-white"}`}>
                                                <td className="px-7 py-[8px] rounded-bl-xl">{idx + 1}.</td>
                                                <td className="px-6 py-[8px] flex flex-col">
                                                    <h1 className="font-semibold mb-1">Putri Deli</h1>
                                                    <h1 className="text-sm">16 Apr 2023 07:21 WIB</h1>
                                                </td>
                                                <td className="px-6 py-[8px] text-center font-medium">
                                                    <div className={`py-[6px] font-semibold px-6 rounded-[24px] ${idx % 2 == 0 ? "bg-[#FFF1E5] text-[#FF7300]" : "bg-[#E5F2FF] text-[#0080FF]"}`}>{idx % 2 == 0 ? "Hotel" : "Kereta"}</div>
                                                </td>
                                                <td className="px-2 py-[8px] text-center font-[500]">123456789</td>
                                                <td className="px-3 py-[8px] rounded-br-xl text-center font-[500]">Rp 12.000.000</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default CardPesananBaru;
