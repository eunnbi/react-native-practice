import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { IMovie } from "../../types";
import ItemSeperator from "../common/ItemSeperator";
import MovieCard from "../common/MovieCard";
import FONTS from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { MovieScreenProps } from "../../screens/MovieScreen";

export default function SubMovieList({
  movieList,
}: {
  movieList: IMovie[] | undefined;
}) {
  const navigation = useNavigation<MovieScreenProps["navigation"]>();
  if (!movieList) {
    return <ActivityIndicator />;
  }
  return (
    <View style={styles.movieListContainer}>
      <Text style={styles.title}>Similar Movies</Text>
      <FlatList
        data={movieList}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <ItemSeperator width={20} />}
        renderItem={({ item }) => (
          <MovieCard movie={item} size={0.6} navigation={navigation} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movieListContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 17,
    marginBottom: 10,
  },
});
