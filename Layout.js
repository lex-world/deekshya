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
import Authentication from "./Screens/Authentication/Authentication";
import Login from "./Screens/Authentication/Login";
import Register from "./Screens/Authentication/Register";
import ForgotPassword from "./Screens/Authentication/ForgotPassword";

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
        <UserFlowStack.Screen name="Authentication" component={Authentication} />
        <UserFlowStack.Screen name="Login" component={Login} />
        <UserFlowStack.Screen name="Forgot Password" component={ForgotPassword} />
        <UserFlowStack.Screen name="Register" component={Register} />
      </UserFlowStack.Navigator>
    </NavigationContainer>
  );
}
