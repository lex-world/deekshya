import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";

import { Ionicons, Entypo } from "@expo/vector-icons";

export default function FeedFocused() {
  return (
    <SafeAreaView style={styles.feedFocused__container}>
      {/** @section => topbar */}
      <View style={styles.feedFocused__topbar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.feedFocused__topbar__text}>Deekshya</Text>
      </View>

      {/** @section => user info */}
      <View style={styles.feedFocused__userInfo}>
        <View style={styles.feedFocused__userInfo__userdetails}>
          <Image
            style={styles.feedFocused__userInfo__image}
            source={require("../../assets/images/deekshya.jpg")}
          />
          <View>
            <Text style={styles.feedFocused__userInfo__fullName}>
              Himitsu Fushigi
            </Text>
            <Text style={styles.feedFocused__userInfo__username}>
              @himitsu.fushigi
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={20} color="#8e8e93" />
        </TouchableOpacity>
      </View>

      {/** @section => feed content*/}
      <View style={styles.feedFocused__content}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </View>
    </SafeAreaView>
  );
}

/** @styles */
const styles = StyleSheet.create({
  feedFocused__container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
  },
  feedFocused__topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    paddingTop: 20,
  },
  feedFocused__topbar__text: {
    fontWeight: "700",
    fontSize: 19,
  },
  feedFocused__userInfo: {
    marginTop: 20,
    paddingHorizontal: Dimensions.get("window").width * 0.05,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  feedFocused__userInfo__image: {
    width: Dimensions.get("window").width * 0.13,
    height: Dimensions.get("window").width * 0.13,
    resizeMode: "cover",
    borderRadius: 100,
    marginRight: 10,
  },
  feedFocused__userInfo__userdetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  feedFocused__userInfo__fullName: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 3,
  },
  feedFocused__userInfo__username: {
    color: "#8e8e93",
    fontSize: 15,
  },
});
