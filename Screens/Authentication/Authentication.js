import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

/** @dev view components */
export default function Authentication({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" animated={true} hidden={false} />
        <Text style={styles.logo}>deekshya</Text>
        <Image
          style={styles.image}
          source={require("../../assets/images/doctor.png")}
        />
        <Text style={styles.tagline}>
          share & save lives{"\n"} together with us.
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpBtn} onPress={() => navigation.navigate("Register")}>
          <Text style={styles.signUpBtnText}>Sign Up</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

/** @dev styling */
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontFamily: "Biryani-ExtraBold",
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    height: Dimensions.get("window").height * 0.48,
    resizeMode: "contain",
  },
  tagline: {
    fontFamily: "Biryani-Bold",
    fontSize: 20,
    textAlign: "center",
    lineHeight: 35,
    marginTop: 20,
    marginBottom: 5
  },
  btn: {
    width: Dimensions.get("window").width * 0.8,
    borderWidth: 1,
    borderColor: "#7a7a7a",
    borderRadius: 15,
    paddingVertical: 16,
    textAlign: "center",
    marginTop: 20
  },
  btnText: {
      textAlign: "center",
      fontFamily: "Lato-Bold",
      fontSize: 18
  },
  signUpBtnText: {
      textAlign: "center",
      fontFamily: "Lato-Bold",
      fontSize: 18,
      color: "#fff"
  },
  signUpBtn: {
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "#000",
    borderRadius: 15,
    paddingVertical: 19,
    textAlign: "center",
    marginTop: 20
  }
});
