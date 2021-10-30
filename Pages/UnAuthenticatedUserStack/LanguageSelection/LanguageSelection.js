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

import { Entypo } from "@expo/vector-icons";

export default function LanguageSelection() {
  return (
    <SafeAreaView style={styles.languageSelectionContainer}>
      <Image
        style={styles.languageSelectionContainer__bannerImage}
        source={require("../../../assets/images/language.jpg")}
      />
      {/* @section => title */}
      <Text style={styles.languageSelectionContainer__languageOptions__title}>
        Select Language
      </Text>

      {/* @section => language selector options */}
      <View style={styles.languageSelectionContainer__languageOptions}>
        <TouchableOpacity
          style={{
            ...styles.languageSelectionContainer__languageOptions__option,
            ...styles.languageSelectionContainer__languageOptions__english,
          }}
        >
          <Text
            style={
              styles.languageSelectionContainer__languageOptions__option__text
            }
          >
            English
          </Text>
          <Entypo name="circle" size={18} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.languageSelectionContainer__languageOptions__option}
        >
          <Text
            style={
              styles.languageSelectionContainer__languageOptions__option__text
            }
          >
            नेपाली
          </Text>
          <Entypo name="circle" size={18} color="black" />
        </TouchableOpacity>
      </View>

      {/* @section => language selector next button */}
      <TouchableOpacity style={styles.languageSelectionContainer__nextButton}>
        <Text style={styles.languageSelectionContainer__nextButton__text}>
          NEXT
        </Text>
      </TouchableOpacity>

      {/* @section => note */}
      <Text style={styles.languageSelectionContainer__noteText}>
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
  languageSelectionContainer__bannerImage: {
    width: 312,
    height: 312,
  },

  // section => language selector options
  languageSelectionContainer__languageOptions: {
    width: Dimensions.get("window").width * 0.75,
    borderWidth: 1,
    borderRadius: 10,
  },
  languageSelectionContainer__languageOptions__title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  languageSelectionContainer__languageOptions__option: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 16,
    borderColor: "#858585",
  },
  languageSelectionContainer__languageOptions__option__text: {
    fontSize: 15,
  },
  languageSelectionContainer__languageOptions__english: {
    borderBottomWidth: 1,
    borderColor: "#858585",
  },

  // section => language selector next button
  languageSelectionContainer__nextButton: {
    backgroundColor: "#2ECC71",
    width: Dimensions.get("window").width * 0.75,
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 20,
  },
  languageSelectionContainer__nextButton__text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },

  // @section => note text
  languageSelectionContainer__noteText: {
    fontSize: 14,
    color: "#8c8c8c",
    marginTop: 20,
  },
});
