import ReactPlayer from "react-player/youtube";

const Youtube = () => {
  return (
    <div className="w-full flex justify-center h-full">
      <ReactPlayer
        controls
        url="https://youtu.be/wxrnUgnl_90?si=hX5bnWT34flwSAih"
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default Youtube;
