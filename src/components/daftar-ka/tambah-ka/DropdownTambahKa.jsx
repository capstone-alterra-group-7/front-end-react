// ** Import Other
import Select from "react-select";

const DropdownTambahKa = (props) => {
  const { label, data, input, setInput, placeholder, name } = props;

  return (
    <div className="flex flex-col space-y-2">
      <label className="text-[20px] font-[600] text-[#262627]">{label}</label>

      <div>
        <Select
          onChange={(e) => setInput({ ...input, [name]: e.value })}
          placeholder={placeholder}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#D2D7E0",
              padding: "3px 4px 3px",
              fontSize: "20px",
              backgroundColor: "#F9FAFB",
              borderRadius: 8,
            }),
          }}
          options={data}
          isSearchable
        />
      </div>
    </div>
  );
};

export default DropdownTambahKa;
