import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function Notifications() {
  return (
    <TouchableOpacity style={styles.notification__container}>
      <Ionicons name="notifications-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  notification__container: {
    backgroundColor: "#fff",
    shadowColor: "#3a3a3a",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: 60,
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    position: 'absolute',
    bottom: 110,
    right: Dimensions.get('window').width * 0.05
  },
});
