import React, { useEffect, useState } from "react";

// ** Import assets
import assets from "../../../../assets/assets";

const SectionAddFasilitas = ({ fasilitas, setFasilitas, setDataInput }) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (fasilitas.length < 1) {
      return;
    }
    if (fasilitas?.slice(-1)[0].name !== "") {
      setError(false);
    }

    // Append Data to Main State
    setDataInput((prev) => {
      return { ...prev, hotel_facilities: fasilitas };
    });
  }, [fasilitas]);

  const handleAddFasilitas = (e) => {
    if (fasilitas.length < 1) {
      setFasilitas((prev) => {
        return [...prev, { id: 0, name: "" }];
      });
      return;
    }

    if (fasilitas.slice(-1)[0].name === "") {
      setError(true);
      return;
    }

    setFasilitas((prev) => {
      // Find max id then +1
      return [...prev, { id: fasilitas.slice(-1)[0].id + 1, name: "" }];
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
        return { ...obj, name: e.target.value };
      }

      // 👇️ otherwise return the object as it is
      return obj;
    });

    setFasilitas(newState);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Fasilitas Umum</h1>
      {fasilitas?.map((data, i) => {
        return (
          <div className={`relative h-11 ${error ? "mb-2" : "mb-4"}`} key={i}>
            <input
              type="text"
              placeholder="tambah fasilitas"
              className="h-11 w-full px-[0.875rem] py-[0.625rem] rounded-lg border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500"
              onChange={(e) => handleUpdateFasilitas(e, i)}
              value={data.name}
            />
            <img src={assets.iconClose} alt="" className="absolute right-2 top-[10px] cursor-pointer" onClick={(e) => handleDeleteFasilitas(e, data)} />
          </div>
        );
      })}
      {error ? <h1 className="text-sm text-[#DB2D24] mb-4 italic">fill the blank to add more facility</h1> : null}
      <button className="py-3 rounded-lg text-white w-full font-semibold bg-[#0080FF]" onClick={handleAddFasilitas}>
        Tambahkan Fasilitas
      </button>
    </div>
  );
};

export default SectionAddFasilitas;
