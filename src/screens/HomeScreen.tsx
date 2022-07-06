import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import MovieList from "../components/Movie/MovieList";
import { MOVIES_TYPE } from "../constants";
import COLORS from "../styles/color";
import { RootStackParamList } from "../types";

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent backgroundColor={COLORS.background} />
      <Header title="Now Playing" />
      <MovieList type={MOVIES_TYPE[0]} />
      <Header title="Comming Soon" />
      <MovieList type={MOVIES_TYPE[1]} size={0.7} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingBottom: 100,
  },
});

export default HomeScreen;
