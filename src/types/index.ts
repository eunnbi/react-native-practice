export type RootStackParamList = {
  Home: undefined;
  Movie: {
    id: number;
    title: string;
    language: string | undefined;
    backdropImage: string;
    posterImage: string;
    overview: string;
    voteCount: number;
  };
};

export interface IMovieList {
  results: IMovie[];
}

export interface IMovie {
  id: number;
  genre_ids: number[];
  genres: Genre[];
  original_language: string;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  backdrop_path: string;
  runtime?: number;
  homepage: string;
}

interface Genre {
  id: number;
  name: string;
}

export interface IMovieWithAdditional extends IMovie {
  videos: IMovieVideoList;
  credits: IMovieCreditList;
  recommendations: IMovieList;
  similar: IMovieList;
}

interface IMovieVideoList {
  results: IMovieVideo[];
}

export interface IMovieVideo {
  key: string;
  site: string;
  type: string;
}

interface IMovieCreditList {
  cast: IMovieCredit[];
  crew: IMovieCredit[];
}

interface IMovieCredit {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  job: string;
}
