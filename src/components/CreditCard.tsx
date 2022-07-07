import { View, StyleSheet, Text, Image } from "react-native";
import { TMDB_IMAGE_BASE_URL } from "../constants";
import COLORS from "../styles/color";
import FONTS from "../styles/fonts";

interface CastCardProps {
  name: string;
  image: string;
  role: string;
}

const NO_IMAGE = require("../../../assets/images/no-image.png");

export default function CreditCard({ name, image, role }: CastCardProps) {
  return (
    <View style={styles.container}>
      <Image
        defaultSource={NO_IMAGE}
        source={image ? { uri: `${TMDB_IMAGE_BASE_URL}/${image}` } : NO_IMAGE}
        resizeMode={image ? "cover" : "contain"}
        style={styles.image}
      />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.roleText} numberOfLines={3}>
        {role}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 80,
    height: 120,
    borderRadius: 10,
  },
  nameText: {
    width: 80,
    color: "#000",
    fontFamily: FONTS.BOLD,
    fontSize: 12,
    marginTop: 3,
  },
  roleText: {
    width: 80,
    color: COLORS.lightGray,
    fontFamily: FONTS.BOLD,
    fontSize: 10,
  },
});
