import { useState } from 'react';
import { IGame } from '../../interfaces';
import GameCard from './Card';
import Paginator from './Paginator';

interface Props {
  games: IGame[];
}

const List = ({ games }: Props) => {
  const [pageIndex, setPageIndex] = useState(1);
  const pageSize = 16;
  const indexOfLastGame = pageIndex * pageSize;
  const indexOfFirstGame = indexOfLastGame - pageSize;

  return (
    <div className="container px-5">
      <section className="dark:text-gray-50 text-gray-900">
        <div className="py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
            {games.slice(indexOfFirstGame, indexOfLastGame).map(game => (
              <GameCard game={game} key={game.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16">
        <Paginator
          totalGames={games.length}
          pageSize={pageSize}
          pageIndex={pageIndex}
          setPageIndex={setPageIndex}
        />
      </section>
    </div>
  );
};

export default List;
