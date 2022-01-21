/**
 * @package yarn registry package
 * */
import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

/**
 * @helpers Custom helpers - dummy data
 */
import Navbar from "../Components/Navbar/Navbar";

import ActiveHome from "../Components/Home/ActiveHome";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar />
        {/** @section topbar */}
        <View style={styles.topBar}>
          <View style={styles.topBarLeft}>
            <Text style={styles.logo}>Deekshya</Text>
          </View>
          <View style={styles.topBarRight}>
            <TouchableOpacity style={styles.heart}>
              <FontAwesome name="heart-o" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="message1" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>

      <ScrollView>
      <ActiveHome/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    position: "relative",
  },
  /** @section topbar */
  topBar: {
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: Dimensions.get("window").width * 0.05,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
    paddingBottom: 15,
  },
  logo: {
    fontSize: 20,
    fontFamily: "Biryani-Bold",
  },
  heart: {
    marginRight: 15,
  },
  topBarRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

});
