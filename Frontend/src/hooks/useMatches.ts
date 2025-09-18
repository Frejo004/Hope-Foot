import { useState, useEffect } from 'react';
import { footballApi } from '../services/api';
import { Match, ApiResponse } from '../types';

export const useMatches = (date?: string): ApiResponse<Match[]> => {
  const [data, setData] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setLoading(true);
        const response = await footballApi.getMatches(date);
        setData(response.response || []);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des matchs');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [date]);

  return { data, loading, error };
};