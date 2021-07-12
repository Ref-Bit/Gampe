import { ISelectFilter } from '../../interfaces';

const PLATFORMS: ISelectFilter[] = [
  {
    value: 'browser',
    display: 'Browser (Web)',
  },
  {
    value: 'pc',
    display: 'Windows (PC)',
  },
];

const GENRES: ISelectFilter[] = [
  {
    value: 'mmo',
    display: 'MMO',
  },
  {
    value: 'mmorpg',
    display: 'MMORPG',
  },
  {
    value: 'shooter',
    display: 'Shooter',
  },
  {
    value: 'strategy',
    display: 'Strategy',
  },
  {
    value: 'moba',
    display: 'Moba',
  },
  {
    value: 'card',
    display: 'Card Games',
  },
  {
    value: 'racing',
    display: 'Racing',
  },
  {
    value: 'sports',
    display: 'Sports',
  },
  {
    value: 'social',
    display: 'Social',
  },
  {
    value: 'fighting',
    display: 'Fighting',
  },
];

const TAGS: ISelectFilter[] = [
  {
    value: 'mmofps',
    display: 'MMOFPS',
  },
  {
    value: 'action-rpg',
    display: 'Action RPG',
  },
  {
    value: 'sandbox',
    display: 'Sandbox',
  },
  {
    value: 'open-world',
    display: 'Open World',
  },
  {
    value: 'survival',
    display: 'Survival',
  },
  {
    value: 'battle-royale',
    display: 'Battle Royale',
  },
  {
    value: 'mmotps',
    display: 'MMOTPS',
  },
  {
    value: 'anime',
    display: 'Anime',
  },
  {
    value: 'pvp',
    display: 'PvP',
  },
  {
    value: 'pve',
    display: 'PvE',
  },
  {
    value: 'fantasy',
    display: 'Fantasy',
  },
  {
    value: 'sci-fi',
    display: 'Sci-Fi',
  },
];

const SORT_BY: ISelectFilter[] = [
  {
    value: 'relevance',
    display: 'Relevance',
  },
  {
    value: 'popularity',
    display: 'Popularity',
  },
  {
    value: 'release-date',
    display: 'Release Date',
  },
  {
    value: 'alphabetical',
    display: 'Alphabetical',
  },
];

const FILTERS: {
  name: string;
  values: ISelectFilter[];
}[] = [
  {
    name: 'platform',
    values: PLATFORMS,
  },
  {
    name: 'genre',
    values: GENRES,
  },
  {
    name: 'tag',
    values: TAGS,
  },
  {
    name: 'sortBy',
    values: SORT_BY,
  },
];

export default FILTERS;