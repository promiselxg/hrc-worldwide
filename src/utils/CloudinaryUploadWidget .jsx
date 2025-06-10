/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const CloudinaryUploadWidget = ({
  cloudName,
  uploadPreset,
  resourceType = "video",
  allowedFormats = ["mp3", "wav", "ogg"],
  maxFileSize = 90 * 1024 * 1024,
  multiple = false,
  onUploadSuccess = () => {},
  buttonLabel = "Upload Audio",
  formData,
}) => {
  console.log(formData);
  const [isLoading, setIsLoading] = useState(false);

  const loadCloudinaryScript = () => {
    return new Promise((resolve, reject) => {
      if (window.cloudinary) {
        resolve(window.cloudinary);
      } else {
        const script = document.createElement("script");
        script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
        script.type = "text/javascript";
        script.onload = () => resolve(window.cloudinary);
        script.onerror = () =>
          reject(new Error("Cloudinary script failed to load."));
        document.head.appendChild(script);
      }
    });
  };

  const openUploadWidget = async () => {
    setIsLoading(true); // Disable button

    try {
      const cloudinary = await loadCloudinaryScript();

      cloudinary.openUploadWidget(
        {
          cloudName,
          uploadPreset,
          sources: ["local"],
          resourceType,
          clientAllowedFormats: allowedFormats,
          maxFileSize,
          //multiple,
        },
        (error, result) => {
          setIsLoading(false); // Re-enable button
          if (!error && result?.event === "success") {
            console.log("Upload Success:", result.info);
            onUploadSuccess(result.info);
          } else if (error) {
            console.error("Upload Error:", error);
          }
        }
      );
    } catch (err) {
      setIsLoading(false); // Re-enable button in case of error
      console.error("Error loading Cloudinary widget:", err);
    }
  };

  return (
    <Button
      onClick={openUploadWidget}
      disabled={
        isLoading || !formData.resource_minister || !formData.resource_title
      }
    >
      {isLoading ? "Loading..." : buttonLabel}
    </Button>
  );
};

export default CloudinaryUploadWidget;
