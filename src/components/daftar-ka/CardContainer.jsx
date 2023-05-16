import React from "react";
import CardKA from "./CardKA";
import "./styleKA.css";

const CardContainer = () => {
  return (
    <div className="h-[862px] overflow-y-scroll no-scrollbar py-8">
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
      <CardKA />
    </div>
  );
};

export default CardContainer;
