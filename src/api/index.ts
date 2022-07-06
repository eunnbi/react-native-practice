import axios from "axios";
import { MOVIES_TYPE } from "../constants";

const API_KEY = process.env.API_KEY;
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const MOVIES_ENDPOINTS = {
  [MOVIES_TYPE[0]]: "/movie/now_playing",
  [MOVIES_TYPE[1]]: "/movie/upcoming",
};
const TMDB_REQUEST = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const getMovies = async (type: string) => {
  const { data } = await TMDB_REQUEST.get(MOVIES_ENDPOINTS[type]);
  return data;
};

const getMovieById = async (
  movieId: number,
  append_to_response: string = ""
) => {
  const { data } = await TMDB_REQUEST.get(
    `/movie/${movieId}`,
    append_to_response ? { params: { append_to_response } } : undefined
  );
  return data;
};

export { getMovies, getMovieById };
