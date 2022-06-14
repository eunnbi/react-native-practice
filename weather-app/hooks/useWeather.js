import { useEffect, useState } from "react";

const API_KEY = "8069667f4488984a2f5b2f0d1e81b939";

export const useWeather = (ok, lat, lon) => {
  const [dayWeathers, setDayWeathers] = useState([]);
  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    setDayWeathers(data.daily);
  };
  useEffect(() => {
    if (lat && lon && ok) {
      getWeather();
    }
  }, [lat, lon, ok]);
  return {
    dayWeathers,
  };
};
