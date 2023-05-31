import React from "react";

// ** Import Asset
import assets from "../../../../assets/assets";

const ImageSection = ({ imageUrl, setImageUrl }) => {
  return (
    <div className="w-full mb-6 flex flex-wrap gap-4">
      {imageUrl?.map((img, i) => {
        return (
          <div className="relative">
            <img src={img} alt="" className="w-32 h-32" key={i} />
            <img src={assets.iconClose} alt="" className="bg-white absolute top-1 right-1 rounded-full font-extrabold" />
          </div>
        );
      })}
      <div className="relative w-32 h-32 cursor-pointer bg-[#D2D7E0] rounded-2xl flex justify-center">
        <input
          type="file"
          name="image"
          id="imageInput"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          placeholder="Input Image"
          onChange={(e) => {
            console.log("print target files", e.target.files[0]);
            setImageUrl((prev) => [...prev, e.target.value]);
          }}
        />
        <img src={assets.iconImageAdd} alt="" className="w-16" />
      </div>
    </div>
  );
};

export default ImageSection;
