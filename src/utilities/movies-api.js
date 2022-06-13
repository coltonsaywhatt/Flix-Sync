import sendRequest from './send-request';
const BASE_URL = '/api/movies';

export function getNowPlaying(page) {
  return sendRequest(`${BASE_URL}/nowPlaying?page=${page}`);
}

export function getPopular(page) {
  return sendRequest(`${BASE_URL}/popular?page=${page}`);
}

export function getTopRated(page) {
  return sendRequest(`${BASE_URL}/topRated?page=${page}`);
}

export function getUpcoming(page) {
  return sendRequest(`${BASE_URL}/upcoming?page=${page}`);
}

export function getSearch(search, page) {
  return sendRequest(`${BASE_URL}/search?page=${page}`, "POST", {search});
}

export function getDetails(id) {
  return sendRequest(`${BASE_URL}/details`, "POST", {id});
}

export function add(movie) {
  return sendRequest(BASE_URL, "POST", movie);
}
export function watchList() {
  return sendRequest(BASE_URL);
}

export function deleteMovie(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE", {id});
}