import { StyleSheet, View, Text } from "react-native";

export default function City({ city }) {
  return (
    <View style={styles.city}>
      {city ? (
        <Text style={styles.cityName}>{city}</Text>
      ) : (
        <Text style={styles.loading}>Find Your Location...🧭</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 70,
    fontWeight: "500",
  },
  loading: {
    fontSize: 30,
  },
});
