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
import Home from "./Screens/AuthenticaterdUserStack/Home";

/**
 * * @dev Unauthenticated User Stack
 */
const UserFlowStack = createNativeStackNavigator();

/** @cont3xt api */
import { useActiveSidebarDataLayerValue } from "./Context/User";
import { View } from "react-native";

export default function Layout() {
  const [{ authenticated }] = useActiveSidebarDataLayerValue();
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/* section => Unauthenticated User stack */}
      <UserFlowStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* @dev if user is not authenticated */}
        {!authenticated && (
          <React.Fragment>
            {/* @Screen => Language Selection */}
            <UserFlowStack.Screen
              name="Language Selection"
              component={LanguageSelection}
            />

            {/* @Screen => Phone Number Registration */}
            <UserFlowStack.Screen
              name="Phone Number Registration"
              component={MobileNumberRegistration}
            />

            {/* @Screen => Phone Number Verification */}
            <UserFlowStack.Screen
              name="Phone Number Verification"
              component={PhoneVerification}
            />

            {/* @Screen => Greeting */}
            <UserFlowStack.Screen name="Greeting" component={Greeting} />

            {/* @Screen => User KYC */}
            <UserFlowStack.Screen name="User KYC" component={UserKYC} />
          </React.Fragment>
        )}

        {/* @dev if user is authenticated */}
        <UserFlowStack.Screen name="Home" component={Home} />
      </UserFlowStack.Navigator>
    </NavigationContainer>
  );
}
