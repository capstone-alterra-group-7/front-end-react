import React, { useEffect } from "react";

// ** Import Other
import assets from "../../../../assets/assets";

const ImageAddKamar = ({ imageUrl, setImageUrl, setDataKamar }) => {
  useEffect(() => {
    setDataKamar((prev) => ({ ...prev, hotel_room_image: imageUrl }));
  }, [imageUrl]);

  const handleImageChange = (e) => {
    // console.log("HANDLE IMAGE CHANGE", e);
    if (e.target.files && e.target.files.length > 0) {
      // check if this is the first data image, add id 0. Id is for delete
      if (imageUrl?.length < 1) {
        setImageUrl((prev) => [...prev, { id: 0, imageFile: e.target.files[0] }]);
      } else {
        setImageUrl((prev) => [...prev, { id: imageUrl.slice(-1)[0].id + 1, imageFile: e.target.files[0] }]);
      }
    }
  };

  // function for delete image based on Id
  const handleDeleteImage = (id) => {
    setImageUrl((prev) => {
      return prev.filter((record) => record.id !== id);
    });
  };

  return (
    <div className="w-full mb-6 flex flex-wrap gap-4">
      {imageUrl?.map((img, i) => {
        return (
          <div className="relative" key={i}>
            <img
              src={
                typeof img?.imageFile === "string"
                  ? img?.imageFile
                  : img.imageFile !== undefined
                  ? URL.createObjectURL(img.imageFile)
                  : ""
              }
              alt=""
              className="w-32 h-32 object-cover"
              key={i}
            />
            <img
              src={assets.iconClose}
              alt=""
              className="bg-white absolute top-1 right-1 rounded-full font-extrabold cursor-pointer"
              onClick={() => handleDeleteImage(img.id)}
            />
          </div>
        );
      })}
      <div className="relative w-32 h-32 cursor-pointer bg-[#D2D7E0] rounded-2xl flex justify-center">
        <input
          type="file"
          name="image"
          id="imageInput"
          accept="image/png, image/gif, image/jpeg"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          placeholder="Input Image"
          onChange={handleImageChange}
        />
        <img src={assets.iconImageAdd} alt="" className="w-16" />
      </div>
    </div>
  );
};

export default ImageAddKamar;
