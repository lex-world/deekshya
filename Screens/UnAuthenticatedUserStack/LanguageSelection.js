import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  StatusBar,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";

// @packages
import { Entypo } from "@expo/vector-icons";

export default function LanguageSelection({ navigation }) {
  /**
   * * @dev current version has no logic applied to move between users
   * TODO: Add Context API or Redux for State Management
   * TODO: Store user language selection
   */
  const handleNextScreen = () => {
    navigation.navigate("Phone Number Registration");
  };

  return (
    <SafeAreaView style={styles.languageSelectionContainer}>
      <Image
        style={styles.bannerImage}
        source={require("../../assets/images/language.jpg")}
      />
      {/* @section => title */}
      <Text style={styles.languageOptions__title}>Select Language</Text>

      {/* @section => language selector options */}
      <View style={styles.languageOptions}>
        <TouchableOpacity
          style={{
            ...styles.languageOptions__option,
            ...styles.languageOptions__english,
          }}
        >
          <Text style={styles.languageOptions__option__text}>English</Text>
          <Entypo name="circle" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageOptions__option}>
          <Text style={styles.languageOptions__option__text}>नेपाली</Text>
          <Entypo name="circle" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/*
       * @section => language selector next button
       * TODO: Dispatch languge to store and move to next screen
       */}
      <TouchableOpacity onPress={handleNextScreen} style={styles.nextButton}>
        <Text style={styles.nextButton__text}>NEXT</Text>
      </TouchableOpacity>

      {/* @section => note */}
      <Text style={styles.noteText}>
        * You can change language later from settings.
      </Text>
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

  // section => banner image
  bannerImage: {
    width: 312,
    height: 312,
  },

  // section => language selector options
  languageOptions: {
    width: Dimensions.get("window").width * 0.75,
    borderWidth: 1,
    borderRadius: 10,
  },
  languageOptions__title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  languageOptions__option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderColor: "#858585",
  },
  languageOptions__option__text: {
    fontSize: 15,
  },
  languageOptions__english: {
    borderBottomWidth: 1,
    borderColor: "#858585",
  },

  // section => language selector next button
  nextButton: {
    backgroundColor: "#2ECC71",
    width: Dimensions.get("window").width * 0.75,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
  },
  nextButton__text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  // @section => note text
  noteText: {
    fontSize: 14,
    color: "#8c8c8c",
    marginTop: 20,
  },
});
