export type RootStackParamList = {
  Home: undefined;
  Movie: {
    id: number;
    title: string;
    language: string | undefined;
    image: string;
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
  release_date: string;
  vote_average: number;
  popularity: number;
  vote_count: number;
  backdrop_path: string;
  runtime?: number;
}

interface Genre {
  id: number;
  name: string;
}

export interface IMovieWithVideo extends IMovie {
  videos: IMovieVideoList;
}

interface IMovieVideoList {
  results: IMovieVideo[];
}

export interface IMovieVideo {
  key: string;
  site: string;
  type: string;
}
