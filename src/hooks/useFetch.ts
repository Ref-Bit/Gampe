import { useState, useEffect } from 'react';
import { IGame, IGameFilter } from '../interfaces';
import { fetchAllGames } from '../api';

type Response = {
  games: IGame[];
  error: string;
  loading: boolean;
};

const useFetch = (params: IGameFilter): Response => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { platform, genre, tag, sortBy } = params;

  useEffect(() => {
    fetchAllGames(params)
      .then(data => {
        console.log('GAMES_DATA...', data[0]);
        setGames(data);
        setError('');
        setLoading(false);
      })
      .catch(err => {
        console.error('ERROR', err.message);
        setGames([]);
        setError('Something went wrong. Please try again later...');
        setLoading(true);
      });
  }, [params, platform, genre, tag, sortBy]);

  return {
    games,
    error,
    loading,
  };
};

export default useFetch;
