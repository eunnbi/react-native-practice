import { View, Text, StyleSheet } from "react-native";
import COLORS from "../../styles/color";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>VIEW ALL</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 28,
  },
  link: {
    fontSize: 13,
    color: COLORS.active,
  },
});
