/* eslint-disable react/prop-types */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CustomEditor = ({ value, onChange, ...className }) => {
  return (
    <div className="bg-white">
      <ReactQuill
        theme="snow"
        onChange={onChange}
        value={value}
        {...className}
      />
    </div>
  );
};
