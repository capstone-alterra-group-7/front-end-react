import React from "react";
import CardUlasan from "./CardUlasan";
import assets from "../../../../assets/assets";

const CardContainerUlasan = ({ dataRating }) => {
  return (
    <div className="mt-8">
      {dataRating?.data?.ratings?.map((data, i) => {
        return <CardUlasan key={i} data={data} />;
      })}
    </div>
  );
};

export default CardContainerUlasan;
