import { useQuery } from "react-query";
import { getMovies } from "../../api";

export const useMovieList = (type: string) => {
  const query = useQuery(["movies", type], () => getMovies(type));
  return query;
};
