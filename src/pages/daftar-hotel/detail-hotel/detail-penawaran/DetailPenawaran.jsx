import React from "react";

// ** Import assets
import assets from "../../../../assets/assets";

// ** Import Component
import BackButtonHotel from "../../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";

const DetailPenawaran = () => {
  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="px-7 p-3">
        <h1 className=" text-[32px] font-bold">Detail Penawaran</h1>

        <div className="pt-7 flex justify-between items-center">
          <BackButtonHotel url={"/daftar-hotel"} />
          <ButtonDetailHotel title={"Penawaran"} />
        </div>
      </div>
      <div className="bg-[#EBEDF1]">
        <div className="bg-white p-8 ">
          <h1 className="text-2xl font-bold mb-2">Early Bird Promo</h1>
          <h1 className="mb-12">
            Tanggal Berlaku <span className="text-[#0080FF] font-semibold">1 Januari 2023 - 31 Maret 2023</span>
          </h1>

          <div className="flex">
            <h1 className="text-[#96989C] text-2xl line-through">Rp 1.500.000</h1>
            <h1 className="px-2 py-1 bg-[#DBF8D3] text-[#45C521] rounded-lg ms-3 mb-3">-10%</h1>
          </div>

          <h1 className="text-5xl font-bold text-[#0080FF] mb-1">
            Rp 1.350.000 <span className="text-[#96989C] text-xl mb-1">/ kamar / malam</span>
          </h1>

          <h1 className="text-[#FF7300] text-xl mb-8">Termasuk Pajak</h1>

          <div className="grid grid-flow-col grid-rows-3 mt-12 gap-x-3 gap-y-6 w-1/3">
            {[...Array(5)].map((none) => {
              return (
                <div className="flex">
                  <img src={assets.iconSpoonFork} alt="" />
                  <h1 className="font-medium ms-3">Sarapan (2 pax)</h1>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-8 mt-2 pb-16">
          <h1 className="text-2xl font-bold mb-6">Kebijakan Kamar</h1>

          <div>
            <h1 className="text-xl font-semibold mb-1">Tidak bisa di-refund (Pengambilan dana)</h1>
            <h1 className="mb-8">Maaf, untuk kamar ini tidak tersedia opsi pengembalian dana. Harap dicatat bahwa pembayaran untuk kamar ini bersifat non-refundable</h1>
            <h1 className="text-xl font-semibold mb-1">Tidak bisa di-reshedule (Pengubahan jadwal)</h1>
            <span>Maaf, untuk kamar ini tidak tersedia opsi pengubahan jadwal. Harap dicatat bahwa jadwal pemesanan kamar ini tidak dapat diubah.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPenawaran;
