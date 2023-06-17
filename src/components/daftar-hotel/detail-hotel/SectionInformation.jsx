import React from "react";

const SectionInformation = ({ data }) => {
  return (
    <div className="p-4 duration-500">
      <div className="flex">
        <h1 className="font-medium w-40 mr-4">Email</h1>
        <h1 className="font-medium">{data?.email}</h1>
      </div>

      <div className="flex my-6">
        <h1 className="font-medium w-40 mr-4">No Telepon</h1>
        <h1 className="font-medium">{data?.phone_number}</h1>
      </div>

      <div className="flex">
        <h1 className="font-medium w-40 mr-4">Alamat</h1>
        <h1 className="font-medium">{data?.address}</h1>
      </div>
    </div>
  );
};

export default SectionInformation;
