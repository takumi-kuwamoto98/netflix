const API_KEY = "545fc55d4b1e6529eda949cf72ab09f4";
const BASE_URL = "/discover/tv?api_key=";
export const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=ja`,
  fetchNetflixOriginals: `${BASE_URL}${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}${API_KEY}&language=ja`,
  fetchActionMovies: `${BASE_URL}${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `${BASE_URL}${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `${BASE_URL}${API_KEY}&with_genres=99`,
};
