/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactQuill from "react-quill";
import ImageResize from "quill-image-resizer";
import "react-quill/dist/quill.snow.css";

// Register the ImageResize module
ReactQuill.Quill.register("modules/imageResize", ImageResize);

const RichTextEditor = ({
  value,
  onChange,
  placeholder = "Start typing...",
  ...className
}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
    ],
    imageResize: {}, // No special configuration needed
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
      {...className}
    />
  );
};

export default RichTextEditor;
