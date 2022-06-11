import sendRequest from './send-request';
const BASE_URL = '/api/movies';

export function getNowPlaying() {
  return sendRequest(`${BASE_URL}/nowPlaying`);
}

export function getPopular() {
  return sendRequest(`${BASE_URL}/popular`);
}

export function getTopRated() {
  return sendRequest(`${BASE_URL}/topRated`);
}

export function getUpcoming() {
  return sendRequest(`${BASE_URL}/upcoming`);
}

export function getSearch(search) {
  return sendRequest(`${BASE_URL}/search`, "POST", {search});
}

export function getDetails(id) {
  return sendRequest(`${BASE_URL}/details`, "POST", {id});
}

export function add(movie) {
  return sendRequest(BASE_URL, "POST", movie);
}