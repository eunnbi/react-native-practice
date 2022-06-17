import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";
import { Feather } from "@expo/vector-icons";

interface ThemeButtonProps {
  isLightTheme: boolean;
  changeTheme: () => void;
}

const Container = styled(View)`
  width: 60px;
  height: 60px;
  align-self: flex-end;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export default function ThemeButton({
  isLightTheme,
  changeTheme,
}: ThemeButtonProps) {
  return (
    <Container>
      <TouchableOpacity onPress={changeTheme}>
        {isLightTheme ? (
          <Feather name="sun" size={30} color="black" />
        ) : (
          <Feather name="moon" size={30} color="white" />
        )}
      </TouchableOpacity>
    </Container>
  );
}
