import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

// @packages
import { Entypo } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function UserKYC({ navigation }) {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  return (
    <SafeAreaView style={styles.UserKYC__container}>
      {/* @section => user image preview */}
      <Image
        style={styles.userImage__preview}
        source={require("../../assets/images/deekshya.jpg")}
      />
      {/* *
       * TODO: This should give option for either upload or capture image
       */}
      <TouchableOpacity>
        <Text style={styles.editImage__text}>Edit photo 📸</Text>
      </TouchableOpacity>

      {/* @section => kyc form */}
      <View style={styles.kycForm}>
        <Text style={styles.title}>Full Name</Text>
        <TextInput placeholder="Deekshya Shahi" style={styles.inputContainer} />

        <Text style={styles.title}>Date of Birth</Text>
        <View
          style={{
            backgroundColor: "#efeff0",
            borderRadius: 10,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={showDatePicker} style={styles.inputContainer}>
            <Text>2003/07/05</Text>
          </TouchableOpacity>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>

        <Text style={styles.title}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity style={styles.genderContainer__genderItem}>
            <Entypo name="circle" size={24} color="black" />
            <Text style={styles.genderContainer__genderItem__text}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderContainer__genderItem}>
            <Entypo name="circle" size={24} color="black" />
            <Text style={styles.genderContainer__genderItem__text}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderContainer__genderItem}>
            <Entypo name="circle" size={24} color="black" />
            <Text style={styles.genderContainer__genderItem__text}>
              Prefer not to say
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Blood Group</Text>
        <TextInput placeholder="B Positive" style={styles.inputContainer} />
      </View>

      <TouchableOpacity
        style={styles.nextBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.nextBtn__text}>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UserKYC__container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 10,
  },

  // @section => user image preview
  userImage__preview: {
    width: 139,
    height: 139,
    resizeMode: "cover",
    borderRadius: 100,
  },

  editImage__text: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 15,
  },

  // @section => kyc form
  kycForm: {
    width: Dimensions.get("window").width * 0.80,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  inputContainer: {
    backgroundColor: "#efeff0",
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },

  genderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  genderContainer__genderItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  genderContainer__genderItem__text: {
    fontSize: 14,
    marginLeft: 3,
  },

  // section => nexct btn
  nextBtn: {
    backgroundColor: "#2ecc71",
    width: Dimensions.get("window").width * 0.80,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 25,
  },
  nextBtn__text: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
