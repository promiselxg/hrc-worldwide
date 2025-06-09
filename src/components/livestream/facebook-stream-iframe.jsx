/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const FacebookVideoEmbed = ({
  videoUrl,
  width = 1280,
  height = 720,
  loading,
  setLoading,
}) => {
  const encodedUrl = encodeURIComponent(videoUrl);
  const iframeSrc = `https://www.facebook.com/plugins/video.php?href=${encodedUrl}&width=${width}`;

  return (
    <div className="relative w-full aspect-video overflow-hidden">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/10 backdrop-blur-sm">
          <span className="text-gray-700 animate-pulse text-sm sm:text-base">
            Loading video...
          </span>
        </div>
      )}

      {/* Facebook Video Iframe */}
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        className="w-full h-full relative z-0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
};

export default FacebookVideoEmbed;
