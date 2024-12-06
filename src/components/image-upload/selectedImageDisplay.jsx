/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { X } from "lucide-react";

// Reusable component to render images with a delete button
const SelectedImagesDisplay = ({ images, onRemoveImage }) => {
  return (
    <>
      {images.map((image, index) => (
        <div
          className="w-fit h-[60px] rounded-md relative mb-5 bg-contain "
          key={index}
        >
          <X
            className="absolute -top-2 -right-2 bg-[rgba(0,0,0,0.9)] rounded-full text-white p-[5px] cursor-pointer"
            onClick={() => onRemoveImage(index)}
          />
          <img
            src={URL.createObjectURL(image)}
            alt={`Selected image ${index}`}
            className="object-contain h-[60px] w-auto"
          />
        </div>
      ))}
    </>
  );
};

export default SelectedImagesDisplay;