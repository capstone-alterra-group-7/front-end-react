import React from "react";
import CardUlasan from "./CardUlasan";

const CardContainerUlasan = () => {
  return (
    <div className="mt-8">
      {[...Array(10)].map((data, i) => {
        return <CardUlasan key={i} />;
      })}
    </div>
  );
};

export default CardContainerUlasan;
