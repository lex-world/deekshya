import React from "react";

/**
 * @packages
 */
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/**
 * @pages
 */
import LanguageSelector from "./Screens/LanguageSelector";

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
      <UserFlowStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <UserFlowStack.Screen name="Language Selection" component={LanguageSelector} />
      </UserFlowStack.Navigator>
    </NavigationContainer>
  );
}
