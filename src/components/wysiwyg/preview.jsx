/* eslint-disable react/prop-types */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const CustomEditorPreview = ({ value, theme, ...className }) => {
  return (
    <div className="bg-white">
      <ReactQuill
        theme={theme || "snow"}
        readOnly
        value={value}
        {...className}
      />
    </div>
  );
};
