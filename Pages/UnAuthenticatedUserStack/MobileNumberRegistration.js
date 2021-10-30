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

import { FontAwesome5 } from "@expo/vector-icons";

export default function MobileNumberRegistration() {
  return (
    <SafeAreaView style={styles.mobileNumberRegistrationContainer}>
      {/* @section => banner image */}
      <Image
        style={styles.mobileNumberRegistrationContainer__bannerImage}
        source={require("../../assets/images/phoneVerification.png")}
      />

      {/* @section => input field */}
      <View style={styles.mobileNumberRegistrationContainer__mobileNumberInput}>
        <Text
          style={
            styles.mobileNumberRegistrationContainer__mobileNumberInput__titleText
          }
        >
          Enter your mobile number
        </Text>
        <View
          style={
            styles.mobileNumberRegistrationContainer__mobileNumberInput__container
          }
        >
          <Image
            style={
              styles.mobileNumberRegistrationContainer__mobileNumberInput__container__imageThumb
            }
            source={require("../../assets/images/nepalFlag.png")}
          />
          <Text
            style={
              styles.mobileNumberRegistrationContainer__mobileNumberInput__container__countryCode
            }
          >
            +977
          </Text>

          <TextInput
            placeholder="9801234567"
            style={
              styles.mobileNumberRegistrationContainer__mobileNumberInput__container__inputField
            }
          />
        </View>
      </View>

      {/* @section => note */}
      <Text style={styles.mobileNumberRegistrationContainer__noteText}>
        * By continuing you may receive an SMS for verification. Message and
        data rates may apply.
      </Text>

      {/* @section => next Button */}
      <TouchableOpacity style={styles.mobileNumberRegistrationContainer__nextBtn}>
        <Text>NEXT</Text>
      </TouchableOpacity>

      {/* @section => back button */}
      <TouchableOpacity>
        <FontAwesome5 name="chevron-left" size={20} color="black" />
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mobileNumberRegistrationContainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  // section => banner image
  mobileNumberRegistrationContainer__bannerImage: {
    width: 320,
    height: 320,
  },

  // section => mobile number input container
  mobileNumberRegistrationContainer__mobileNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: Dimensions.get("window").width * 0.75,
    paddingBottom: 15,
    marginBottom: 30
  },
  mobileNumberRegistrationContainer__mobileNumberInput__titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10
  },
  mobileNumberRegistrationContainer__mobileNumberInput__container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  mobileNumberRegistrationContainer__mobileNumberInput__container__imageThumb: {
    height: 22,
    width: 18,
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 15,
  },
  mobileNumberRegistrationContainer__mobileNumberInput__container__countryCode:
    {
      fontSize: 19,
      fontWeight: "600",
      marginRight: 15,
    },
    mobileNumberRegistrationContainer__mobileNumberInput__container__inputField: {
        fontSize: 19
    },

    // section => note text
    mobileNumberRegistrationContainer__noteText: {
        fontSize: 14,
        color: "#8c8c8c",
        width: Dimensions.get('window').width * 0.75,
    },

    // section => next button
    mobileNumberRegistrationContainer__nextBtn: {
        marginTop: 15
    }
});
