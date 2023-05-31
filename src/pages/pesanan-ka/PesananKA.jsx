import React from "react";
import BarPesananKA from "../../components/pesanan-ka/BarPesananKA";
import CardPesananKA from "../../components/pesanan-ka/CardPesananKA";
import { useSelector } from "react-redux";

const PesananKA = () => {
  const pesananKa = useSelector((state) => state.pesananKa)
  return (
    <div>
      <BarPesananKA/>
      <div className="">

        {pesananKa.map((pesanan, index) => (
          <CardPesananKA 
            data={pesanan}
            index={index}/>
        ))}

      </div>
    </div>
  )
};

export default PesananKA;
