import { Dispatch, SetStateAction, ChangeEvent } from 'react';

interface Props {
  totalGames: number;
  pageSize: number;
  pageIndex: number;
  setPageIndex: Dispatch<SetStateAction<number>>;
}

const Paginator = ({
  totalGames,
  pageSize,
  pageIndex,
  setPageIndex,
}: Props) => {
  const handlePageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.value) {
      setPageIndex(1);
      return;
    }
    setPageIndex(parseInt(e.target.value, 10));
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex">
        {pageIndex > 1 && (
          <button
            type="button"
            onClick={() => setPageIndex(pageIndex - 1)}
            className="mr-3 p-2 w-16 bg-yellow-500 rounded shadow hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-gray-50 transition duration-300 transform hover:-translate-x-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-50 w-10 h-10 mx-auto transform rotate-180"
                viewBox="0 0 24 24"
              >
                <path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z" />
              </svg>
            </span>
          </button>
        )}
        <div className="h-8">
          <input
            type="number"
            value={pageIndex}
            min={1}
            name="pageIndex"
            onChange={handlePageChange}
            placeholder="Page Number"
            className="p-2 shadow border-2 border-yellow-500 text-gray-900 rounded w-24 focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300 text-xl"
          />
          <p className="text-sm text-yellow-500">
            of {Math.ceil(totalGames / pageSize)} total pages
          </p>
        </div>
      </div>
      <div>
        {totalGames - 1 > pageIndex * pageSize && (
          <button
            type="button"
            onClick={() => setPageIndex(pageIndex + 1)}
            className="p-2 w-16 bg-yellow-500 rounded shadow hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-gray-50 transition duration-300 transform hover:translate-x-2"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current text-gray-50 w-10 h-10 mx-auto"
                viewBox="0 0 24 24"
              >
                <path d="M16 8v-4l8 8-8 8v-4h-16l8-8h8z" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
