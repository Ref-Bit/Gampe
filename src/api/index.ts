import axios from 'axios';
import { IGameFilter } from '../interfaces';

const f2p = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
  },
});

const fetchAllGames = async (params: IGameFilter) => {
  console.log('FETCH_PARAMS', params);
  try {
    const { data } = await f2p.get('/api/games', {
      params: {
        platform: params.platform,
        category: params.genre,
        tag: params.tag,
        'sort-by': params.sortBy,
      },
    });
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export { fetchAllGames };
