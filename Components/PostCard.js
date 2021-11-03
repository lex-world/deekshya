import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function PostCard(item) {
  const { username, created_at, user_image, content, media } = item.item;

  return (
    <View style={styles.postCard__container}>
      <View style={styles.postCard__container__topBar}>
        <View style={styles.postCard__container__userDetails}>
          <Image source={{ uri: user_image }} style={styles.userImage} />
          <View>
            <Text style={styles.username}>{username}</Text>
            <Text style={styles.uploadDate}>{created_at}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* section => post media */}
      <Image source={{ uri: media }} style={styles.postMedia} />

      {/* @section => post content */}
      <Text style={styles.postContent}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  postCard__container: {
    marginBottom: 33,
    paddingHorizontal: 15,
    paddingVertical: 22,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#3a3a3a",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  postCard__container__topBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  postCard__container__userDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  userImage: {
    width: 35,
    height: 35,
    borderRadius: 100,
    marginRight: 10,
  },

  username: {
    fontSize: 15,
    fontWeight: "600",
  },

  uploadDate: {
    color: "#aaa",
  },

  // @section => post media
  postMedia: {
    width: "100%",
    height: 93,
    resizeMode: "cover",
    marginTop: 15,
    borderRadius: 10,
  },

  // @section => post content
  postContent: {
    marginTop: 15,
    lineHeight: 20,
  },
});
