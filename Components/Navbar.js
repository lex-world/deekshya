import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/** @packages */
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

/** @cont3xt api */
import { useActiveTabDataLayerValue } from "../Context/ActiveTabs/ActiveTab";

export default function Navbar({ navigation }) {
  const [{ active }, dispatch] = useActiveTabDataLayerValue();

  /**
   *
   * @param {*} active => tab name
   */
  const handleTabDispatch = (active) => {
    dispatch({
      type: "SET_ACTIVE_TAB",
      activeBar: active,
    });

    /**
     * @dev after successful dispatch redirect page accordingly
     */
    // navigation.navigate('')
  };

  /**
   * @dev on each tab inline styling is done using ternery operator
   */
  return (
    <View style={styles.navbar__container}>
      <TouchableOpacity
        style={styles.button__container}
        onPress={() => handleTabDispatch("home")}
      >
        <AntDesign
          name="home"
          size={21}
          color={active === "home" ? "#FF7675" : "#000"}
        />
        <Text style={{ color: active === "home" ? "#FF7675" : "#000" }}>
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button__container}
        onPress={() => handleTabDispatch("explore")}
      >
        <Feather
          name="map-pin"
          size={21}
          color={active === "explore" ? "#FF7675" : "#000"}
        />
        <Text style={{ color: active === "explore" ? "#FF7675" : "#000" }}>
          Explore
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button__container__middle}
        onPress={() => handleTabDispatch("request")}
      >
        <MaterialCommunityIcons name="blood-bag" size={23} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button__container}
        onPress={() => handleTabDispatch("search")}
      >
        <AntDesign
          name="search1"
          size={21}
          color={active === "search" ? "#FF7675" : "#000"}
        />
        <Text style={{ color: active === "search" ? "#FF7675" : "#000" }}>
          Search
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button__container}
        onPress={() => handleTabDispatch("profile")}
      >
        <AntDesign
          name="user"
          size={21}
          color={active === "profile" ? "#FF7675" : "#000"}
        />
        <Text style={{ color: active === "profile" ? "#FF7675" : "#000" }}>
          Profile
        </Text>
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
    paddingBottom: 15,
  },

  button__container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  button__container__middle: {
    backgroundColor: "#FF7675",
    padding: 20,
    borderRadius: 100,
  },
});
