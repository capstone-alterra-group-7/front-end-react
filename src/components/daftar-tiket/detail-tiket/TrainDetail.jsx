// ** Import Assets
import assets from "../../../assets/assets";

export default function TrainDetail({ data }) {
  const findKursiAvailable = data.gerbong.map((gerbong) => {
    return gerbong.seat.filter((seat) => seat.available === true);
  });

  const totalKursi = findKursiAvailable.map((kursi) => kursi.length);

  return (
    <div className="bg-white flex justify-between p-[32px]">
      <div className="flex flex-col justify-between">
        <div className="">
          <img src={assets.logoKAI} alt="" />

          <p className="text-[#262627] text-[20px] font-[700] pt-[32px]">
            {data.train.name}
          </p>

          <p className="text-[#0080FF]  text-[20px] font-[700]">
            #{data.boarding_ticket_code.substring(16, 33)}
          </p>
        </div>

        <div className="">
          <p className="text-[#0080FF] pt-[48px] text-[32px] font-[700]">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
            }).format(data.train.train_price)}
          </p>
          <p className="text-[#262627] text-[20px] font-[400]">
            Sisa {totalKursi.reduce((acc, curr) => acc + curr)} Kursi
          </p>
        </div>
      </div>

      <div className="">
        <div className="flex pt-[100px]">
          <div className="flex flex-col mr-4 pt-1">
            <h1 className="mb-20 text-sm font-[600]">
              {data.station_origin.arrive_time}
            </h1>
            <h1 className="text-sm font-[600]">
              {data.station_destination.arrive_time}
            </h1>
          </div>

          <div className="mt-2 mr-2">
            <img src={assets.stepper} alt="strepper" />
          </div>

          <div>
            <div className="mb-14">
              <h1 className="mb-1 text-[15px] font-[600]">
                {data.station_origin.name} ({data.station_origin.initial})
              </h1>
              <h1 className="text-sm">{data.station_origin.origin}</h1>
            </div>

            <div>
              <h1 className="mb-1 text-[15px] font-[600]">
                {data.station_destination.name} (
                {data.station_destination.initial})
              </h1>
              <h1 className="text-sm">{data.station_destination.origin}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
