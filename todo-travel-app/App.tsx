import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Appearance, View } from "react-native";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Input from "./components/Input";
import ProgressBar from "./components/ProgressBar";
import ThemeButton from "./components/ThemeButton";
import ListContainer from "./containers/ListContainer";
import PromptProvider from "./context/PromptProvider";
import TodosProvider from "./context/TodosProvider";
import TravelsProvider from "./context/TravlesProvider";
import { lightTheme, darkTheme } from "./styles/theme";
import { getData, storeData } from "./utils";

const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.bgColor};
  padding: 0 20px;
  transition: all 0.2s ease-in-out;
`;
export default function App() {
  const [header, setHeader] = useState("work");
  const [isLightTheme, setIsLightTheme] = useState(true);
  const changeHeader = (header: string) => {
    setHeader(header);
  };

  const changeTheme = () => {
    setIsLightTheme((isLightTheme) => !isLightTheme);
  };

  useEffect(() => {
    getData("@header").then((value) => {
      if (value) setHeader(value);
    });
    getData("@theme").then((value) => {
      if (value) {
        setIsLightTheme(value);
      } else {
        setIsLightTheme(Appearance.getColorScheme() === "light" ? true : false);
      }
    });
  }, []);

  useEffect(() => {
    storeData(header, "@header");
  }, [header]);

  useEffect(() => {
    storeData(isLightTheme, "@theme");
  }, [isLightTheme]);

  return (
    <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
      <Container>
        <StatusBar style={isLightTheme ? "auto" : "light"} />
        <Header header={header} changeHeader={changeHeader} />
        <PromptProvider>
          <TodosProvider>
            <TravelsProvider>
              <Input header={header} />
              <ProgressBar header={header} />
              <ListContainer header={header} />
            </TravelsProvider>
          </TodosProvider>
        </PromptProvider>
        <ThemeButton isLightTheme={isLightTheme} changeTheme={changeTheme} />
      </Container>
    </ThemeProvider>
  );
}
