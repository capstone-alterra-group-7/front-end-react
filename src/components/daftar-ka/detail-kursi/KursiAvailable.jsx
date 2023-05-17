// ** Import Assets
import assets from "../../../assets/assets";

const KursiAvailable = (props) => {
  const { datas, title, space, no } = props;

  return (
    <div className="flex gap-10 items-center">
      <h1
        className={`text-[20px] text-[#262627] font-[600]  ${
          no && "mt-[75px]"
        }`}
      >
        {title}
      </h1>
      <div className="grid grid-cols-12 gap-8 mx-auto">
        {datas?.map((data, i) => (
          <div key={i} className="text-center">
            {no && (
              <p className="text-[20px] w-[56px] mb-12 text-[#262627] font-[600]">
                {i + 1}
              </p>
            )}
            <div
              className={` ${data.dummy ? "p-4" : "p-[27.5px]"} ${
                space
                  ? i === 0 || i === 1
                    ? "bg-[#FFFFFF]"
                    : `${data.dummy ? "bg-[#0080FF]" : "bg-[#CCE5FF]"}`
                  : `${data.dummy ? "bg-[#0080FF]" : "bg-[#CCE5FF] w-full"}`
              } rounded-2xl w-full`}
            >
              {data.dummy && (
                <img
                  src={assets.iconKursiDetailKursi}
                  alt="p"
                  className="mx-auto"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KursiAvailable;
