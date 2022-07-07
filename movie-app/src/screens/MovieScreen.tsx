import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import COLORS from "../styles/color";
import { useMovieInfo } from "./hooks/useMovieInfo";
import { Ionicons } from "@expo/vector-icons";
import FONTS from "../styles/fonts";
import { getVideo } from "../utils";
import CreditList from "../components/CreditList";
import SubMovieList from "../components/SubMovieList";
import MovieScreenHeader from "../components/MovieScreenHeader";

export type MovieScreenProps = StackScreenProps<RootStackParamList, "Movie">;

export default function MovieScreen({ route }: MovieScreenProps) {
  const {
    id,
    title,
    language,
    backdropImage,
    posterImage,
    overview,
    voteCount,
  } = route.params;
  const { status, data } = useMovieInfo(id);
  const [video, setVideo] = useState("video");

  useEffect(() => {
    const videos = data?.videos.results;
    if (videos) {
      const video = getVideo(videos);
      setVideo(video);
    }
  }, [status]);
  console.log(id);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent style="light" />
      <MovieScreenHeader
        posterImage={posterImage}
        backdropImage={backdropImage}
        title={title}
        homepage={data?.homepage}
        video={video}
      />
      <View style={styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>{title}</Text>
        <View style={styles.likeContainer}>
          <Ionicons name={"heart"} size={20} color={COLORS.heart} />
          <Text style={styles.likeText}>{voteCount}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.lightGrayText}>{language}</Text>
        <Text style={styles.dividerText}>|</Text>
        <Text style={styles.lightGrayText}>{data?.runtime} Min</Text>
      </View>
      <View style={styles.genreContainer}>
        {data?.genres.map((genre, index) => (
          <Text style={styles.genreText} key={index}>
            {genre.name}
          </Text>
        ))}
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.title}>Overview</Text>
        <Text style={styles.overviewText}>{overview}</Text>
      </View>
      <CreditList credits={data?.credits} />
      <SubMovieList movieList={data?.recommendations.results} />
      <SubMovieList movieList={data?.similar.results} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
    paddingBottom: 50,
  },
  movieTitleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 3,
  },
  movieTitle: {
    color: "#000",
    fontFamily: FONTS.EXTRA_BOLD,
    fontSize: 20,
    maxWidth: "80%",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  likeText: {
    marginLeft: 5,
    fontSize: 15,
    fontFamily: FONTS.EXTRA_BOLD,
    color: "#000",
  },
  rowContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  lightGrayText: {
    color: COLORS.lightGray,
  },
  dividerText: {
    marginHorizontal: 5,
    color: COLORS.lightGray,
  },
  genreContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  genreText: {
    borderColor: COLORS.lightGray,
    color: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 13,
  },
  overviewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: COLORS.secondLightGray,
    marginVertical: 15,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 17,
    marginBottom: 10,
  },
  overviewText: {
    color: COLORS.gray,
    fontFamily: FONTS.SEMI_BOLD,
  },
});
