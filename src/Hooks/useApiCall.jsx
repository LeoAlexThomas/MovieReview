import axios from "axios";
import { useEffect, useState } from "react";

const useApiCall = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  const apiToken = import.meta.env.VITE_MOVIE_API_ACCESS_TOKEN;

  useEffect(() => {
    if (!apiToken || apiToken.length === 0) {
      return;
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${apiToken}`;
  }, [apiToken]);

  useEffect(() => {
    fetchData();
  }, [url]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      setIsLoading(false);
      setItem(response.data);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      console.log("Error: ", error);
    }
  };

  return {
    isLoading,
    item,
    error,
  };
};

export default useApiCall;
