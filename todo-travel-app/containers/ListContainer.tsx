import { useContext, useState } from "react";
import { Alert } from "react-native";
import {
  todosDispatchContext,
  todosStateContext,
} from "../context/TodosProvider";
import {
  travelsDispatchContext,
  travelsStateContext,
} from "../context/TravlesProvider";
import List from "../components/List";
import Prompt from "../components/Prompt";
import {
  promptStateContext,
  promptDispatchContext,
} from "../context/PromptProvider";

export default function ListContainer({ header }: { header: string }) {
  const [editId, setEditId] = useState(0);
  const { value } = useContext(promptStateContext);
  const { setPromptValues, showPrompt } = useContext(promptDispatchContext);
  const todos = useContext(todosStateContext);
  const travels = useContext(travelsStateContext);
  const {
    removeItem: removeTodo,
    toggleItem: toggleTodo,
    editItem: editTodo,
  } = useContext(todosDispatchContext);
  const {
    removeItem: removeTravel,
    toggleItem: toggleTravel,
    editItem: editTravel,
  } = useContext(travelsDispatchContext);
  const onRemove = (id: number) => {
    Alert.alert("Delete", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          if (header === "work") {
            removeTodo(id);
          } else {
            removeTravel(id);
          }
        },
      },
    ]);
  };

  const onToggle = (id: number) => {
    if (header === "work") {
      toggleTodo(id);
    } else {
      toggleTravel(id);
    }
  };

  const onEdit = (id: number, text: string) => {
    setEditId(id);
    setPromptValues("Edit", "", text);
    showPrompt();
  };

  const handleDone = () => {
    if (header === "work") {
      editTodo(editId, value);
    } else {
      editTravel(editId, value);
    }
  };

  return (
    <>
      <List
        data={header === "work" ? todos : travels}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
      />
      <Prompt handleDone={handleDone} />
    </>
  );
}
