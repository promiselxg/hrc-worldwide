import axios from "axios";

export const uploadFilesToCloudinary = async (files, preset) => {
  return Promise.all(
    Object.values(files).map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", `${preset}`);
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);
      formData.append("timestamp", Math.round(new Date().getTime() / 1000));

      const { data } = await axios.post(
        `https://api.cloudinary.com/v1_1/promiselxg/image/upload`,
        formData
      );

      return data;
    })
  );
};
