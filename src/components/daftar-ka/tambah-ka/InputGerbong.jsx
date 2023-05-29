const InputGerbong = (props) => {
  const { title, kursi, onChange } = props;
  return (
    <div className="flex items-center justify-between">
      <div className="space-y-3">
        <h5 className="text-[14px] text-[#262627] font-semibold">{title}</h5>

        <h1 className="font-[600] text-[24px]">{kursi}</h1>
      </div>

      <div className="space-y-2">
        <label className="text-[14px] text-[#262627] font-semibold">
          Harga
        </label>

        <div className="relative">
          <input
            type="number"
            name="price"
            onChange={onChange}
            disabled={kursi === "-"}
            className="border border-[#D2D7E0] bg-[#F9FAFB] py-2  pl-14 pr-4 rounded-lg focus:outline-none w-[30rem] disabled:cursor-not-allowed"
          />

          <div className="absolute top-[1px] left-1 px-3 border-r bg-white border-[#D2D7E0] rounded-l-lg py-2">
            Rp
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputGerbong;
