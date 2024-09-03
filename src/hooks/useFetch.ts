// src/hooks/useFetch.ts

import { useState } from 'react';

interface FetchOptions extends RequestInit {
  body?: string;
}

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  fetchData: (body?: any) => Promise<void>;
}

const useFetch = <T>(url: string, options: FetchOptions = {}): FetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async (body?: any) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        },
        body: body ? JSON.stringify(body) : options.body,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error instanceof Error ? error : new Error('An unknown error occurred'));
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
};

export default useFetch;