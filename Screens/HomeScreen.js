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
import { Feather } from "@expo/vector-icons";

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
          <Text>Deekshya</Text>
        </View>
        <View style={styles.topBarRight}></View>
      </View>

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
  topBar: {},

  /** @section reminders */
  reminders: {
    marginTop: 80,
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
