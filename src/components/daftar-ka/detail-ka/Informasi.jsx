// ** Import Assets
import ListNumber from "./ListNumber";

// ** Import Components
import assets from "../../../assets/assets";

const Informasi = ({ data }) => {
  return (
    <div className="px-7">
      <div className=" py-2  mx-auto mb-8 flex justify-between">
        <div className="w-full">
          <img src={assets.logoKai} alt="" />

          <h1 className="font-bold text-xl mt-8 ">
            {data.namaKa}{" "}
            <span className="font-bold text-[#96989C] text-xl">
              ({data.kelasKa})
            </span>
          </h1>

          <h1 className="font-bold text-[#0080FF] text-xl mt-3">
            #{data.noKa}
          </h1>

          <h1 className="font-bold text-[#0080FF] text-2xl mt-12">
            Rp {data.harga}
          </h1>

          <h1 className="text-[#262627] mt-4">150 Kursi</h1>
        </div>
        <div className="w-[216px]">
          <button className="w-48 h-10 rounded-2xl font-bold text-white bg-[#0080FF] ms-6">
            {data.status ? "Aktif" : "Tidak Aktif"}
          </button>

          <div className="h-[164px] flex mt-9">
            <div className="flex flex-col mr-4 pt-1">
              <h1 className="mb-20 text-sm font-semibold">
                {data.waktuBerangkat}
              </h1>

              <h1 className="text-sm font-semibold">{data.waktuTiba}</h1>
            </div>

            <div className="mt-2 mr-2">
              <img src={assets.stepper} alt="" />
            </div>

            <div>
              <div className="mb-14">
                <h1 className="mb-1 font-semibold">{data.stasiunAsal}</h1>

                <h1 className="text-sm">{data.stasiunAsal}</h1>
              </div>

              <div>
                <h1 className="mb-1 font-semibold">{data.stasiunTujuan}</h1>

                <h1 className="text-sm">{data.stasiunTujuan}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-[#262627] text-[24px] font-bold mb-4">
        Rute Perjalanan
      </h2>

      <div className="list-rute  pb-10 flex flex-col">
        <ListNumber label={"1"} rute={"Medan (MDN)"} />
        <ListNumber label={"2"} rute={"Batang Kuis (BTK)"} />
        <ListNumber label={"3"} rute={"Aras Kabu (ARB)"} />
        <ListNumber label={"4"} rute={"Lubuk Pakam (LBP)"} />
        <ListNumber label={"5"} rute={"Perbaungan (PBA)"} />
        <ListNumber label={"6"} rute={"Rampah (RPH)"} />
        <ListNumber label={"7"} rute={"Bamban (BMB)"} />
        <ListNumber label={"8"} rute={"Rambutan (RMT)"} />
        <ListNumber label={"9"} rute={"Tebing Tinggi (TBI)"} />
      </div>
    </div>
  );
};

export default Informasi;
