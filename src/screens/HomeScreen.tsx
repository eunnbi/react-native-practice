import { Theme, useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { StyleSheet, ScrollView } from "react-native";
import GenreList from "../components/Genres/GenreList";
import Header from "../components/Header";
import { RootStackParamList } from "../types";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

function HomeScreen(props: HomeScreenProps) {
  const theme = useTheme();
  const styles = useMemo(() => makeStyles(theme), []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent backgroundColor={theme.colors.background} />
      <Header title="Now Playing" />
      <GenreList />
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
