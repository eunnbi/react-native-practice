import { View, Text, StyleSheet } from "react-native";
import { SCREEN_WIDTH, ICONS } from "../constants";
import DayWeatherMain from "./DayWeatherMain";

export default function DayWeather({ dayWeather }) {
  return (
    <View style={styles.dayWeather}>
      <Text style={styles.date}>
        {new Date(dayWeather.dt * 1000)
          .toString()
          .substring(0, 10)
          .replace(" ", ", ")}
      </Text>
      <DayWeatherMain
        temp={dayWeather.temp.day.toFixed(1)}
        mainDesc={ICONS[dayWeather.weather[0].main]}
      />
      <Text style={styles.desc}>{dayWeather.weather[0].main}</Text>
      <Text style={styles.tinyText}>{dayWeather.weather[0].description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  dayWeather: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  date: {
    fontSize: 25,
    marginBottom: 70,
    alignSelf: "center",
  },
  desc: {
    fontSize: 45,
    alignSelf: "flex-end",
    paddingTop: 20,
  },
  tinyText: {
    fontSize: 20,
    alignSelf: "flex-end",
  },
});
