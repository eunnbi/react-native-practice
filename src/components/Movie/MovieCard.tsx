import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import COLORS from "../../styles/color";
import { Ionicons } from "@expo/vector-icons";
import FONTS from "../../styles/fonts";
import { useState } from "react";

const IMDB = require("../../../assets/images/imdb.png");

export default function MovieCard({ item }: { item: string }) {
  const [like, setLike] = useState(false);
  const onLike = () => {
    setLike(!like);
  };
  return (
    <TouchableOpacity>
      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <Image source={IMDB} resizeMode="cover" style={styles.ratingImage} />
          <Text style={styles.ratingText}>9.4</Text>
        </View>
        <TouchableNativeFeedback onPress={onLike}>
          <Ionicons
            name={like ? "heart" : "heart-outline"}
            size={25}
            color={like ? COLORS.heart : "#fff"}
            style={styles.likeButton}
          />
        </TouchableNativeFeedback>
      </View>
      <View style={styles.movieInfoContainer}>
        <Text style={styles.movieTitle} numberOfLines={3}>
          URI - Surgical Strike - Surgical Strike - Surgical Strike
        </Text>
        <View style={styles.infoBottomContainer}>
          <Text style={styles.lang}>Hindi | (U/A)</Text>
          <View style={styles.likeContainer}>
            <Ionicons name="heart" size={17} color={COLORS.heart} />
            <Text style={styles.likeText}>90%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.active,
    width: 230,
    minHeight: 340,
    borderRadius: 15,
    elevation: 5,
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
    height: 20,
    width: 50,
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
    marginTop: 5,
  },
  movieTitle: {
    fontFamily: FONTS.EXTRA_BOLD,
    paddingVertical: 2,
    width: 230,
    color: COLORS.gray,
  },
  infoBottomContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lang: {
    fontFamily: FONTS.REGULAR,
    fontSize: 13,
    color: COLORS.lightGray,
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likeText: {
    marginLeft: 5,
    color: COLORS.lightGray,
    fontSize: 13,
  },
});
