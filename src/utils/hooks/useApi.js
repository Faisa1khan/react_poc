import { useState, useEffect } from "react";
import APIService from "../apiService/APIService";
// custom hook for performing GET request

export function useApi(method) {
  // ---- State
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ---- API
  const fetchData = async (...params) => {
    setError(null);
    try {
      setIsLoading(true);
      setData(await APIService[method](...params));
      setIsLoading(false);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, isLoading, error, fetchData];
}
