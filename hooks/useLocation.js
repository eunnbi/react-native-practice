import { useEffect, useState } from "react";
import * as Location from "expo-location";

export const useLocation = () => {
  const [city, setCity] = useState("");
  const [ok, setOk] = useState(true);
  const [location, setLocation] = useState({
    lat: null,
    lon: null,
  });
  const getLocation = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
      return;
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    setLocation({
      lat: latitude,
      lon: longitude,
    });
    const location = await Location.reverseGeocodeAsync(
      {
        latitude,
        longitude,
      },
      { useGoogleMaps: false }
    ); // city name
    setCity(location[0].city);
  };
  useEffect(() => {
    getLocation();
  }, [ok]);
  return {
    ok,
    setOk,
    city,
    location,
  };
};
