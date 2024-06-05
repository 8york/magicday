import { useEffect, useState } from "react";

export default function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, { method });
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setData(jsonData);
        setIsPending(false);
      } catch (error) {
        setError(error);
        setIsPending(false);
      }
    };
    fetchData();
    return () => {};
  }, [url, method]);
  return { data, isPending, error };
}
