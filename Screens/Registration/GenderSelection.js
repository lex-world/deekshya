import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

/** @dev main component */
export default function GenderSelection({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" animated={true} hidden={false} />
      <TouchableOpacity style={styles.backBtn}>
        <Text>
          <Entypo name="chevron-left" size={30} color="black" />
        </Text>
      </TouchableOpacity>

      <Text style={styles.logo}>deekshya</Text>

      <Text style={styles.pagination}>STEP 1/2</Text>

      <Text style={styles.title}>Which one are you?</Text>

      <View style={styles.genderContainer}>
        <TouchableOpacity style={styles.maleContainer}>
          <Image
            style={styles.iconImage}
            source={require("../../assets/images/male-icon.png")}
          />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.femaleContainer}>
          <Image
            style={styles.iconImage}
            source={require("../../assets/images/female-icon.png")}
          />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.tagline}>
        To give you a customize experience{"\n"}we need to know your gender
      </Text>

      <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate("Name Registration")}>
        <Text style={styles.continueBtnText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.preferNotToChoose} onPress={() => navigation.navigate("Name Registration")}>
        <Text style={styles.notToChooseText}>Prefer not to choose</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

/**
 * @dev styling
 */
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
  },
  backBtn: {
    marginLeft: Dimensions.get("window").width * 0.05,
  },
  logo: {
    textAlign: "center",
    fontFamily: "Biryani-ExtraBold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 25,
  },
  pagination: {
    textAlign: "center",
    fontFamily: "Biryani-Bold",
    color: "#2ecc71",
    marginBottom: 30,
  },
  title: {
    textAlign: "center",
    fontFamily: "Biryani-Bold",
    fontSize: 20,
    marginBottom: 20,
  },
  genderContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  maleContainer: {
    backgroundColor: "#a29cff",
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
  },
  femaleContainer: {
    backgroundColor: "#ffb1d4",
    borderRadius: 10,
    padding: 15,
  },
  genderText: {
    fontFamily: "Biryani-Bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    color: "#fff",
  },
  iconImage: {
    width: Dimensions.get("window").width * 0.25,
    height: Dimensions.get("window").width * 0.25,
    resizeMode: "contain",
  },
  tagline: {
    textAlign: "center",
    marginTop: 35,
    fontFamily: "Biryani-SemiBold",
    lineHeight: 25,
    fontSize: 16,
    color: "#6a6a6a",
  },
  continueBtn: {
    width: Dimensions.get("window").width * 0.7,
    backgroundColor: "#2ecc71",
    paddingVertical: 15,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 35,
  },
  continueBtnText: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Biryani-Bold",
    fontSize: 15
  },
  preferNotToChoose: {
    alignSelf: "center",
    marginTop: 30,
  },
  notToChooseText: {
    fontFamily: "Biryani-Bold",
    fontSize: 16,
    color: "#5a5a5a",
  },
});
