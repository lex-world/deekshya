import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";

import { Feather } from "@expo/vector-icons";
import PostCard from "../../Components/PostCard";
import Posts from '../../Helpers/Posts.json'
import Notifications from "../../Components/Notifications";
import Navbar from "../../Components/Navbar";

export default function Home() {
  return (
    <SafeAreaView style={styles.home__container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* section => topbar */}
        <View style={styles.home__container__topBar}>
          <Text style={styles.topBar__text}>Feeds</Text>
          <TouchableOpacity>
            <Feather name="settings" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* section => posts */}
        <View style={styles.home__container__posts}>
          {
              Posts.map(item => <PostCard key={item._id} item={item}/>)
          }
        </View>
      </ScrollView>

      <Notifications/>
      <Navbar/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  home__container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    minHeight: Dimensions.get("window").height,
    position: "relative",
    // flex: 1
  },

  // @section => topbar
  home__container__topBar: {
    marginTop: 25,
    paddingHorizontal: Dimensions.get("window").width * 0.06,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25
  },

  topBar__text: {
    fontSize: 28,
    fontWeight: "700",
  },

  // @section => posts
  home__container__posts: {
    paddingHorizontal: Dimensions.get("window").width * 0.06,
    marginBottom: 70
  },
});
