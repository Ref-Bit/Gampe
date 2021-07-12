import { ChangeEvent } from 'react';
import FILTERS from './constants';

interface Props {
  onChange: (e: ChangeEvent<HTMLFormElement>) => void;
}

const GamesFilters = ({ onChange }: Props) => {
  return (
    <form onChange={onChange} className="container px-5">
      <div className="flex justify-between items-center w-1/2">
        {FILTERS.map((filter, i) => (
          <div className="flex flex-col justify-center" key={i}>
            <label
              className="text-yellow-500 text-lg font-semibold capitalize"
              htmlFor={filter.name}
            >
              {filter.name}
            </label>
            <div className="inline-block relative w-40">
              <select
                id={filter.name}
                name={filter.name.toLowerCase()}
                className="block appearance-none w-full text-gray-900 bg-gray-50 border-2 border-yellow-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300"
              >
                {filter.values.map(item => (
                  <option value={item.value} key={item.value}>
                    {item.display}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-yellow-500">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </form>
  );
};

export default GamesFilters;
