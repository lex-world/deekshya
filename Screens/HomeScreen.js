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
    <View>
      {/** @section topbar */}
      <View style={styles.topBar}>
        <View style={styles.topBarUserInfo}>
          <TouchableOpacity>
            <Image
              style={styles.topBarUserImage}
              source={require("../assets/images/female-icon.png")}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.topBarUsername}>Hi, Deekshya!</Text>
            {/* <Text style={styles.topBarDate}>05 July, 2003</Text> */}
          </View>
        </View>

        <TouchableOpacity>
          <Feather name="bell" size={26} color="white" />
        </TouchableOpacity>

        {/** @dev absolute bar */}
        <View style={styles.floatingBar}>
          <View>
            <Text style={styles.followCount}>208</Text>
            <Text style={styles.followText}>Followers</Text>
          </View>
          <View>
            <Text style={styles.followCount}>2k</Text>
            <Text style={styles.followText}>Contributions</Text>
          </View>
          <View>
            <Text style={styles.followCount}>193</Text>
            <Text style={styles.followText}>Following</Text>
          </View>
        </View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  /** @section topbar */
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: Dimensions.get("window").width * 0.06,
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: "#2f3640",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "relative",
  },
  topBarUserInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  topBarUserImage: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    borderRadius: 200,
    marginRight: 10,
    borderWidth: 3,
    borderColor: "#fff",
  },
  topBarUsername: {
    fontSize: 22,
    fontFamily: "Biryani-Bold",
    color: "#fff",
  },
  topBarDate: {
    fontSize: 18,
    fontFamily: "Biryani-SemiBold",
    color: "#ecf0f1",
  },
  floatingBar: {
    position: "absolute",
    bottom: -50,
    backgroundColor: "#fff",
    paddingVertical: 20,
    width: Dimensions.get("window").width * 0.8,
    left: Dimensions.get("window").width * 0.1,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  followCount: {
    fontSize: 18,
    fontFamily: "Biryani-Bold",
    textAlign: "center",
  },
  followText: {
    fontSize: 14,
    fontFamily: "Biryani-Regular",
    textAlign: "center",
  },
  /** @section reminders */
  reminders: {
    marginTop: 80,
    alignSelf: "center"
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
      alignSelf: "center"
  },
  remindersAllRemindersText: {
      color: "#fff",
      textAlign: "center",
      fontFamily: "Biryani-Bold",
  }
});
