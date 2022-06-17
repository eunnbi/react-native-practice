import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Item } from "../context/common";
import { ItemContainer, ItemText } from "./Item";
import { useTheme } from "styled-components";

interface ListProps {
  data: Item[];
  onRemove: (id: number) => void;
  onToggle: (id: number) => void;
  onEdit: (id: number, text: string) => void;
}

export default function List({ data, onRemove, onToggle, onEdit }: ListProps) {
  4;
  const theme = useTheme();
  return (
    <ScrollView>
      {data.map((item: Item) => (
        <ItemContainer key={item.id}>
          <View style={styles.column}>
            <TouchableOpacity onPress={() => onToggle(item.id)}>
              {item.done ? (
                <Feather
                  name="check-square"
                  size={24}
                  color={theme.textColor}
                />
              ) : (
                <Feather name="square" size={24} color={theme.textColor} />
              )}
            </TouchableOpacity>
            <ItemText>{item.text}</ItemText>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => onEdit(item.id, item.text)}
              style={styles.column}
            >
              <Feather name="edit" size={20} color={theme.disable} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => onRemove(item.id)}
              style={styles.icon}
            >
              <Fontisto name="trash" size={18} color={theme.disable} />
            </TouchableOpacity>
          </View>
        </ItemContainer>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  column: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: 13,
  },
});
