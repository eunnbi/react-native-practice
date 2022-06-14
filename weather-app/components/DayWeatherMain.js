import { View, Text, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";

export default function DayWeatherMain({ temp, mainDesc }) {
  return (
    <View style={styles.container}>
      <View style={styles.tempBox}>
        <Text style={styles.tempText}>{temp}</Text>
        <Text style={styles.mediumText}>℃</Text>
      </View>
      <Fontisto name={mainDesc} size={60} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },

  tempBox: {
    alignItems: "flex-start",
    flexDirection: "row",
  },
  tempText: {
    fontSize: 90,
    fontWeight: "600",
    marginRight: 10,
  },
  mediumText: {
    fontSize: 30,
    marginTop: 15,
  },
});
