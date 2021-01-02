// export default {
//   APIurl: "https://www.themoviedb.org/",
//   key: "39bf169d652a94822d0d5b446c64885a",
//   perPage: 12,
//   get(query, page = 1) {
//     return fetch(
//       `${this.APIurl}?q=${query}&page=${page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
//     )
//       .then((response) => response.json())
//       .then((data) => data.resolts);
//   },
// };

// const baseUrl = "https://www.themoviedb.org/";

const getTrending = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=39bf169d652a94822d0d5b446c64885a`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

const searchMovies = (query = "", page = 1) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=39bf169d652a94822d0d5b446c64885a&query=${query}&page=${page}`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

const getMovieDetails = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=39bf169d652a94822d0d5b446c64885a`
  ).then((res) => res.json());
};
export const getMovieCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=39bf169d652a94822d0d5b446c64885a`
  )
    .then((res) => res.json())
    .then((data) => data.cast);
};
const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=39bf169d652a94822d0d5b446c64885a`
  )
    .then((res) => res.json())
    .then((data) => data.results);
};

export default {
  getTrending,
  searchMovies,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};
