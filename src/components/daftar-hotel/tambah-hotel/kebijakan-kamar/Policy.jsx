import React from "react";

const Policy = (props) => {
  const { clicked, setClicked, title, desc, name, nameVal = "", children } = props;
  const [name1, name2] = nameVal?.split(" ");
  return (
    <>
      <div className="flex mb-3">
        <h1 className="font-[600] text-xl mr-4">{title}</h1>
        <div
          className={`relative p-1 w-[3.25rem] rounded-[2rem] cursor-pointer transition-all ease-in-out duration-300 flex items-center ${
            clicked[name] ? "bg-[#0080FF]" : "bg-[#D2D7E0]"
          }`}
          onClick={() => {
            setClicked((prev) => {
              return { ...prev, [name]: !prev[name] };
            });

            if ((name === "is_check_in_check_out" || name === "is_breakfast") && !clicked?.name) {
              setClicked((prev) => {
                return { ...prev, [name1]: "-", [name2]: "-" };
              });
            }
            if (name === "is_policy_minimum_age" && !clicked?.name) {
              setClicked((prev) => {
                return { ...prev, [name1]: 0 };
              });
            }
          }}
        >
          <div className={`w-5 h-5 bg-[#F9FAFB] rounded-full absolute ${clicked[name] ? "right-1" : ""}`}></div>
        </div>
      </div>
      <h1 className="mb-3">{desc}</h1>

      {children}
    </>
  );
};

export default Policy;
