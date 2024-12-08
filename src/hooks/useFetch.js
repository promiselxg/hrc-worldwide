import host from "@/utils/host";
import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const uniqueUrl = `${host.url}${url}`;

        const response = await axios.get(`${uniqueUrl}`);
        if (!response) {
          throw new Error("Network response was not ok");
        }
        setData(response?.data?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
