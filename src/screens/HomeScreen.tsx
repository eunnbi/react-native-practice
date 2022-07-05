import { Theme, useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import MovieList from "../components/Movie/MovieList";
import { MOVIES_TYPE } from "../constants";
import { RootStackParamList } from "../types";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyles(theme), []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent backgroundColor={theme.colors.background} />
      <Header title="Now Playing" />
      <MovieList type={MOVIES_TYPE[0]} />
      <Header title="Comming Soon" />
      <MovieList type={MOVIES_TYPE[1]} />
    </ScrollView>
  );
}

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

export default HomeScreen;
