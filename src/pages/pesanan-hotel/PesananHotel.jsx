// Import React
import React, { useState } from "react";

// Import Components
import HeaderPesananHotel from "../../components/pesanan-hotel/Header";

import CardContainerPesananHotel from "../../components/pesanan-hotel/CardContainerPesananHotel";

// ** Import Assets

const PesananHotel = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="relative">
      <div>
        <HeaderPesananHotel setModal={setModal} />
      </div>
      <CardContainerPesananHotel />
    </div>
  );
};

export default PesananHotel;
