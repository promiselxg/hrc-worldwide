import { useEffect, useState } from "react";
import axios from "axios";
import host from "@/utils/host";
import ReactPlayer from "react-player/youtube";

const Youtube = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchYoutubeStream = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${host.url}/livestream/youtube`);
        setData(response?.data?.data || {});
      } catch (error) {
        console.error("Failed to fetch YouTube stream:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchYoutubeStream();
  }, []);

  return (
    <div className="w-full h-[60vh] flex justify-center items-center bg-gray-100">
      {loading ? (
        <p className="text-gray-600 text-lg font-medium">Loading stream...</p>
      ) : data?.url ? (
        <ReactPlayer
          controls
          url={data.url}
          width="100%"
          height="100%"
          className="max-w-[960px] aspect-video"
        />
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No livestream available
          </h2>
          <p className="text-gray-500">Please check back later</p>
        </div>
      )}
    </div>
  );
};

export default Youtube;
