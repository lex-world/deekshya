import React from "react";

/**
 * @packages
 */
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import {
    Dimensions,
    Image,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";

export default function LanguageSelector() {
  /**
   * @dev language state must be dispacthed in Context API or Redux
   */
  const [language, setLanguage] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />

      {/** @section => Banner */}
      <View style={styles.bannerContainer}>
        {/**
         * @dev Store the URI Image on our own host server
         * */}
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1605214178469-178b98bb29fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
          }}
          style={styles.banner}
        />
      </View>

      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.title}>
        Select Language
      </Text>

      {/** @section => Selector */}
      <View style={styles.selectorContainer}>
        <TouchableOpacity
          onPress={() => setLanguage("English")}
          style={{ ...styles.selectorBtn, ...styles.bottonBorderSelector }}
        >
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.languageText}
          >
            English
          </Text>
          {language === "English" ? (
            <AntDesign name="smile-circle" size={19} color="#000" />
          ) : (
            <FontAwesome name="circle-thin" size={19} color="black" />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setLanguage("Nepali")}
          style={styles.selectorBtn}
        >
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={styles.languageText}
          >
            नेपाली
          </Text>
          {language === "Nepali" ? (
            <AntDesign name="smile-circle" size={19} color="#000" />
          ) : (
            <FontAwesome name="circle-thin" size={19} color="black" />
          )}
        </TouchableOpacity>
      </View>

      {/** @section => Next Btn */}
      {language !== "" && (
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextBtnText}>Next</Text>
          <AntDesign name="arrowright" size={20} color="#fff" />
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bannerContainer: {
    position: "relative",
    padding: 20
  },
  banner: {
    position: "absolute",
    height: Dimensions.get("window").height * 0.65,
    resizeMode: "cover",
    width: Dimensions.get("window").width * 0.7,
    alignSelf: "center",
    top: Dimensions.get("window").height * -0.15,
    borderBottomLeftRadius: 130,
    borderBottomRightRadius: 130,
  },
  title: {
    marginTop: Dimensions.get("window").height * 0.51,
    textAlign: "center",
    fontSize: 19,
    fontFamily: "Biryani-SemiBold",
  },
  selectorContainer: {
    borderColor: "#7a7a7a",
    borderWidth: 1,
    marginHorizontal: Dimensions.get("window").width * 0.1,
    borderRadius: 14,
    marginTop: 20,
  },
  selectorBtn: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bottonBorderSelector: {
    borderBottomColor: "#7a7a7a",
    borderBottomWidth: 1,
  },
  languageText: {
    fontFamily: "Biryani-Regular",
    fontSize: 16,
  },
  nextBtn: {
    marginHorizontal: Dimensions.get("window").width * 0.1,
    marginTop: 35,
    backgroundColor: "#000",
    borderRadius: 50,
    paddingVertical: 18,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 50,
  },
  nextBtnText: {
    color: "#fff",
    fontFamily: "Biryani-Regular",
    fontSize: 16,
    marginRight: 8,
  },
});
