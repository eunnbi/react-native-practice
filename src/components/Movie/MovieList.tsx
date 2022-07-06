import { View, StyleSheet, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemSeperator from "../common/ItemSeperator";
import MovieCard from "./MovieCard";
import { useMovieList } from "./useMovieList";

interface MovieListProps {
  type: string;
  size: number;
}

export default function MovieList({ type, size }: MovieListProps) {
  const { status, data } = useMovieList(type);
  if (status === "loading") {
    <View>
      <ActivityIndicator />
    </View>;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({ id }) => id.toString()}
        ItemSeparatorComponent={() => <ItemSeperator width={30 * size} />}
        ListHeaderComponent={() => <ItemSeperator width={30 * size} />}
        ListFooterComponent={() => <ItemSeperator width={30 * size} />}
        renderItem={({ item }) => (
          <MovieCard movie={item} size={size ? size : 1} />
        )}
      />
    </View>
  );
}

MovieList.defaultProps = {
  size: 1,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
