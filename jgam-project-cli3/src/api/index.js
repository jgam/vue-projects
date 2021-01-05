import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

export function fetchList(input) {
  return axios.get(`${config.baseUrl}${input}/1.json`);
}
