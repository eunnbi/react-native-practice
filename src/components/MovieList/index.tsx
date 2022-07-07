import { View, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ItemSeperator from "../common/ItemSeperator";
import MovieCard from "../common/MovieCard";
import { useMovieList } from "./useMovieList";
import { HomeScreenProps } from "../../screens/HomeScreen";

interface MovieListProps {
  type: string;
  size: number;
}

export default function MovieList({ type, size }: MovieListProps) {
  const navigation = useNavigation<HomeScreenProps["navigation"]>();
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
          <MovieCard
            movie={item}
            size={size ? size : 1}
            navigation={navigation}
          />
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
