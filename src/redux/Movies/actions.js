import axios from "axios";

export const getMovies = async () => {
  let endpoint = "https://www.omdbapi.com/?s=super%20heroes&apikey=158583b6";

  const response = await axios.get(endpoint);

  return response.data;
};

export const getMovieDetail = async (id) => {
  const endpoint = `https://www.omdbapi.com/?i=${id}&apikey=158583b6`;
  const response = await axios.get(endpoint);

  return response.data;
};
