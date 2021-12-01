import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function PhoneRegistration() {
  return (
    <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: "#fff", }}>
      <View style={styles.container}>
        <Text numberOfLines={1} adjustsFontSizeToFit style={styles.titleText}>
          Deekshya
        </Text>

        <Image
          style={styles.bannerImage}
          source={require("../assets/images/otp.jpg")}
        />

        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={styles.phoneTitleText}
        >
          Phone Verification
        </Text>

        <Text adjustsFontSizeToFit style={styles.noteText}>
          We'll send you one-time password (OTP) to verify your phone number.
        </Text>

        <TextInput
          adjustsFontSizeToFit
          keyboardType="phone-pad"
          style={styles.mobileInput}
          placeholder="+9779849092326"
        />

        <TouchableOpacity style={styles.btn}>
          <Text numberOfLines={1} adjustsFontSizeToFit style={styles.btnText}>
            Get OTP
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={{marginRight: 15}}>
          <Text style={styles.footerTxt}>Terms & Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerTxt}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height * 0.83,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Biryani-Bold",
    alignSelf: "center",
    fontSize: 20,
  },
  bannerImage: {
    height: Dimensions.get("window").height * 0.37,
    width: Dimensions.get("window").width * 0.9,
    resizeMode: "contain",
    alignSelf: "center",
  },
  phoneTitleText: {
    fontFamily: "Biryani-Bold",
    alignSelf: "center",
    fontSize: 22,
  },
  noteText: {
    marginTop: 15,
    alignSelf: "center",
    marginHorizontal: 35,
    color: "#7a7a7a",
    fontFamily: "Biryani-Regular",
    fontSize: 15,
    textAlign: "center",
    lineHeight: 25,
  },
  phoneNumberText: {
    marginTop: 20,
    alignSelf: "center",
    fontFamily: "Biryani-SemiBold",
    fontSize: 16,
    color: "#9a9a9a",
  },
  mobileInput: {
    marginTop: 15,
    alignSelf: "center",
    marginHorizontal: 30,
    borderBottomColor: "#7a7a7a",
    borderBottomWidth: 0.5,
    width: "55%",
    fontSize: 23,
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    fontFamily: "Biryani-Bold",
  },
  btn: {
    marginHorizontal: Dimensions.get("window").width * 0.1,
    marginTop: 25,
    backgroundColor: "#000",
    borderRadius: 50,
    paddingVertical: 14,
    alignSelf: "center",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 50,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontFamily: "Biryani-Regular",
    fontSize: 15,
    marginTop: 5,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  footerTxt: {
    fontFamily: "Biryani-Regular",
    fontSize: 16,
    color: "#7a7a7a",
  }
});
