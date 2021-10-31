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
  View,
} from "react-native";

export default function UserKYC() {
  return (
    <SafeAreaView style={styles.UserKYC__container}>
      {/* @section => user image preview */}
      <Image
        style={styles.userImage__preview}
        source={require("../../assets/images/deekshya.jpg")}
      />
      <TouchableOpacity>
        <Text style={styles.editImage__text}>Edit photo 📸</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UserKYC__container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  // @section => user image preview
  userImage__preview: {
    width: 139,
    height: 139,
    resizeMode: "cover",
    borderRadius: 100,
  },

  editImage__text: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
  },
});
