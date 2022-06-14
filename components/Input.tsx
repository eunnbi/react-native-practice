import { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addTodoItem } from "../modules/todos";
import { addTravelItem } from "../modules/travels";

export default function Input({ header }: { header: string }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const onChangeText = (input: string) => {
    setInput(input);
  };
  const onSubmit = () => {
    if (input === "") {
      return;
    }
    if (header === "work") {
      dispatch(addTodoItem(input));
    } else {
      dispatch(addTravelItem(input));
    }
    setInput("");
  };
  return (
    <View>
      <TextInput
        onSubmitEditing={onSubmit}
        onChangeText={onChangeText}
        autoCapitalize="sentences"
        autoCorrect
        returnKeyType="done"
        style={styles.input}
        value={input}
        placeholder={
          header === "work" ? "Add a To Do" : "Where do you want to go?"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 30,
    borderRadius: 30,
    fontSize: 18,
  },
});
