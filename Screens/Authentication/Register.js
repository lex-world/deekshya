import React from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Register({navigation}) {
    return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <StatusBar barStyle="dark-content" animated={true} hidden={false} />
          <View style={{ marginTop: 50 }}>
            <Image
              style={styles.bannerImage}
              source={require("../../assets/images/register.png")}
            />
            <Text style={styles.welcomeText}>Let's get started</Text>
            {/** @dev phone number input  */}
            <Text style={styles.inputLabel}>Enter Phone Number</Text>
            <TextInput
              style={styles.inputField}
              placeholder="9849092326"
              placeholderTextColor="#9a9a9a"
            />
    
            {/** @dev password input  */}
            <Text style={styles.inputLabel}>Enter Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Must be a secret..."
              placeholderTextColor="#9a9a9a"
              secureTextEntry={true}
            />
            
            {/** @dev password input  */}
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <TextInput
              style={styles.inputField}
              placeholder="Must be a secret..."
              placeholderTextColor="#9a9a9a"
              secureTextEntry={true}
            />
    
            {/** @dev login button */}
            <TouchableOpacity style={styles.registerBtn}>
              <Text style={styles.registerBtnText}>Create Account</Text>
            </TouchableOpacity>
    
            {/** @dev create account */}
            <View style={styles.loginInstead}>
              <Text style={styles.loginInsteadText}>Are you a member?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text
                  style={{
                    ...styles.loginInsteadText,
                    marginLeft: 5,
                    fontWeight: "bold",
                    color: "#3498db",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      );
}

/** @dev styling */
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      flex: 1,
      alignItems: "center",
    },
    bannerImage: {
      width: Dimensions.get("window").width * 0.9,
      height: Dimensions.get("window").height * 0.25,
      resizeMode: "cover",
      borderRadius: 10,
      marginTop: 20,
    },
    welcomeText: {
      fontFamily: "Biryani-Bold",
      fontSize: 20,
      marginVertical: 20,
      textAlign: "center",
    },
    inputField: {
      height: 50,
      width: Dimensions.get("window").width * 0.8,
      alignSelf: "center",
      borderBottomColor: "#9a9a9a",
      borderBottomWidth: 0.5,
      fontSize: 17,
    },
    inputLabel: {
      marginLeft: Dimensions.get("window").width * 0.05,
      marginTop: 15,
      fontFamily: "Lato-Bold",
      fontSize: 18,
    },
    registerBtn: {
      width: Dimensions.get("window").width * 0.8,
      backgroundColor: "#000",
      alignSelf: "center",
      marginTop: 25,
      paddingVertical: 18,
      borderRadius: 10,
    },
    registerBtnText: {
      textAlign: "center",
      color: "#fff",
      fontFamily: "Biryani-Bold",
      fontSize: 15,
    },
    divider: {
      marginTop: 20,
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    loginInstead: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    loginInsteadText: {
      fontSize: 16,
      fontFamily: "Biryani-SemiBold",
    },
  });
  
