import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function Greeting() {
  return (
    <SafeAreaView style={styles.greeting__container}>
      <Image
        style={styles.bannerImage}
        source={require("../../assets/images/greeting.jpg")}
      />
      <Text style={styles.title}>Almost There ❤️</Text>
      <Text style={styles.content__text}>
        We can’t wait to share good things.
      </Text>
      <TouchableOpacity style={styles.nextBtn}>
        <Text style={styles.nextBtn__text}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  greeting__container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  bannerImage: {
    width: 312,
    height: 230,
    resizeMode: 'contain',
    marginBottom: 10
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 5
  },

  content__text: {
    color: "#8c8c8c",
    fontSize: 16,
    marginBottom: 20
  },

  nextBtn: {
      backgroundColor: "#2ECC71",
      width: Dimensions.get('window').width * 0.75,
      alignItems: 'center',
      paddingVertical: 18,
      borderRadius: 10
  },
   nextBtn__text: {
       color: "#fff"
   }
});
