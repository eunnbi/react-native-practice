import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ItemSeperator from "../common/ItemSeperator";
import MovieCard from "./MovieCard";
import { useMovieList } from "./useMovieList";

const dummy = ["asdf", "Asdf", "asdf", "asdfasdf"];

export default function MovieList({ type }: { type: string }) {
  const { status, data } = useMovieList(type);
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <ItemSeperator width={20} />}
        ListHeaderComponent={() => <ItemSeperator width={20} />}
        ListFooterComponent={() => <ItemSeperator width={20} />}
        renderItem={({ item }) => <MovieCard item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
