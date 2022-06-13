import sendRequest from './send-request';
const BASE_URL = '/api/tvshows';

export function getAiringToday(page) {
  return sendRequest(`${BASE_URL}/airingToday?page=${page}`);
}

export function getOnTv(page) {
  return sendRequest(`${BASE_URL}/onTv?page=${page}`);
}

export function getPopular(page) {
  return sendRequest(`${BASE_URL}/popular?page=${page}`);
}

export function getTopRated(page) {
  return sendRequest(`${BASE_URL}/topRated?page=${page}`);
}

export function getTvDetails(id) {
  return sendRequest(`${BASE_URL}/tvDetails`, "POST", {id});
}

// export function add(tv) {
//   return sendRequest(BASE_URL, "POST", tv);
// }