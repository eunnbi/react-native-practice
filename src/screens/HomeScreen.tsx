import { Theme, useTheme } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import COLORS from "../styles/color";
import { RootStackParamList } from "../types";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen = (props: HomeScreenProps) => {
  const theme = useTheme();
  const styles = useMemo(() => makeStyles(theme), []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar translucent backgroundColor={theme.colors.background} />
      <View style={styles.headerContainers}>
        <Text style={styles.headerTitle}>Now Playing</Text>
        <Text style={styles.headerSubTitle}>VIEW ALL</Text>
      </View>
    </ScrollView>
  );
};

const makeStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    headerContainers: {
      marginTop: 70,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    headerTitle: {
      fontSize: 28,
    },
    headerSubTitle: {
      fontSize: 13,
      color: COLORS.active,
    },
  });

export default HomeScreen;
