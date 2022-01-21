import {
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import ViewSlider from "react-native-view-slider";

/**
 * @components custom main components
 */
import ReminderCard from "./ReminderCard";

/**
 * @helpers Custom helpers - dummy data
 */
import Reminders from "../../Helpers/Reminders.json";

const { width , height} = Dimensions.get("window");

export default function ActiveHome() {
  return (
    <View style={styles.container}>
      <View style={styles.bloodShortcuts}>
        <TouchableOpacity style={styles.bloodShortcuts__btn}>
          <Image
            style={styles.bloodShortcuts__img}
            source={{
              uri: "https://images.unsplash.com/photo-1553272725-086100aecf5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
            }}
          />
          <Text style={styles.bloodShortcuts__txt}>Request Blood</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bloodShortcuts__btn}>
          <Image
            style={styles.bloodShortcuts__img}
            source={{
              uri: "https://images.unsplash.com/photo-1642770185763-0d8e863128e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
            }}
          />
          <Text style={styles.bloodShortcuts__txt}>Donation Events</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bloodShortcuts__btn}>
          <Image
            style={styles.bloodShortcuts__img}
            source={{
              uri: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
            }}
          />
          <Text style={styles.bloodShortcuts__txt}>Blood Banks</Text>
        </TouchableOpacity>
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

      <View style={styles.sliders}>
        <ViewSlider
          renderSlides={
            <>
              <View style={styles.viewBox}>
                <Image
                  style={styles.bannerImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
                  }}
                />
              </View>
              <View style={styles.viewBox}>
                <Image
                  style={styles.bannerImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
                  }}
                />
              </View>
              <View style={styles.viewBox}>
                <Image
                  style={styles.bannerImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
                  }}
                />
              </View>
              <View style={styles.viewBox}>
                <Image
                  style={styles.bannerImage}
                  source={{
                    uri: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
                  }}
                />
              </View>
            </>
          }
          style={styles.slider} //Main slider container style
          height={200} //Height of your slider
          slideCount={4} //How many views you are adding to slide
          dots={true} // Pagination dots visibility true for visibile
          dotActiveColor="#2ecc71" //Pagination dot active color
          dotInactiveColor="#dedede" // Pagination do inactive color
          dotsContainerStyle={styles.dotContainer}
          autoSlide={false} //The views will slide automatically
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 60 },

  bloodShortcuts: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: Dimensions.get("window").height * 0.03,
    marginHorizontal: Dimensions.get("window").width * 0.05,
    borderBottomColor: "#dedede",
    borderBottomWidth: 1,
  },

  bloodShortcuts__btn: {
    display: "flex",
    alignItems: "center",
  },

  bloodShortcuts__txt: {
    fontFamily: "Biryani-SemiBold",
  },

  bloodShortcuts__img: {
    width: Dimensions.get("window").width * 0.23,
    marginBottom: Dimensions.get("window").height * 0.01,
    height: Dimensions.get("window").height * 0.08,
    resizeMode: "cover",
    borderRadius: 10,
  },

  bannerImage: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "cover",
    borderRadius: 10,
    marginVertical: 20,
    marginTop: 25,
  },

  /** @section reminders */
  reminders: {
    alignSelf: "center",
    marginTop: 25,
    marginHorizontal: Dimensions.get("window").width * 0.05,
  },

  reminderTitle: {
    fontFamily: "Biryani-Bold",
    fontSize: 18,
    marginBottom: 5,
  },
  remindersAllRemindersBtn: {
    backgroundColor: "#000",
    width: Dimensions.get("window").width * 0.85,
    borderRadius: 10,
    paddingVertical: 17,
    marginTop: 8,
    alignSelf: "center",
  },
  remindersAllRemindersText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Biryani-SemiBold",
  },

  sliders: {
    marginVertical: 20,
  },

  viewBox: {
    paddingHorizontal: 25,
    justifyContent: "center",
    width: width,
    paddingVertical: 10,
    alignItems: "center",
    height: 180
  },

  slider: {
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  dotContainer: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: height * 0.025,
  },
});
