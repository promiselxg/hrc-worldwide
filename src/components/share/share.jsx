/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaWhatsapp, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ShareButtons = ({ blogUrl, blogTitle }) => {
  const encodedUrl = encodeURIComponent(blogUrl);
  const encodedTitle = encodeURIComponent(blogTitle);

  const openPopup = (url) => {
    const width = 600;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left},noopener`
    );
  };

  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* WhatsApp */}
      <FaWhatsapp
        className="text-[#25D366] cursor-pointer"
        size={16}
        onClick={() =>
          openPopup(`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`)
        }
      />

      {/* Facebook */}
      <FaFacebook
        className="text-[#3b5998] cursor-pointer"
        size={16}
        onClick={() =>
          openPopup(
            `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
          )
        }
      />

      {/* Twitter */}
      <FaXTwitter
        className="text-[#1DA1F2] cursor-pointer"
        size={16}
        onClick={() =>
          openPopup(
            `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
          )
        }
      />

      {/* LinkedIn */}
      <FaLinkedin
        className="text-[#0077B5] cursor-pointer"
        size={16}
        onClick={() =>
          openPopup(
            `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`
          )
        }
      />
    </div>
  );
};

export default ShareButtons;
