import React from "react";

const SectionInformation = () => {
  return (
    <div className="p-4 duration-500">
      <div className="flex">
        <h1 className="font-medium w-40 mr-4">Nama</h1>
        <h1 className="font-medium">info@grandpalacehotel.com</h1>
      </div>

      <div className="flex my-6">
        <h1 className="font-medium w-40 mr-4">No Telepon</h1>
        <h1 className="font-medium">+628112344213</h1>
      </div>

      <div className="flex">
        <h1 className="font-medium w-40 mr-4">Alamat</h1>
        <h1 className="font-medium">Jalan Merdeka No. 456, Kota Medan, Sumatera Utara</h1>
      </div>
    </div>
  );
};

export default SectionInformation;
