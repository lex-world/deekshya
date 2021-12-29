import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ReminderCard({ reminder }) {
  const { type, title, date } = reminder;
  return (
    <TouchableOpacity style={styles.reminderCard}>
      <Text style={styles.reminderType}>
        {type === "appointment"
          ? "A"
          : type === "medicine"
          ? "M"
          : type === "donation"
          ? "D"
          : "P"}
      </Text>
      <View>
        <Text numberOfLines={2} style={styles.titleText}>
          {title}
        </Text>
        <Text style={styles.date}>{type === "medicine" ? reminder.endDate : date}</Text>
        <View style={styles.dailyTime}>
          {type === "medicine" &&
            reminder.time.map((time, index) => {
              return <Text style={styles.time} key={index}>{time},</Text>;
            })}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  reminderCard: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    maxWidth: Dimensions.get("window").width * 0.85,
    width: Dimensions.get("window").width * 0.85,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  reminderType: {
    backgroundColor: "#74b9ff",
    width: 47,
    height: 47,
    paddingTop: 5,
    color: "#fff",
    marginRight: 15,
    fontFamily: "Biryani-SemiBold",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 25,
  },
  titleText: {
    fontFamily: "Biryani-SemiBold",
    maxWidth: Dimensions.get("window").width * 0.55,
  },
  date: {
    fontFamily: "Biryani-Regular",
    color: "#6a6a6a"
  },
  dailyTime: {
      display: "flex",
      flexDirection: "row",
      marginTop: 3
  },
  time: {
      marginRight: 5,
      fontFamily: "Biryani-SemiBold",
      color: "#5a5a5a"
  }
});
