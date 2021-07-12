import { useState, useCallback, ChangeEvent } from 'react';
import { IGameFilter } from '../interfaces';
import GamesList from './Game/List';
import GamesFilters from './Filters';
import useFetch from '../hooks/useFetch';

const Home = () => {
  const [filter, setFilter] = useState<IGameFilter>({
    platform: 'browser',
    sortBy: 'relevance',
  });
  const { games, error, loading } = useFetch(filter);

  const onFilterChange = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    console.log("FILTER_VAL", e.target.value);
    setFilter(current => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
    e.preventDefault();
  }, []);

  return (
    <div>
      <h1 className="text-center font-title text-8xl font-semibold text-yellow-600 text-shadow-light py-8">
        Gampe
      </h1>
      {loading ? (
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      ) : (
        <>
          <GamesFilters onChange={onFilterChange} />
          <GamesList games={games} />
        </>
      )}
      {error && (
        <div className="text-center text-red-500 text-2xl py-24">{error}</div>
      )}
    </div>
  );
};

export default Home;
