import FacebookVideoEmbed from "@/components/livestream/facebook-stream-iframe";
import host from "@/utils/host";
import axios from "axios";
import { useEffect, useState } from "react";

const Facebook = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFBStream = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${host.url}/livestream/facebook`);
        setData(response?.data?.data);
      } catch (error) {
        console.error("Failed to fetch Facebook stream:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFBStream();
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {data?.url ? (
        <FacebookVideoEmbed
          videoUrl={data.url}
          loading={loading}
          width={data.width}
          height={data.height}
          setLoading={setLoading}
        />
      ) : (
        <p className="text-center text-gray-500">Fetching video...</p>
      )}
    </div>
  );
};

export default Facebook;
