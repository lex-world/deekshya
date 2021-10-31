import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// @packages
import { FontAwesome5 } from "@expo/vector-icons";

export default function PhoneVerification({ navigation }) {
  /**
   * TODO: Code Verification should be done on error toast should be raised
   * TODO: Only one character should be in code field and automatically changed to next once character is entered
   */
  return (
    <SafeAreaView style={styles.phoneVerification__container}>
      <Image
        style={styles.bannerImage}
        source={require("../../assets/images/numberVerification.jpg")}
      />

      <View style={styles.title__content}>
        <Text style={styles.phoneVerification__title}>
          Enter your verification code.
        </Text>
        <Text style={styles.phoneNumber__text}>+977 9810123456</Text>
      </View>

      <KeyboardAvoidingView style={styles.codeInput__fields}>
        <TextInput placeholder="0" style={styles.codeInput__fields__inputs} />
        <TextInput placeholder="0" style={styles.codeInput__fields__inputs} />
        <TextInput placeholder="0" style={styles.codeInput__fields__inputs} />
        <TextInput placeholder="0" style={styles.codeInput__fields__inputs} />
      </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={() => navigation.navigate("Greeting")}
        style={styles.nextBtn}
      >
        <Text style={styles.nextBtn__text}>NEXT</Text>
      </TouchableOpacity>

      {/* @section => back button */}
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.navigate("Phone Number Registration")}
      >
        <FontAwesome5 name="chevron-left" size={20} color="black" />
        <Text style={styles.goBackBtn__text}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  phoneVerification__container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  bannerImage: {
    width: 314,
    height: 314,
  },

  title__content: {
    alignSelf: "flex-start",
    marginLeft: Dimensions.get("window").width * 0.125,
  },

  phoneVerification__title: {
    fontSize: 17,
    marginTop: 25,
  },

  phoneNumber__text: {
    fontWeight: "600",
    fontSize: 17,
    marginTop: 5,
  },

  codeInput__fields: {
    display: "flex",
    flexDirection: "row",
    width: Dimensions.get("window").width * 0.75,
    justifyContent: "space-between",
    marginTop: 20,
  },

  codeInput__fields__inputs: {
    backgroundColor: "#ececec",
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 10,
    fontSize: 22,
  },

  nextBtn: {
    backgroundColor: "#2ecc71",
    width: Dimensions.get("window").width * 0.75,
    borderRadius: 10,
    paddingVertical: 18,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },

  nextBtn__text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },

  // section => go back
  goBackBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: Dimensions.get("window").width * 0.125,
  },
  goBackBtn__text: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});
