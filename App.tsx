import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import HomeScreen from "./src/screens/HomeScreen";
import MovieScreen from "./src/screens/MovieScreen";
import { RootStackParamList } from "./src/types";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { QueryClient, QueryClientProvider } from "react-query";

const RootStack = createStackNavigator<RootStackParamList>();
const queryClient = new QueryClient();

export default function App() {
  const [fontLoaded] = useFonts({
    Regular: require("./assets/fonts/NunitoSans-Regular.ttf"),
    Bold: require("./assets/fonts/NunitoSans-Bold.ttf"),
    Black: require("./assets/fonts/NunitoSans-Black.ttf"),
    ExtraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    ExtraLight: require("./assets/fonts/NunitoSans-ExtraLight.ttf"),
    Light: require("./assets/fonts/NunitoSans-Light.ttf"),
    SemiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Home">
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name="Movie"
            component={MovieScreen}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
