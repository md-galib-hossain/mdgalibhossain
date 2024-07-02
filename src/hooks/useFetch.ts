// useFetch.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null); 
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://portfolio-dashboard-backend.onrender.com/api/v1${url}`);
        setData(response.data); 
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
