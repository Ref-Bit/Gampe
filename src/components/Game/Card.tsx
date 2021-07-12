import { useState } from 'react';
import { IGame } from '../../interfaces';
import { Modal } from 'react-responsive-modal';
import Profile from './Profile';
import Close from '../Icons/Close';
import LazyLoad from 'react-lazyload';

interface Props {
  game: IGame;
}

const Card = ({ game }: Props) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="lg:w-1/4 sm:w-1/2 p-4">
      <div className="flex relative rounded shadow-xl hover:shadow transform hover:-rotate-3 transition duration-500">
        <LazyLoad>
          <img
            alt={game.title}
            className="absolute inset-0 w-full h-full object-cover object-center rounded"
            src={game.thumbnail}
          />
        </LazyLoad>
        <div className="px-4 py-6 relative z-10 w-full rounded border-4 border-yellow-500 dark:bg-gray-900 bg-gray-50 opacity-0 hover:opacity-100 transition duration-500">
          <h2 className="text-xl font-semibold text-yellow-500 mb-1">
            {game.title}
          </h2>
          <div className="flex items-center">
            <h3 className="inline-flex self-center text-gray-400 mb-3">
              {game.genre}
            </h3>
            <div className="inline-flex text-yellow-500 mx-2 mb-3">|</div>
            {game.platform.startsWith('PC') ? (
              <h3 className="inline-flex self-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-gray-400 w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z" />
                </svg>
              </h3>
            ) : (
              <h3 className="inline-flex self-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-gray-400 w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0v24h24v-24h-24zm16 2h2v2h-2v-2zm-4 0h2v2h-2v-2zm10 20h-20v-16h20v16zm0-18h-2v-2h2v2z" />
                </svg>
              </h3>
            )}
          </div>
          <p className="leading-relaxed mb-3">{game.short_description}</p>
          <button onClick={onOpenModal}>
            <span className="flex items-center text-yellow-500">
              <span>Show Profile</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current text-yellow-500 w-4 h-4 ml-1 mt-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z" />
                </svg>
              </span>
            </span>
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        closeIcon={<Close />}
        classNames={{ modal: 'rounded' }}
        center
      >
        <Profile selectedGame={game} />
      </Modal>
    </div>
  );
};

export default Card;
