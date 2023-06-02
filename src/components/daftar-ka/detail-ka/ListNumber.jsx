export default function ListNumber(props) {
  const { label, data } = props;

  const {
    station: { name, initial },
  } = data;

  return (
    <div className="flex py-2">
      <div className="bg-[#0080FF] rounded-full w-[24px] h-[24px] flex justify-center items-center">
        <p className="font-medium text-white text-[16px]">{label}</p>
      </div>
      <div>
        <h1 className="ms-2  font-[600] text-[20px]">
          {name} ({initial})
        </h1>
        <h5 className="ms-2 text-[16px] font-[400]">{data.arrive_time}</h5>
      </div>
    </div>
  );
}
