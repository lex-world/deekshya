import React from "react";
import {
  Dimensions,
  Image,
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

export default function MobileNumberRegistration({ navigation }) {
  /**
   * * @dev No event is required just place setPhoneNumber on input to handlechange
   * TODO: Set number to store using dispatch will be used on next screen
   */
  const [phoneNumber, setPhoneNumber] = React.useState("");

  /**
   * * @dev phone number verfication 3rd party can be used
   */
  const handlePhoneNumberVerification = () => {
    navigation.navigate('Phone Number Verification')
  };

  return (
    <SafeAreaView style={styles.mobileNumberRegistrationContainer}>
      {/* @section => banner image */}
      <Image
        style={styles.bannerImage}
        source={require("../../assets/images/phoneVerification.png")}
      />

      {/* @section => input field */}
      <View style={styles.mobileNumberInput}>
        <Text style={styles.mobileNumberInput__titleText}>
          Enter your mobile number
        </Text>
        <View style={styles.mobileNumberInput__container}>
          <Image
            style={styles.mobileNumberInput__container__imageThumb}
            source={require("../../assets/images/nepalFlag.png")}
          />
          <Text style={styles.mobileNumberInput__container__countryCode}>
            +977
          </Text>

          <TextInput
            placeholder="9801234567"
            style={styles.mobileNumberInput__container__inputField}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </View>

      {/* @section => note */}
      <Text style={styles.noteText}>
        * By continuing you may receive an SMS for verification. Message and
        data rates may apply.
      </Text>

      {/* @section => next Button */}
      <TouchableOpacity style={styles.nextBtn} onPress={handlePhoneNumberVerification}>
        <Text style={styles.nextBtn__text}>NEXT</Text>
      </TouchableOpacity>

      {/* @section => back button */}
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome5 name="chevron-left" size={20} color="black" />
        <Text style={styles.goBackBtn__text}>Go Back</Text>
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
    flex: 1
  },

  // section => banner image
  bannerImage: {
    width: 320,
    height: 320,
  },

  // section => mobile number input container
  mobileNumberInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    width: Dimensions.get("window").width * 0.75,
    paddingBottom: 15,
    marginBottom: 30,
  },
  mobileNumberInput__titleText: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  mobileNumberInput__container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  mobileNumberInput__container__imageThumb: {
    height: 22,
    width: 18,
    resizeMode: "contain",
    marginLeft: 10,
    marginRight: 15,
  },
  mobileNumberInput__container__countryCode: {
    fontSize: 19,
    fontWeight: "600",
    marginRight: 15,
  },
  mobileNumberInput__container__inputField: {
    fontSize: 19,
  },

  // section => note text
  noteText: {
    fontSize: 14,
    color: "#8c8c8c",
    width: Dimensions.get("window").width * 0.75,
  },

  // section => next button
  nextBtn: {
    marginTop: 15,
    backgroundColor: "#2ecc71",
    width: Dimensions.get("window").width * 0.75,
    alignItems: "center",
    paddingVertical: 18,
    borderRadius: 10,
    marginBottom: 30,
  },

  nextBtn__text: {
    color: "#fff",
    fontWeight: "600",
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
