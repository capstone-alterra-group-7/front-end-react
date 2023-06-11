// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import moment from "moment";

export default function TrainDetail({ data }) {
  return (
    <div className="bg-white py-[16px] px-[32px] flex justify-between">
      <div className="">
        <img src={assets.logoKAI} alt="logoKAI" />
        <p className="font-[700] text-[16px] pt-4">{data.train.name}</p>
        <p className="font-[400] mt-2">{data.train.class}</p>
        <p className="pt-5 font-[600]">Nomor Pesanan</p>
        <p className="text-[#0080FF] text-[24px] font-[700]">
          {data.boarding_ticket_code.substring(16, 29)}
        </p>
        <p className="text-[#717275] text-[14px] pt-3">
          {" "}
          {moment(data.date).format("D MMM YYYY")}
          <span className="ml-1">
            {new Date(data.date).toLocaleTimeString("id", {
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </span>
          WIB
        </p>
      </div>

      <div className="">
        <div className="justify-end text-end">
          <button className="px-[36px] py-[8px] bg-[#CCE5FF] rounded-2xl text-[#0066CC] border border-[#0066CC] font-[600]">
            {data.status}
          </button>
        </div>

        <div className="flex pt-[56px]">
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
  );
}
