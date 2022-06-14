import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../styles/theme";

interface HeaderProps {
  header: string;
  changeHeader: (header: string) => void;
}

export default function Header({ header, changeHeader }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => changeHeader("work")}>
        <Text
          style={{
            ...styles.btnText,
            color: header === "work" ? "white" : theme.grey,
          }}
        >
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeHeader("travel")}>
        <Text
          style={{
            ...styles.btnText,
            color: header === "travel" ? "white" : theme.grey,
          }}
        >
          Travel
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },
  btnText: {
    color: "white",
    fontSize: 38,
    fontWeight: "600",
  },
});
