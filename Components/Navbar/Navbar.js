import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import { useHomeScreenContextDataValue } from "../../Context/HomeScreenContext";

export default function Navbar() {
  const [{ activeTab }, dispatch] = useHomeScreenContextDataValue();

  const handleTabChange = (e) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: e });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleTabChange("home")}
      >
        <AntDesign
          name="hearto"
          size={24}
          color={activeTab === "home" ? "#2ecc71" : "black"}
        />
        <Text style={{ color: activeTab === "home" ? "#2ecc71": "#000" }}>
          Summary
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleTabChange("browse")}
      >
        <AntDesign
          name="appstore-o"
          size={24}
          color={activeTab === "browse" ? "#2ecc71" : "black"}
        />
        <Text style={{ color: activeTab === "browse" ? "#2ecc71": "#000" }}>
          Browse
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => handleTabChange("personal")}
      >
        <Ionicons
          name="person-circle-outline"
          size={24}
          color={activeTab === "personal" ? "#2ecc71" : "black"}
        />
        <Text style={{ color: activeTab === "personal" ? "#2ecc71": "#000" }}>
          Personal
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "#f5f5f5",
    width: Dimensions.get("window").width,
    paddingBottom: Dimensions.get("window").height * 0.035,
    paddingTop: Dimensions.get("window").height * 0.02,
    display: "flex",
    zIndex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
