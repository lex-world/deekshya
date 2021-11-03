import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Navbar() {
  return (
    <View style={styles.navbar__container}>
      <TouchableOpacity style={styles.button__container}>
        <AntDesign name="home" size={21} color="black" />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button__container}>
        <Feather name="map-pin" size={21} color="black" />
        <Text>Explore</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button__container__middle}>
        <MaterialCommunityIcons name="blood-bag" size={23} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button__container}>
        <AntDesign name="search1" size={21} color="black" />
        <Text>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button__container}>
        <AntDesign name="user" size={21} color="black" />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar__container: {
    height: 100,
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    left: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    paddingBottom: 15
  },

  button__container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  button__container__middle: {
      backgroundColor: "#FF7675",
      padding: 20,
      borderRadius: 100
  }
});
