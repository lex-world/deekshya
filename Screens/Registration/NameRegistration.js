/** @package yarn registry package */
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
  TextInput,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

export default function NameRegistration({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" animated={true} hidden={false} />
      <View>
        <TouchableOpacity style={styles.backBtn}>
          <Text>
            <Entypo name="chevron-left" size={30} color="black" />
          </Text>
        </TouchableOpacity>

        <Text style={styles.logo}>deekshya</Text>

        <Text style={styles.pagination}>STEP 2/2</Text>

        <Text style={styles.title}>What's your Good Name?</Text>

        <TextInput
          placeholderTextColor="#7a7a7a"
          placeholder="Deekshya Shahi"
          style={styles.nameInput}
        />

        <Text style={styles.tagline}>
        * We know sign up's are boring so we minimized{"\n"} everything for you.
          You can add details later.
        </Text>
      </View>

      <View>
        <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.continueBtnText}>Continue</Text>
        </TouchableOpacity>
        <Text style={styles.privacyText}>
          We promise you that your credentials will{"\n"} be safe with us.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
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
  nameInput: {
    alignSelf: "center",
    width: Dimensions.get("window").width * 0.8,
    borderColor: "#dedede",
    borderWidth: 1,
    fontSize: 18,
    fontFamily: "Biryani-Regular",
    padding: 10,
    paddingTop: 13,
    borderRadius: 10
  },
  tagline: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: "Biryani-Regular",
    lineHeight: 25,
    fontSize: 15,
    color: "#6a6a6a",
  },
  continueBtn: {
    width: Dimensions.get("window").width * 0.8,
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
    fontSize: 15,
  },
  privacyText: {
    textAlign: "center",
    marginVertical: 20,
    fontFamily: "Biryani-SemiBold",
    color: "#6a6a6a",
  },
});
