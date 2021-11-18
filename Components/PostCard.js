import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Ionicons, Feather, Fontisto, Foundation } from "@expo/vector-icons";

export default function PostCard(item) {
  const { username, created_at, user_image, content, media, user_full_name } =
    item.item;

  return (
    <View style={styles.postCard__container}>
      <View style={styles.postCard__container__topBar}>
        <View style={styles.postCard__container__userDetails}>
          <Image source={{ uri: user_image }} style={styles.userImage} />
          <View>
            <Text style={styles.username}>{user_full_name}</Text>
            <Text style={styles.uploadDate}>{created_at}</Text>
          </View>
        </View>

        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* section => post media */}
      {/* <Image source={{ uri: media }} style={styles.postMedia} /> */}

      {/* @section => post content */}
      <Text style={styles.postContent}>
        <Text style={{ fontWeight: "700" }}>{username}</Text> {content}
      </Text>

      <TouchableOpacity>
        <Text style={{color: "#aaa", marginTop: 10, fontSize: 15}}>View all 4K comments</Text>
      </TouchableOpacity>

      {/* @section => post interaction */}
      <View style={styles.postInteraction}>
        <TouchableOpacity style={styles.donate__btn}>
          <Foundation name="dollar" size={24} color="#f39c12" />
          <Text style={{ color: "#f39c12", fontWeight: "600", fontSize: 15 }}>
            {" "}
            Donate
          </Text>
        </TouchableOpacity>

        <View style={styles.postInteraction__interactions}>
          <TouchableOpacity style={styles.postInteraction__button}>
            <Ionicons name="md-heart-outline" size={22} color="#FF7675" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginLeft: 20, ...styles.postInteraction__button }}
          >
            <Fontisto name="comment" size={20} color="#2ecc71" />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginLeft: 20, ...styles.postInteraction__button }}
          >
            <Feather name="share" size={22} color="#3498db" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postCard__container: {
    paddingVertical: 22,
    borderTopWidth: 0.5,
    borderTopColor: "#aaa",
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
    height: 220,
    resizeMode: "cover",
    marginTop: 15,
    borderRadius: 10,
  },

  // @section => post content
  postContent: {
    marginTop: 15,
    lineHeight: 20,
    fontSize: 15,
  },

  postInteraction: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },

  donate__btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  postInteraction__interactions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  postInteraction__button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
