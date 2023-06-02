import React from "react";

// ** Import assets
import assets from "../../../../assets/assets";

const AddFasilitasKamar = ({ fasilitas, setFasilitas }) => {
  const handleAddFasilitas = (e) => {
    if (fasilitas.length < 1) {
      setFasilitas((prev) => {
        return [...prev, { id: 0, facility: "" }];
      });
      return;
    }

    setFasilitas((prev) => {
      // Find max id then +1
      return [...prev, { id: fasilitas.slice(-1)[0].id + 1, facility: "" }];
    });
  };

  const handleDeleteFasilitas = (e, data) => {
    setFasilitas((prev) => {
      return prev.filter((record) => record.id !== data.id);
    });
  };

  const handleUpdateFasilitas = (e, i) => {
    const newState = fasilitas.map((obj) => {
      if (obj.id === i) {
        return { ...obj, facility: e.target.value };
      }

      // 👇️ otherwise return the object as is
      return obj;
    });

    setFasilitas(newState);
  };
  return (
    <div className="mb-16">
      <h1 className="text-xl font-semibold mb-4">Fasilitas Kamar</h1>
      {fasilitas?.map((data, i) => {
        return (
          <div className="relative h-11 mb-4 " key={i}>
            <input
              type="text"
              placeholder="tambah fasilitas"
              className="h-11 w-full px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
              onChange={(e) => handleUpdateFasilitas(e, i)}
              value={data.facility}
            />
            <img src={assets.iconClose} alt="" className="absolute right-2 top-[10px] cursor-pointer" onClick={(e) => handleDeleteFasilitas(e, data)} />
          </div>
        );
      })}
      <button className="py-[0.625rem] rounded-lg text-white w-full font-semibold bg-[#0080FF]" onClick={handleAddFasilitas}>
        Tambahkan Fasilitas
      </button>
    </div>
  );
};

export default AddFasilitasKamar;
