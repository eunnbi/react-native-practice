import {
  View,
  Text,
  TouchableOpacity,
  Share,
  Linking,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import ItemSeperator from "../common/ItemSeperator";
import FONTS from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { MovieScreenProps } from "../../screens/MovieScreen";

interface MovieScreenHeaderProps {
  backdropImage: string;
  title: string;
  homepage: string | undefined;
  posterImage: string;
  video: string;
}
const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");

export default function MovieScreenHeader({
  backdropImage,
  title,
  homepage,
  posterImage,
  video,
}: MovieScreenHeaderProps) {
  const navigation = useNavigation<MovieScreenProps["navigation"]>();
  return (
    <>
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
                message: `🎥 ${title}\n\n${`👀 Movie Poster => ${posterImage}`}${
                  homepage
                    ? `\n\n${homepage}`
                    : video !== ""
                    ? `\n\n${video}`
                    : null
                }`,
              })
            }
          >
            Share
          </Text>
        </TouchableOpacity>
      </View>
      <ItemSeperator height={setHeight(37)} />
    </>
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
});
