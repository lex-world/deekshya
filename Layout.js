import React from "react";
import { StatusBar } from "expo-status-bar";

/**
 * @packages
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * @pages
 */

/**
 * * @dev Unauthenticated User Stack
 */
const UserFlowStack = createNativeStackNavigator();

/** @cont3xt api */
// import { useUserDataLayerValue } from "./Context/User/User";

export default function Layout() {
  // const [{ authenticated }] = useUserDataLayerValue();

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      {/* <UserFlowStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      > */}
        {/* <UserFlowStack.Screen name="Home" component={Home} /> */}
      {/* </UserFlowStack.Navigator> */}
    </NavigationContainer>
  );
}
