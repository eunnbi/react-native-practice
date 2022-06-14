import { ScrollView, View, Text, StyleSheet } from "react-native";
import { Item } from "../../modules/type";
import { theme } from "../../styles/theme";

interface ListProps {
  data: Item[];
}

export default function List({ data }: ListProps) {
  return (
    <ScrollView>
      {data.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
