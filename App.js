import React from "react";
import { StatusBar } from "expo-status-bar";

// @packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelection from "./Pages/UnAuthenticatedUserStack/LanguageSelection";
import MobileNumberRegistration from "./Pages/UnAuthenticatedUserStack/MobileNumberRegistration";
import PhoneVerification from "./Pages/UnAuthenticatedUserStack/PhoneVerification";
import Greeting from "./Pages/UnAuthenticatedUserStack/Greeting";

const UnAuthenticatedUserStack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <UnAuthenticatedUserStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {/* @Screen => Language Selection */}
          <UnAuthenticatedUserStack.Screen
            name="Language Selection"
            component={LanguageSelection}
          />
          
          {/* @Screen => Phone Number Registration */}
          <UnAuthenticatedUserStack.Screen
            name="Phone Number Registration"
            component={MobileNumberRegistration}
          />
          
          {/* @Screen => Phone Number Verification */}
          <UnAuthenticatedUserStack.Screen
            name="Phone Number Verification"
            component={PhoneVerification}
          />
          
          {/* @Screen => Greeting */}
          <UnAuthenticatedUserStack.Screen
            name="Greeting"
            component={Greeting}
          />
        </UnAuthenticatedUserStack.Navigator>
      </NavigationContainer>
  );
}