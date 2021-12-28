import React from "react";
import {
  Dimensions,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Welcome({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" animated={true} hidden={false} />
      <Text style={styles.logo}>deekshya</Text>

      <Text style={styles.tagline}>
        Welcome, now you're already{"\n"} part of a global change
      </Text>

      <Text style={styles.taglineText}>
        Many lives has been saved & shared through us till date, now you can do
        the same & do something better for global good.
      </Text>

      <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate("Gender Selection")}>
        <Text style={styles.BtnText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: Dimensions.get("window").width * 0.8,
    resizeMode: "contain",
  },
  logo: {
    fontFamily: "Biryani-ExtraBold",
    fontSize: 20,
  },
  tagline: {
    fontFamily: "Biryani-Bold",
    fontSize: 22,
    textAlign: "center",
    lineHeight: 32,
    marginTop: Dimensions.get("window").height * 0.1,
    marginBottom: 15,
  },
  taglineText: {
    fontFamily: "Lato-Regular",
    fontSize: 17,
    marginBottom: Dimensions.get("window").height * 0.1,
    paddingHorizontal: Dimensions.get("window").width * 0.1,
    textAlign: "center",
    color: "#6a6a6a",
    lineHeight: 25
  },
  BtnText: {
    textAlign: "center",
    fontFamily: "Lato-Bold",
    fontSize: 18,
    color: "#fff",
  },
  Btn: {
    width: Dimensions.get("window").width * 0.8,
    backgroundColor: "#000",
    borderRadius: 15,
    paddingVertical: 19,
    textAlign: "center",
    marginTop: 20,
  },
});
