"use client";

import { useState } from "react";

const useLoading = () => {
  const [loadings, setLoadings] = useState<{ [key: string]: boolean }>({});

  const setLoading = (formId: string, value: boolean) => {
    setLoadings({ ...loadings, [formId]: value });
  };

  const getLoading = (formId: string) => {
    return loadings[formId] || false;
  };

  return { getLoading, setLoading };
};

export default useLoading;
