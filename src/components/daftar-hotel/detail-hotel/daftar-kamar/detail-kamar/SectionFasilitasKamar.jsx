import React from "react";

const SectionFasilitasKamar = ({ dataFacilities }) => {
  return (
    <div className="py-5 px-7 duration-500">
      <ul className="list-disc grid grid-flow-col grid-cols-3 grid-rows-6 gap-2">
        {dataFacilities?.map((facility, idx) => (
          <li key={idx}>{facility?.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SectionFasilitasKamar;
