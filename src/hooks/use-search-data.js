import { useState, useEffect } from "react";

export const useSearchData = (search, page = 1, number = 10) => {
  const [isLoaded, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      let resp = await fetch(
        `https://apodapi.herokuapp.com/search/?search_query=${search}&number=${number}&page=${page}`,
        { signal: abortController.signal }
      );
      resp = await resp.json();
      resp.error ? setResult("error") : setResult(resp);
      setLoading(true);
    };
    fetchData();
    return () => {
      abortController.abort();
      setLoading(false);
    };
  }, [search, page, number]);
  return {
    isLoaded,
    result
  };
};
