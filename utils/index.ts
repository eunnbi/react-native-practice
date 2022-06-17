import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "../context/common";

export const storeData = async (value: any, key: string) => {
  try {
    console.log(value);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {}
};

export const getData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export const calculatePercent = (list: Item[]) => {
  let value = 0;
  list.forEach((item) => {
    if (item.done) value += 1;
  });
  if (list.length == 0) return "0";
  return ((value / list.length) * 100).toFixed(0);
};
