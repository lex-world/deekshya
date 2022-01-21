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
import Welcome from "./Screens/Welcome";
import GenderSelection from "./Screens/Registration/GenderSelection";
import NameRegistration from "./Screens/Registration/NameRegistration";
import HomeScreen from "./Screens/HomeScreen";

/**
 * * @dev Unauthenticated User Stack
 */
const UserFlowStack = createNativeStackNavigator();

/** @cont3xt api */
// import { useUserDataLayerValue } from "./Context/User/User";
import HomeScreenContextData from "./Context/HomeScreenContext";

export default function Layout() {
  // const [{ authenticated }] = useUserDataLayerValue();

  return (
    <HomeScreenContextData>
      <NavigationContainer>
        <UserFlowStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <UserFlowStack.Screen
            name="Language Selection"
            component={LanguageSelector}
          />
          <UserFlowStack.Screen
            name="Authentication"
            component={Authentication}
          />
          <UserFlowStack.Screen name="Login" component={Login} />
          <UserFlowStack.Screen
            name="Forgot Password"
            component={ForgotPassword}
          />
          <UserFlowStack.Screen name="Register" component={Register} />
          <UserFlowStack.Screen name="Register Success" component={Welcome} />
          <UserFlowStack.Screen
            name="Gender Selection"
            component={GenderSelection}
          />
          <UserFlowStack.Screen
            name="Name Registration"
            component={NameRegistration}
          />
          <UserFlowStack.Screen name="Home" component={HomeScreen} />
        </UserFlowStack.Navigator>
      </NavigationContainer>
    </HomeScreenContextData>
  );
}
