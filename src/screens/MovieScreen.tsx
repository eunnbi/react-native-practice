import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
  FlatList,
  Share,
} from "react-native";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import COLORS from "../styles/color";
import ItemSeperator from "../components/common/ItemSeperator";
import { useMovieInfo } from "./hooks/useMovieInfo";
import { Feather, Ionicons } from "@expo/vector-icons";
import FONTS from "../styles/fonts";
import { getVideo } from "../utils";
import CreditCard from "../components/CreditCard";
import MovieCard from "../components/common/MovieCard";

type MovieScreenProps = StackScreenProps<RootStackParamList, "Movie">;
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

export default function MovieScreen({ navigation, route }: MovieScreenProps) {
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
  const [isCastSelected, setIsCastSelected] = useState(true);

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
      <View style={styles.moviePosterContainer}>
        <Image
          source={{ uri: backdropImage }}
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
          <Text
            style={styles.headerText}
            onPress={() =>
              Share.share({
                message: `${title}\n\n${posterImage}`,
              })
            }
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
      <ItemSeperator height={setHeight(37)} />
      <View style={styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>{title}</Text>
        <View style={styles.likeContainer}>
          <Ionicons name="heart" size={20} color={COLORS.heart} />
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
      <View style={styles.creditsContainer}>
        <Text style={styles.title}>Credits</Text>
        <View style={styles.creditsMenuContainer}>
          <TouchableOpacity onPress={() => setIsCastSelected(true)}>
            <Text
              style={{
                ...styles.creditsMenuText,
                color: !isCastSelected ? COLORS.lightGray : "#000",
              }}
            >
              Cast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsCastSelected(false)}>
            <Text
              style={{
                ...styles.creditsMenuText,
                color: isCastSelected ? COLORS.lightGray : "#000",
              }}
            >
              Crew
            </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={isCastSelected ? data?.credits.cast : data?.credits.crew}
          keyExtractor={(item) => item.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          renderItem={({ item }) => (
            <CreditCard
              name={item.name}
              image={item.profile_path}
              role={isCastSelected ? item.character : item.job}
            />
          )}
        />
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.title}>Recommended Movies</Text>
        <FlatList
          data={data?.recommendations.results}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          renderItem={({ item }) => (
            <MovieCard movie={item} size={0.6} navigation={navigation} />
          )}
        />
      </View>
      <View style={styles.recommendationContainer}>
        <Text style={styles.title}>Similar Movies</Text>
        <FlatList
          data={data?.similar.results}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          renderItem={({ item }) => (
            <MovieCard movie={item} size={0.6} navigation={navigation} />
          )}
        />
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
    paddingBottom: 50,
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
  creditsContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  creditsMenuContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  creditsMenuText: {
    marginRight: 10,
    fontFamily: FONTS.SEMI_BOLD,
  },
  recommendationContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
});
