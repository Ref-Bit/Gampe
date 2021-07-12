import { IGame } from '../../interfaces';

interface Props {
  selectedGame: IGame;
}

const Profile = ({ selectedGame }: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-start">
        <div className="flex flex-col justify-start items-start w-1/2 order-last pl-6">
          <h1 className="text-2xl text-center text-yellow-500 font-semibold py-1">
            {selectedGame?.title}
          </h1>
          <div className="text-sm font-semibold">
            <p className="py-1">
              <span className="text-gray-500">Developer: </span>
              {selectedGame?.developer}
            </p>
            <p className="py-1">
              <span className="text-gray-500">Publisher: </span>
              {selectedGame?.publisher}
            </p>
            <p className="py-1">
              <span className="text-gray-500">Genre: </span>
              {selectedGame?.genre}
            </p>
            <p className="py-1">
              <span className="text-gray-500">Release Date: </span>
              {selectedGame?.release_date}
            </p>
            <p className="py-1">
              <span className="text-gray-500">Platform: </span>
              {selectedGame?.platform.startsWith('PC') ? (
                <span title={selectedGame?.platform}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex fill-current text-gray-400 w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 12v-8.646l10-1.355v10.001h-10zm11 0h13v-12l-13 1.807v10.193zm-1 1h-10v7.646l10 1.355v-9.001zm1 0v9.194l13 1.806v-11h-13z" />
                  </svg>
                </span>
              ) : (
                <span title={selectedGame?.platform}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-flex fill-current text-gray-400 w-4 h-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0v24h24v-24h-24zm16 2h2v2h-2v-2zm-4 0h2v2h-2v-2zm10 20h-20v-16h20v16zm0-18h-2v-2h2v2z" />
                  </svg>
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2">
          <a
            href={selectedGame?.game_url}
            target="_blank"
            rel="noreferrer"
            title="View Game"
          >
            <img
              src={selectedGame?.thumbnail}
              alt={selectedGame?.title}
              className="shadow rounded transform hover:scale-105 transition duration-300"
            />
          </a>
          <p className="text-sm font-semibold pt-2">
            {selectedGame?.short_description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
