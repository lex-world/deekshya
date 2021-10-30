import React from "react";
import { StatusBar } from "expo-status-bar";

// @packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelection from "./Pages/UnAuthenticatedUserStack/LanguageSelection";
import MobileNumberRegistration from "./Pages/UnAuthenticatedUserStack/MobileNumberRegistration";

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
          
          {/* @Screen => Phone Number Verification */}
          <UnAuthenticatedUserStack.Screen
            name="Phone Number Verification"
            component={MobileNumberRegistration}
          />
        </UnAuthenticatedUserStack.Navigator>
      </NavigationContainer>
  );
}