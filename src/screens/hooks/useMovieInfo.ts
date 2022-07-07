import { useQuery } from "react-query";
import { getMovieById } from "../../api";
import { IMovieWithAdditional } from "../../types";

const APPEND_TO_RESPONSE = ["videos", "credits", "recommendations", "similar"];

export function useMovieInfo(id: number) {
  const query = useQuery<IMovieWithAdditional>(["movie", id], () =>
    getMovieById(id, APPEND_TO_RESPONSE.map((reponse) => reponse).join(","))
  );
  return query;
}
