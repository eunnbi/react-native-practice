import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import COLORS from "../styles/color";
import ItemSeperator from "../components/common/ItemSeperator";
import { useMovieInfo } from "../components/Movie/useMovieInfo";
import { Feather, Ionicons } from "@expo/vector-icons";
import FONTS from "../styles/fonts";
import { getVideo } from "../utils";

type MovieScreenProps = StackScreenProps<RootStackParamList, "Movie">;
const APPEND_TO_RESPONSE = {
  VIDEOS: "videos",
  CREDITS: "credits",
  RECOMMENDATIONS: "recommendations",
  SIMILAR: "similar",
};
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

export default function MovieScreen({ navigation, route }: MovieScreenProps) {
  const { id, title, language, image } = route.params;
  const { status, data } = useMovieInfo(id, APPEND_TO_RESPONSE.VIDEOS);
  console.log(id);
  const [video, setVideo] = useState("");

  useEffect(() => {
    const videos = data?.videos.results;
    if (videos) {
      const video = getVideo(videos);
      setVideo(video);
    }
  }, [status]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent style="light" />
      <View style={styles.moviePosterContainer}>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.moviePoster}
        />
        {video !== "" && (
          <TouchableOpacity
            style={styles.playButton}
            onPress={() => Linking.openURL(video)}
          >
            <Ionicons name="play-circle-outline" size={70} color={"#fff"} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.headerText}>Share</Text>
        </TouchableOpacity>
      </View>
      <ItemSeperator height={setHeight(37)} />
      <View style={styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>{data?.original_title}</Text>
        <View style={styles.likeContainer}>
          <Ionicons name="heart" size={20} color={COLORS.heart} />
          <Text style={styles.likeText}>{data?.vote_count}</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.lightGrayText}>{language}</Text>
        <Text style={styles.dividerText}>|</Text>
        <Text style={styles.lightGrayText}>{data?.runtime} Min</Text>
      </View>
      <View style={styles.rowContainer}>
        {data?.genres.map((genre, index) => (
          <Text style={styles.genreText} key={index}>
            {genre.name}
          </Text>
        ))}
      </View>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{data?.overview}</Text>
      </View>
    </ScrollView>
  );
}

const setWidth = (w: number) => (WIDTH / 100) * w;

const setHeight = (h: number) => (HEIGHT / 100) * h;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  moviePosterContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    position: "absolute",
    top: 0,
    left: setWidth((100 - 145) / 2),
    elevation: 8,
  },
  moviePoster: {
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    height: setHeight(35),
    width: setWidth(145),
  },
  playButton: {
    position: "absolute",
    top: "40%",
  },
  headerContainer: {
    position: "absolute",
    top: 55,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    elevation: 20,
  },
  headerText: {
    color: "#fff",
    fontFamily: FONTS.BOLD,
    fontSize: 16,
  },
  movieTitleContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  movieTitle: {
    color: "#000",
    fontFamily: FONTS.EXTRA_BOLD,
    fontSize: 20,
    maxWidth: "60%",
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
    paddingVertical: 6,
  },
  lightGrayText: {
    color: COLORS.lightGray,
  },
  dividerText: {
    marginHorizontal: 5,
    color: COLORS.lightGray,
  },
  genreText: {
    borderColor: COLORS.lightGray,
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
    marginVertical: 20,
  },
  overviewTitle: {
    fontFamily: FONTS.BOLD,
    fontSize: 17,
    marginVertical: 5,
  },
  overviewText: {
    color: COLORS.gray,
    fontFamily: FONTS.SEMI_BOLD,
    marginVertical: 5,
  },
});
