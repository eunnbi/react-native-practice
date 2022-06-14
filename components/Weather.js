import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import DayWeather from "./DayWeather";
import { SCREEN_WIDTH } from "../constants";

export default function Weather({ dayWeathers }) {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal pagingEnabled>
      {dayWeathers.length === 0 ? (
        <View style={styles.container}>
          <ActivityIndicator color="white" size="large" />
        </View>
      ) : (
        dayWeathers.map((dayWeather, index) => (
          <DayWeather key={index} dayWeather={dayWeather} />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    marginTop: 30,
  },
});
