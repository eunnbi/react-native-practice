import { useQuery } from "react-query";
import { getMovieById } from "../../api";
import { IMovieWithVideo } from "../../types";

export const APPEND_TO_RESPONSE = {
  DETAILS: "",
  VIDEOS: "videos",
  CREDITS: "credits",
  RECOMMENDATIONS: "recommendations",
  SIMILAR: "similar",
};

export function useMovieInfo(id: number, type: string = "") {
  const query = useQuery<IMovieWithVideo>(["movie", id, type], () =>
    getMovieById(id, type)
  );
  return query;
}
