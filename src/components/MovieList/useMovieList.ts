import { useQuery } from "react-query";
import { getMovies } from "../../api";
import { IMovieList } from "../../types";

export const useMovieList = (type: string) => {
  const query = useQuery<IMovieList>(["movies", type], () => getMovies(type));
  return query;
};
