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
  View,
} from "react-native";

// @packages
import DateTimePicker from "@react-native-community/datetimepicker";
import { Entypo } from "@expo/vector-icons";

export default function UserKYC() {
  const [date, setDate] = React.useState(new Date());

  const onChange = (selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.UserKYC__container}>
      {/* @section => user image preview */}
      <Image
        style={styles.userImage__preview}
        source={require("../../assets/images/deekshya.jpg")}
      />
      <TouchableOpacity>
        <Text style={styles.editImage__text}>Edit photo 📸</Text>
      </TouchableOpacity>

      {/* @section => kyc form */}
      <View style={styles.kycForm}>
        <Text>Full Name</Text>
        <TextInput placeholder="Deekshya Shahi" />

        <Text>Date of Birth</Text>
        <DateTimePicker
          mode="date"
          value={date}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />

        <Text>Gender</Text>
        <View>
          <TouchableOpacity>
            <Entypo name="circle" size={24} color="black" />
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="circle" size={24} color="black" />
            <Text>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="circle" size={24} color="black" />
            <Text>Prefer not to say</Text>
          </TouchableOpacity>
        </View>

        <Text>Blood Group</Text>
        <TextInput placeholder="B Positive" />
      </View>

      <TouchableOpacity>
        <Text>NEXT</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  UserKYC__container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
    height: Dimensions.get("window").height,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    width: Dimensions.get("window").width * 0.75,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
