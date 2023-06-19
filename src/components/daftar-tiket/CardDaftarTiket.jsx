// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function CardDaftarTiket({ data }) {
  const findKursiAvailable = data?.gerbong?.map((gerbong) => {
    return gerbong.seat.filter((seat) => seat.available === true);
  });

  const totalKursi = findKursiAvailable?.map((kursi) => kursi?.length);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/detail-tiket", { state: data });
  };

  return (
    <div
      className="bg-white m-[32px] rounded-3xl cursor-pointer shadow-md border border-[#D2D7E0]"
      onClick={handleClick}
    >
      <div className=" flex justify-between  p-[24px]">
        <div className="">
          <img src={assets.logoKai} alt="logoKAI" />
          <p className="text-[#262627] font-[700] text-[20px] pt-[24px]">
            {data.train.name}
          </p>

          <p className="pt-[8px] text-[#0080FF] text-[20px] font-[600]">
            #{data.boarding_ticket_code.substring(16, 33)}
          </p>

          <p className="text-[#0080FF] font-[600] text-[32px] pt-[50px]">
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumSignificantDigits: 4,
            }).format(data.train.train_price)}
          </p>

          <p className="text-[#262627] text-[20px] font-[400] pt-[12px]">
            Sisa {totalKursi?.reduce((acc, curr) => acc + curr)} Kursi
          </p>
        </div>

        <div className="">
          <p className="pb-16 text-[#0080FF] font-[600] justify-end text-end">
            {moment(data.date).format("D MMM YYYY")}
          </p>

          <div className="flex pt-[16px]">
            <div className="flex flex-col mr-4 pt-1">
              <h1 className="mb-20 text-sm font-semibold">
                {data.station_origin.arrive_time}
              </h1>

              <h1 className="text-sm font-semibold">
                {data.station_destination.arrive_time}
              </h1>
            </div>

            <div className="mt-2 mr-2">
              <img src={assets.stepper} alt="strepper" />
            </div>

            <div>
              <div className="mb-14">
                <h1 className="mb-1 text-[15px] font-semibold">
                  {data.station_origin.name} ({data.station_origin.initial})
                </h1>

                <h1 className="text-sm">{data.station_origin.origin}</h1>
              </div>

              <div>
                <h1 className="mb-1 text-[15px] font-semibold">
                  {data.station_destination.name} (
                  {data.station_destination.initial})
                </h1>
                <h1 className="text-sm">{data.station_destination.origin}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
