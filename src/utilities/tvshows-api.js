import sendRequest from './send-request';
const BASE_URL = '/api/tvshows';

export function getAiringToday() {
  return sendRequest(`${BASE_URL}/airingToday`);
}

export function getOnTv() {
  return sendRequest(`${BASE_URL}/onTv`);
}

export function getPopular() {
  return sendRequest(`${BASE_URL}/popular`);
}

export function getTopRated() {
  return sendRequest(`${BASE_URL}/topRated`);
}

export function getTvDetails(id) {
  return sendRequest(`${BASE_URL}/tvDetails`, "POST", {id});
}
