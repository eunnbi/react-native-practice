import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import ItemSeperator from "../common/ItemSeperator";
import CreditCard from "./CreditCard";
import FONTS from "../../styles/fonts";
import COLORS from "../../styles/color";
import { useState } from "react";
import { IMovieCreditList } from "../../types";

export default function CreditList({
  credits,
}: {
  credits: IMovieCreditList | undefined;
}) {
  const [isCastSelected, setIsCastSelected] = useState(true);
  return (
    <View style={styles.creditsContainer}>
      <Text style={styles.title}>Credits</Text>
      <View style={styles.creditsMenuContainer}>
        <TouchableOpacity onPress={() => setIsCastSelected(true)}>
          <Text
            style={{
              ...styles.creditsMenuText,
              color: !isCastSelected ? COLORS.lightGray : "#000",
            }}
          >
            Cast
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setIsCastSelected(false)}>
          <Text
            style={{
              ...styles.creditsMenuText,
              color: isCastSelected ? COLORS.lightGray : "#000",
            }}
          >
            Crew
          </Text>
        </TouchableOpacity>
      </View>
      {credits ? (
        <FlatList
          data={isCastSelected ? credits.cast : credits.crew}
          keyExtractor={(item) => item.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <ItemSeperator width={20} />}
          renderItem={({ item }) => (
            <CreditCard
              name={item.name}
              image={item.profile_path}
              role={isCastSelected ? item.character : item.job}
            />
          )}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.BOLD,
    fontSize: 17,
    marginBottom: 10,
  },
  creditsContainer: {
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  creditsMenuContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  creditsMenuText: {
    marginRight: 10,
    fontFamily: FONTS.SEMI_BOLD,
  },
});
