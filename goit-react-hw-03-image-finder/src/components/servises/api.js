// import axios from "axios";

// const APIurl = "https://pixabay.com/api//";
// const key = "18852537-a646493262a464008a7b16caa";
// const perPage = 12;

// export const get = (query, page) => {
//   return axios.get(
//     `${APIurl}?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`
//   );
// };
// export const getNull = () => null;

export default {
  APIurl: "https://pixabay.com/api/",
  key: "18852537-a646493262a464008a7b16caa",
  perPage: 12,
  get(query, page = 1) {
    return fetch(
      `${this.APIurl}?q=${query}&page=${page}&key=${this.key}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
    )
      .then((response) => response.json())
      .then((data) => data.hits);
  },
};
