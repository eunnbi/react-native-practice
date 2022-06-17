import { useContext, useState } from "react";
import { TextInput, View } from "react-native";
import { todosDispatchContext } from "../context/TodosProvider";
import { travelsDispatchContext } from "../context/TravlesProvider";
import styled from "styled-components";

const StyledInput = styled(TextInput)`
  background-color: #fff;
  padding: 15px 20px;
  margin: 30px 0;
  border-radius: 30px;
  font-size: 18px;
  border: ${({ theme }) =>
    theme.name === "light" && `1px solid ${theme.disable}`};
`;

export default function Input({ header }: { header: string }) {
  const { addItem: addTodo } = useContext(todosDispatchContext);
  const { addItem: addTravel } = useContext(travelsDispatchContext);
  const [input, setInput] = useState("");
  const onChangeText = (input: string) => {
    setInput(input);
  };
  const onSubmit = () => {
    if (input === "") {
      return;
    }
    if (header === "work") {
      addTodo(input);
    } else {
      addTravel(input);
    }
    setInput("");
  };
  return (
    <View>
      <StyledInput
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        autoCapitalize="sentences"
        autoCorrect
        returnKeyType="done"
        value={input}
        placeholder={
          header === "work" ? "Add a To Do" : "Where do you want to go?"
        }
        placeholderTextColor={"#B8BAC0"}
      />
    </View>
  );
}
