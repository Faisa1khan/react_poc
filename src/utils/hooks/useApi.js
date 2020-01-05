import { useState, useEffect } from "react";
import axios from "axios";
import APIService from "../apiService/APIService";
// custom hook for performing GET request

console.log(APIService["getPeople"], APIService.getPeople);
export function useApi(method, ...params) {
  // ---- State
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // ---- API
  const fetchData = async () => {
    setError(null);
    try {
      setIsLoading(true);
      setData(await APIService[method](...params));
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, isLoading, error, fetchData];
}
