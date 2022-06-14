import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import DataList from "./components/DataList";
import rootReducer from "./modules";

const store = createStore(rootReducer);

export default function App() {
  const [header, setHeader] = useState("work");
  const changeHeader = (header: string) => {
    setHeader(header);
  };
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Header header={header} changeHeader={changeHeader} />
        <Input header={header} />
        <DataList header={header} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
  },
});
