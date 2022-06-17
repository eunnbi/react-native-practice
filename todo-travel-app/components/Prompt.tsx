import { useContext } from "react";
import Dialog from "react-native-dialog";
import {
  promptDispatchContext,
  promptStateContext,
} from "../context/PromptProvider";

interface PromptProps {
  handleCancel?: any;
  handleDone?: any;
}

export default function Prompt({ handleCancel, handleDone }: PromptProps) {
  const { visible, title, value } = useContext(promptStateContext);
  const { onChangeText, closePrompt } = useContext(promptDispatchContext);
  const onCancel = () => {
    if (typeof handleCancel === "function") handleCancel();
    closePrompt();
  };

  const onDone = () => {
    if (typeof handleDone === "function") handleDone();
    closePrompt();
  };
  return (
    <Dialog.Container visible={visible}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Input value={value} onChangeText={onChangeText} />
      <Dialog.Button label="Cancel" color="#f32e52" onPress={onCancel} />
      <Dialog.Button label="Done!" color="#007ff9" onPress={onDone} />
    </Dialog.Container>
  );
}
