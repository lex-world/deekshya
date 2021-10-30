import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";

export default function LanguageSelection() {
  return (
    <SafeAreaView style={styles.languageSelectionContainer}>
      <Image
        style={styles.languageSelectionContainer__bannerImage}
        source={require("../../../assets/images/language.jpg")}
      />
      <Text>Hello</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  languageSelectionContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  languageSelectionContainer__bannerImage: {
    width: 312,
    height: 312,
  },
});
