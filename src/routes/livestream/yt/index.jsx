import ReactPlayer from "react-player/youtube";

const Youtube = () => {
  return (
    <div className="w-full flex justify-center h-full">
      <ReactPlayer
        controls
        url="https://www.youtube.com/embed/zTW20UFOVbo?autoplay=1"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default Youtube;
