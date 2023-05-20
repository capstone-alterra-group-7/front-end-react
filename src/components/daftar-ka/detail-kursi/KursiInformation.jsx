const KursiInformation = (props) => {
  const { title, filled } = props;

  return (
    <div className="flex gap-2 items-center">
      <div
        className={`p-3 rounded-md ${
          filled ? "bg-[#0080FF]" : "bg-[#CCE5FF]"
        } `}
      ></div>

      <h5 className="text-[16px] text-[#262627] font-[500]">{title}</h5>
    </div>
  );
};

export default KursiInformation;
