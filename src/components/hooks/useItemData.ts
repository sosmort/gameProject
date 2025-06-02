import { useState, useEffect } from "react";
import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../../services/api-client";
const useItemData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps: any[] = []
) => {
  const [dataDetails, setDataDetails] = useState<T | null>(null);

  const [errors, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      apiClient
        .get<T>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setDataDetails(res.data);
          setLoading(false);
        })

        .catch((err) => {
          if (err instanceof CanceledError) return;
          setErrors(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { dataDetails, errors, isLoading };
};

export default useItemData;
