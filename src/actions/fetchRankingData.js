import axios from 'axios';

export const FETCH_RANKING_DATA = 'FETCH_RANKING_DATA';

const API = 'https://api.myjson.com/bins/qzpg9';
const HOST = API;

export const FetchRankingData = () => {
  const request = axios.get(HOST);

  return {
    type: FETCH_RANKING_DATA,
    payload: request,
  };
};
