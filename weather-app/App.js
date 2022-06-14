import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import City from "./components/City";
import NotPermission from "./components/NotPermission";
import Weather from "./components/Weather";
import { useLocation } from "./hooks/useLocation";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const { ok, city, location, setOk } = useLocation();
  const { dayWeathers } = useWeather(ok, location.lat, location.lon);
  const permit = () => setOk(true);
  return (
    <View style={styles.container}>
      {ok ? (
        <>
          <View style={styles.header}>
            {city !== "" && (
              <Text style={styles.headerText}>😊 Weather for the week 😊</Text>
            )}
          </View>

          <City city={city} />
          <Weather dayWeathers={dayWeathers} />
          <StatusBar style="light" />
        </>
      ) : (
        <NotPermission permit={permit} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#89CFF0",
  },
  header: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  headerText: {
    fontSize: 20,
  },
});
