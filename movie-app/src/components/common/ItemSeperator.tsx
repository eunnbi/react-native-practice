import { View } from "react-native";

interface ItemSeperatorProps {
  width: number;
  height: number;
}

export default function ItemSeperator({ width, height }: ItemSeperatorProps) {
  return <View style={{ width, height }} />;
}

ItemSeperator.defaultProps = {
  width: 0,
  height: 0,
};
