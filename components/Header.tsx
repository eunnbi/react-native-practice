import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import styled from "styled-components";

interface HeaderProps {
  header: string;
  changeHeader: (header: string) => void;
}

const Menu = styled(Text)<{ header: string; menu: string }>`
  font-size: 38px;
  font-weight: 600;
  color: ${({ header, menu, theme }) =>
    header === menu ? theme.textColor : theme.disable};
`;

export default function Header({ header, changeHeader }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => changeHeader("work")}>
        <Menu header={header} menu="work">
          Work
        </Menu>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeHeader("travel")}>
        <Menu header={header} menu="travel">
          Travel
        </Menu>
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
});
