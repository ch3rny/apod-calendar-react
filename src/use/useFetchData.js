import { useState, useEffect } from "react";
import { checkDate } from "../utils";
const useFetchData = date => {
  const [isLoaded, setLoading] = useState(false);
  const [apod, setApod] = useState({});

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      let resp = await fetch(
        `https://apodapi.herokuapp.com/api/?date=${date}&image_thumbnail_size=100&absolute_thumbnail_url=true&thumbs=true`,
        { signal: abortController.signal }
      );
      resp = await resp.json();
      setApod(resp);
      setLoading(true);
    };
    checkDate(date)
      ? fetchData()
      : setApod({
          image_thumbnail: "apod.nasa.gov/apod/calendar/S_190108.jpg"
        });
    return () => {
      abortController.abort();
      setLoading(false);
    };
  }, [date]);
  return {
    isLoaded,
    apod
  };
};

export default useFetchData;
