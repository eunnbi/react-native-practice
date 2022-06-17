import { View, Text } from "react-native";
import styled from "styled-components";

export const ItemContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.toDoBg};
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 15px;
  border: ${({ theme }) =>
    theme.name === "light" && `1px solid ${theme.disable}`};
`;

export const ItemText = styled(Text)`
  color: ${({ theme }) => theme.textColor};
  font-size: 16px;
  font-weight: 500;
  margin-left: 13px;
`;
