/**
 * @package yarn registry package
 * */
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
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

/**
 * @components custom main components
 */
import ReminderCard from "../Components/Home/ReminderCard";

/**
 * @helpers Custom helpers - dummy data
 */
import Reminders from "../Helpers/Reminders.json";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
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

      <Image style={styles.bannerImage} source={{
        uri: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
      }}/>

      {/** @section Reminders */}
      <View style={styles.reminders}>
        <Text style={styles.reminderTitle}>Reminders</Text>
        <View style={styles.reminderItems}>
          {Reminders.map((reminder, index) => {
            return <ReminderCard reminder={reminder} key={index} />;
          })}
        </View>
        <TouchableOpacity style={styles.remindersAllRemindersBtn}>
          <Text style={styles.remindersAllRemindersText}>All Reminders</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
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
    paddingBottom: 15
  },
  logo: {
    fontSize: 20,
    fontFamily: "Biryani-Bold",
  },
  heart: {
    marginRight: 15
  },
  topBarRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  bannerImage: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    height: Dimensions.get("window").height * 0.15,
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 20
  },

  /** @section reminders */
  reminders: {
    alignSelf: "center",
  },
  reminderTitle: {
    fontFamily: "Biryani-Bold",
    fontSize: 18,
    marginBottom: 10,
  },
  remindersAllRemindersBtn: {
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.85,
    borderRadius: 10,
    paddingVertical: 17,
    marginTop: 15,
    alignSelf: "center",
  },
  remindersAllRemindersText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Biryani-Bold",
  },
});
