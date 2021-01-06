import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

export function fetchList(input) {
  return axios.get(`${config.baseUrl}${input}/1.json`);
}

export function fetchUser(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

export function fetchQuestion(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}
