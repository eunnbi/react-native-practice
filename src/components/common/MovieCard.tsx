import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { IMovie, RootStackParamList } from "../../types";
import { getGenre, getLanguage } from "../../utils";
import { TMDB_IMAGE_BASE_URL } from "../../constants";
import COLORS from "../../styles/color";
import FONTS from "../../styles/fonts";

const IMDB = require("../../../assets/images/imdb.png");

interface MovieCardProps {
  movie: IMovie;
  size: number;
  navigation: StackNavigationProp<RootStackParamList>;
}

export default function MovieCard({ movie, size, navigation }: MovieCardProps) {
  const [like, setLike] = useState(false);
  const onLike = () => {
    setLike(!like);
  };
  const langauge = useMemo(
    () => getLanguage(movie.original_language)?.english_name,
    []
  );
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Movie", {
          id: movie.id,
          title: movie.original_title,
          language: langauge,
          backdropImage: `${TMDB_IMAGE_BASE_URL}/${movie.backdrop_path}`,
          posterImage: `${TMDB_IMAGE_BASE_URL}/${movie.poster_path}`,
          overview: movie.overview,
          voteCount: movie.vote_count,
        })
      }
    >
      <View
        style={{
          ...styles.imageContainer,
          ...sizeStyle(240 * size, 340 * size),
        }}
      >
        <Image
          style={styles.image}
          source={{ uri: `${TMDB_IMAGE_BASE_URL}/${movie.poster_path}` }}
          resizeMode="cover"
        />
        <View style={styles.ratingContainer}>
          <Image
            source={IMDB}
            resizeMode="cover"
            style={{
              ...styles.ratingImage,
              ...sizeStyle(50 * size, 20 * size),
            }}
          />
          <Text style={{ ...styles.ratingText, fontSize: 16 * size }}>
            {movie.vote_average}
          </Text>
        </View>
        <TouchableNativeFeedback onPress={onLike}>
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            size={25 * size}
            color={like ? COLORS.heart : "#fff"}
            style={styles.likeButton}
          />
        </TouchableNativeFeedback>
      </View>
      <View style={styles.movieInfoContainer}>
        <Text
          style={{
            ...styles.movieTitle,
            ...sizeStyle(230 * size),
            fontSize: size === 1 ? 15 : 20 * size,
          }}
          numberOfLines={3}
        >
          {movie.title}
        </Text>
        <View style={styles.genreContainer}>
          <Text
            style={{
              ...styles.genreText,
              fontSize: size === 1 ? 13 : 16 * size,
            }}
          >
            {getGenre(movie.genre_ids[0])?.name}
          </Text>
          {movie.genre_ids[1] && (
            <Text
              style={{
                ...styles.genreText,
                fontSize: size === 1 ? 13 : 17 * size,
              }}
            >
              {getGenre(movie.genre_ids[1])?.name}
            </Text>
          )}
        </View>
        <View style={styles.infoBottomContainer}>
          <Text
            style={{ ...styles.lang, fontSize: size === 1 ? 13 : 17 * size }}
          >
            {langauge}
          </Text>
          <View style={styles.likeContainer}>
            <Ionicons name="heart" size={17 * size} color={COLORS.heart} />
            <Text
              style={{
                ...styles.likeText,
                fontSize: size === 1 ? 13 : 17 * size,
              }}
            >
              {movie.vote_count}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

MovieCard.defaultProps = {
  size: 1,
};

const sizeStyle = (width: number, height?: number) => ({
  width,
  height,
});

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 15,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.18,
  },
  image: {
    borderRadius: 15,
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: COLORS.yellow,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 15,
    paddingVertical: 5,
  },
  ratingImage: {
    borderBottomLeftRadius: 5,
  },
  ratingText: {
    marginRight: 5,
    color: COLORS.heart,
    fontFamily: FONTS.EXTRA_BOLD,
  },
  likeButton: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  movieInfoContainer: {
    paddingHorizontal: 5,
    marginTop: 7,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRA_BOLD,
    paddingVertical: 2,
    color: COLORS.gray,
  },
  genreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  infoBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  lang: {
    fontFamily: FONTS.REGULAR,
    color: COLORS.lightGray,
  },
  genreText: {
    color: COLORS.lightGray,
    borderColor: COLORS.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 5,
    paddingHorizontal: 5,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    marginLeft: 5,
    color: COLORS.lightGray,
  },
});
