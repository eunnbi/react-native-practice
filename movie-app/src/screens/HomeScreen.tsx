import { Ionicons } from "@expo/vector-icons";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import MovieList from "../components/HomeMovieList";
import { MOVIES_TYPE } from "../constants";
import COLORS from "../styles/color";
import FONTS from "../styles/fonts";
import { RootStackParamList } from "../types";

export type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent backgroundColor={COLORS.background} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Now Playing</Text>
      </View>
      <MovieList type={MOVIES_TYPE[0]} />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Comming Soon</Text>
      </View>

      <MovieList type={MOVIES_TYPE[1]} size={0.7} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingBottom: 100,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.REGULAR,
  },
});

export default HomeScreen;
