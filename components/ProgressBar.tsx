import { useContext, useMemo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { todosStateContext } from "../context/TodosProvider";
import { travelsStateContext } from "../context/TravlesProvider";
import { calculatePercent } from "../utils";
import styled from "styled-components";

const BarWrapper = styled(View)`
  flex-grow: 1;
  height: 5px;
  background-color: ${({ theme }) => theme.disable};
  border-radius: 10px;
`;

const Bar = styled(View)<{ percent: string }>`
  flex: 1;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.textColor};
  width: ${({ percent }) => `${percent}%`};
`;

const Percent = styled(Text)`
  color: ${({ theme }) => theme.textColor};
  margin-left: 20px;
  font-size: 15px;
`;

export default function ProgressBar({ header }: { header: string }) {
  const todos = useContext(todosStateContext);
  const travels = useContext(travelsStateContext);
  const todosPercent = useMemo(() => {
    return calculatePercent(todos);
  }, [todos]);

  const travelsPercent = useMemo(() => {
    return calculatePercent(travels);
  }, [travels]);

  return (
    <View style={styles.container}>
      <BarWrapper>
        <Bar percent={header === "work" ? todosPercent : travelsPercent} />
      </BarWrapper>
      <Percent>
        {header === "work" ? `${todosPercent}% ✨` : `${travelsPercent}% ✈️`}
      </Percent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});
