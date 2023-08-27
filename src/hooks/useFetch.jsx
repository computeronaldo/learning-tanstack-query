import React, { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const updateFetchedData = (fetchedData) => {
    setData(fetchedData);
  };

  const updateThrownError = (throwError) => {
    setError(throwError);
  };

  const updateDataLoading = (loadingState) => {
    setIsLoading(loadingState);
  };

  return {
    data,
    error,
    isLoading,
    updateFetchedData,
    updateDataLoading,
    updateThrownError,
  };
};

export default useFetch;
