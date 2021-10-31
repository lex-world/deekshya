import React from "react";
import { StatusBar } from "expo-status-bar";

// @packages
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// @pages
import LanguageSelection from "./Screens/UnAuthenticatedUserStack/LanguageSelection";
import MobileNumberRegistration from "./Screens/UnAuthenticatedUserStack/MobileNumberRegistration";
import PhoneVerification from "./Screens/UnAuthenticatedUserStack/PhoneVerification";
import Greeting from "./Screens/UnAuthenticatedUserStack/Greeting";
import UserKYC from "./Screens/UnAuthenticatedUserStack/UserKYC";

/**
 * * @dev Unauthenticated User Stack
 */
const UnAuthenticatedUserStack = createNativeStackNavigator();

/**
 * * @dev Authenticated User Stack
 * TODO: Apply stack on the basis if user is authenticated or not
 * ! Uncomment AuthenticatedUserStack
 */
// const AuthenticatedUserStack = createNativeStackNavigator();

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
          
          {/* @Screen => User KYC */}
          <UnAuthenticatedUserStack.Screen
            name="User KYC"
            component={UserKYC}
          />
        </UnAuthenticatedUserStack.Navigator>
      </NavigationContainer>
  );
}