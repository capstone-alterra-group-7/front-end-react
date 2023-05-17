const InputDropdownTambahKa = (props) => {
  const { children, title, name, defaultTitle, value, onChange } = props;

  return (
    <div>
      <div className="flex flex-col space-y-2 relative">
        <h1 className="text-[20px] font-[600] text-[#262627]">{title}</h1>

        <select
          name={name}
          value={value}
          onChange={onChange}
          className="border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-none px-3 py-3 rounded-lg text-[#717275] text-[20px] font-[400]"
        >
          <option value="">{defaultTitle}</option>
          {children}
        </select>
      </div>
    </div>
  );
};

export default InputDropdownTambahKa;
