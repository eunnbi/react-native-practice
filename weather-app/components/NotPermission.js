import { Text, View, StyleSheet, Button } from "react-native";

export default function NotPermission({ permit }) {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>😭</Text>
      <Text style={styles.text}>We don't know your location </Text>
      <Text style={styles.smallText}>
        You must permit to see the weather for the week
      </Text>
      <Button title="Permit to know your Location🧭" onPress={permit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  emoji: {
    fontSize: 50,
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 30,
  },
  smallText: {
    fontSize: 25,
    textAlign: "center",
    marginBottom: 30,
  },
});
