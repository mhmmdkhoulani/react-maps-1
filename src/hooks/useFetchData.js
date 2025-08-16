import { useState, useEffect } from "react";
function useFetchData(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error("URL is wrong");
        }
        const data = await response.json();
        setData(data.users);
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
    return () => controller.abort();
  }, [url]);

  return [data, isLoading, error];
}

export default useFetchData;
